import { h, Component, createRef, RefObject, ComponentChildren, JSX } from 'preact';
import { simpleDebounce } from '../../utils/simpleDebounce';
import './custom-scroll.scss';

interface Layout {
  left: number;
  right: number;
  top: number;
  height: number;
}

const ensureWithinLimits = (value: number, min: number, max: number) => {
  min = !min && min !== 0 ? value : min;
  max = !max && max !== 0 ? value : max;
  if (min > max) {
    console.error('min limit is greater than max limit');
    return value;
  }
  if (value < min) {
    return min;
  }
  if (value > max) {
    return max;
  }
  return value;
};

function isEventPosOnDomNode(event: MouseEvent, domNode: HTMLElement) {
  const nodeClientRect = domNode.getBoundingClientRect();
  return isEventPosOnLayout(event, nodeClientRect);
}

function isEventPosOnLayout(event: MouseEvent, layout: Layout) {
  return (
    event.clientX > layout.left &&
    event.clientX < layout.right &&
    event.clientY > layout.top &&
    event.clientY < layout.top + layout.height
  );
}

interface CustomScrollProps {
  scrollTo?: number;
  children?: ComponentChildren;
  allowOuterScroll?: boolean;
  heightRelativeToParent?: string;
  onScroll?: (e: any) => void;
  addScrolledClass?: boolean;
  freezePosition?: boolean;
  handleClass?: string;
  minScrollHandleHeight?: number;
  flex?: string;
  rtl?: boolean;
  keepAtBottom?: boolean;
  className?: string;
  scrollContainerRef?: RefObject<HTMLDivElement>;
}

interface CustomScrollState {
  onDrag: boolean;
  scrollPos: any;
}

export class CustomScroll extends Component<CustomScrollProps, CustomScrollState> {
  static defaultProps = {
    handleClass: 'inner-handle',
    minScrollHandleHeight: 38,
  };
  private scrollbarYWidth: number;
  private readonly hideScrollThumb: { (): void; cancel: () => void };
  private contentHeight!: number;
  private visibleHeight!: number;
  private scrollHandleHeight!: number;
  private scrollRatio!: number;
  private hasScroll!: boolean;
  private startDragHandlePos!: number;
  private startDragMousePos!: number;

  get scrollContainerRef() {
    return this.props.scrollContainerRef || this.innerContainerRef;
  }

  constructor(props: CustomScrollProps) {
    super(props);

    this.scrollbarYWidth = 0;
    this.state = {
      scrollPos: 0,
      onDrag: false,
    };

    this.hideScrollThumb = simpleDebounce(() => {
      this.setState({
        onDrag: false,
      });
    }, 500);
  }

  componentDidMount() {
    if (typeof this.props.scrollTo !== 'undefined' && this.props.scrollTo !== null) {
      this.updateScrollPosition(this.props.scrollTo);
    } else {
      this.forceUpdate();
    }
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.addEventListener('wheel', this.blockOuterScroll, {
        passive: false,
      });
    }
  }

  componentDidUpdate(prevProps: CustomScrollProps, prevState: CustomScrollState) {
    const prevContentHeight = this.contentHeight;
    const prevVisibleHeight = this.visibleHeight;
    const innerContainer = this.getScrolledElement();
    const reachedBottomOnPrevRender = prevState.scrollPos >= prevContentHeight - prevVisibleHeight;

    this.contentHeight = innerContainer.scrollHeight;
    this.scrollbarYWidth = innerContainer.offsetWidth - innerContainer.clientWidth;
    this.visibleHeight = innerContainer.clientHeight;
    this.scrollRatio = this.contentHeight ? this.visibleHeight / this.contentHeight : 1;

    this.toggleScrollIfNeeded();
    const isExternalRender = this.state === prevState;
    if (this.props.freezePosition || prevProps.freezePosition) {
      this.adjustFreezePosition(prevProps);
    }
    if (
      typeof this.props.scrollTo !== 'undefined' &&
      this.props.scrollTo !== prevProps.scrollTo &&
      this.props.scrollTo !== null
    ) {
      this.updateScrollPosition(this.props.scrollTo);
    } else if (this.props.keepAtBottom && isExternalRender && reachedBottomOnPrevRender) {
      this.updateScrollPosition(this.contentHeight - this.visibleHeight);
    }
  }

  componentWillUnmount() {
    this.hideScrollThumb.cancel();
    document.removeEventListener('mousemove', this.onHandleDrag);
    document.removeEventListener('mouseup', this.onHandleDragEnd);

    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.removeEventListener('wheel', this.blockOuterScroll);
    }
  }

  innerContainerRef = createRef();
  customScrollbarRef = createRef();
  scrollHandleRef = createRef();
  contentWrapperRef = createRef();
  containerRef = createRef();

  adjustFreezePosition = (prevProps: CustomScrollProps) => {
    if (!this.contentWrapperRef.current) {
      return;
    }
    const innerContainer = this.getScrolledElement();
    const contentWrapper = this.contentWrapperRef.current;

    if (this.props.freezePosition) {
      contentWrapper.scrollTop = this.state.scrollPos;
    }

    if (prevProps.freezePosition) {
      innerContainer.scrollTop = this.state.scrollPos;
    }
  };

  toggleScrollIfNeeded = () => {
    const shouldHaveScroll = this.contentHeight - this.visibleHeight > 1;
    if (this.hasScroll !== shouldHaveScroll) {
      this.hasScroll = shouldHaveScroll;
      this.forceUpdate();
    }
  };

  updateScrollPosition = (scrollValue: number) => {
    const innerContainer = this.getScrolledElement();
    const updatedScrollTop = ensureWithinLimits(
      scrollValue,
      0,
      this.contentHeight - this.visibleHeight,
    );
    innerContainer.scrollTop = updatedScrollTop;
    this.setState({
      scrollPos: updatedScrollTop,
    });
  };

  onClick = (event: MouseEvent) => {
    if (
      !this.hasScroll ||
      !this.isMouseEventOnCustomScrollbar(event) ||
      this.isMouseEventOnScrollHandle(event)
    ) {
      return;
    }
    const newScrollHandleTop = this.calculateNewScrollHandleTop(event);
    const newScrollValue = this.getScrollValueFromHandlePosition(newScrollHandleTop);

    this.updateScrollPosition(newScrollValue);
  };

  isMouseEventOnCustomScrollbar = (event: MouseEvent) => {
    if (!this.customScrollbarRef.current) {
      return false;
    }
    const customScrollElm = this.containerRef.current;
    const boundingRect = customScrollElm.getBoundingClientRect();
    const customScrollbarBoundingRect = this.customScrollbarRef.current.getBoundingClientRect();
    const horizontalClickArea = this.props.rtl
      ? {
          left: boundingRect.left,
          right: customScrollbarBoundingRect.right,
        }
      : {
          left: customScrollbarBoundingRect.left,
          width: boundingRect.right,
        };
    const customScrollbarLayout = Object.assign(
      {},
      {
        left: boundingRect.left,
        right: boundingRect.right,
        top: boundingRect.top,
        height: boundingRect.height,
      },
      horizontalClickArea,
    );
    return isEventPosOnLayout(event, customScrollbarLayout);
  };

  isMouseEventOnScrollHandle = (event: MouseEvent) => {
    if (!this.scrollHandleRef.current) {
      return false;
    }
    const scrollHandle = this.scrollHandleRef.current;

    return isEventPosOnDomNode(event, scrollHandle);
  };

  calculateNewScrollHandleTop = (clickEvent: MouseEvent) => {
    const domNode = this.containerRef.current;
    const boundingRect = domNode.getBoundingClientRect();
    const currentTop = boundingRect.top + window.pageYOffset;
    const clickYRelativeToScrollbar = clickEvent.pageY - currentTop;
    const scrollHandleTop = this.getScrollHandleStyle().top;
    let newScrollHandleTop;
    const isBelowHandle = clickYRelativeToScrollbar > scrollHandleTop + this.scrollHandleHeight;
    if (isBelowHandle) {
      newScrollHandleTop =
        scrollHandleTop +
        Math.min(this.scrollHandleHeight, this.visibleHeight - this.scrollHandleHeight);
    } else {
      newScrollHandleTop = scrollHandleTop - Math.max(this.scrollHandleHeight, 0);
    }
    return newScrollHandleTop;
  };

  getScrollValueFromHandlePosition = (handlePosition: number) => handlePosition / this.scrollRatio;

  getScrollHandleStyle = () => {
    const handlePosition = this.state.scrollPos * this.scrollRatio;
    this.scrollHandleHeight = this.visibleHeight * this.scrollRatio;
    return {
      height: this.scrollHandleHeight,
      top: handlePosition,
    };
  };

  adjustCustomScrollPosToContentPos = (scrollPosition: number) => {
    this.setState({
      scrollPos: scrollPosition,
    });
  };

  onScroll = (event: UIEvent) => {
    if (this.props.freezePosition) {
      return;
    }
    this.hideScrollThumb();
    this.adjustCustomScrollPosToContentPos((event.currentTarget as HTMLDivElement).scrollTop);
    if (this.props.onScroll) {
      this.props.onScroll(event);
    }
  };

  getScrolledElement = () => this.scrollContainerRef.current;

  onMouseDown = (event: MouseEvent) => {
    if (!this.hasScroll || !this.isMouseEventOnScrollHandle(event)) {
      return;
    }

    this.startDragHandlePos = this.getScrollHandleStyle().top;
    this.startDragMousePos = event.pageY;
    this.setState({
      onDrag: true,
    });
    document.addEventListener('mousemove', this.onHandleDrag, { passive: false });
    document.addEventListener('mouseup', this.onHandleDragEnd, { passive: false });
  };

  onTouchStart = () => {
    this.setState({
      onDrag: true,
    });
  };

  onHandleDrag = (event: MouseEvent) => {
    event.preventDefault();
    const mouseDeltaY = event.pageY - this.startDragMousePos;
    const handleTopPosition = ensureWithinLimits(
      this.startDragHandlePos + mouseDeltaY,
      0,
      this.visibleHeight - this.scrollHandleHeight,
    );
    const newScrollValue = this.getScrollValueFromHandlePosition(handleTopPosition);
    this.updateScrollPosition(newScrollValue);
  };

  onHandleDragEnd = (e: MouseEvent) => {
    this.setState({
      onDrag: false,
    });
    e.preventDefault();
    document.removeEventListener('mousemove', this.onHandleDrag);
    document.removeEventListener('mouseup', this.onHandleDragEnd);
  };

  blockOuterScroll = (e: WheelEvent) => {
    if (this.props.allowOuterScroll) {
      return;
    }
    const contentNode = e.currentTarget as HTMLDivElement;
    const totalHeight = contentNode.scrollHeight;
    const maxScroll = totalHeight - contentNode.offsetHeight;
    const delta = e.deltaY % 3 ? e.deltaY : e.deltaY * 10;
    if (contentNode.scrollTop + delta <= 0) {
      contentNode.scrollTop = 0;
      e.preventDefault();
    } else if (contentNode.scrollTop + delta >= maxScroll) {
      contentNode.scrollTop = maxScroll;
      e.preventDefault();
    }
    e.stopPropagation();
  };

  getInnerContainerClasses = () => {
    if (this.state.scrollPos && this.props.addScrolledClass) {
      return 'inner-container content-scrolled';
    }
    return 'inner-container';
  };

  getScrollStyles = () => {
    const scrollSize = this.scrollbarYWidth || 0;
    const marginKey = this.props.rtl ? 'marginLeft' : 'marginRight';
    const innerContainerStyle: JSX.CSSProperties = {
      height: this.props.heightRelativeToParent || this.props.flex ? '100%' : '',
    };
    const contentWrapperStyle: JSX.CSSProperties = {
      height: this.props.heightRelativeToParent || this.props.flex ? '100%' : '',
      overflowY: this.props.freezePosition ? 'hidden' : 'visible',
    };

    if (scrollSize) {
      innerContainerStyle[marginKey] = -1 * scrollSize;
      contentWrapperStyle[marginKey] = 0;
    }

    return {
      innerContainer: innerContainerStyle,
      contentWrapper: contentWrapperStyle,
    };
  };

  getOuterContainerStyle = () => ({
    height: this.props.heightRelativeToParent || this.props.flex ? '100%' : '',
  });

  getRootStyles = () => {
    const result: { flex?: string; height?: string } = {};

    if (this.props.heightRelativeToParent) {
      // result.height = this.props.heightRelativeToParent;
    } else if (this.props.flex) {
      result.flex = this.props.flex;
    }

    return result;
  };

  enforceMinHandleHeight = (calculatedStyle: { height: number; top: number }) => {
    const minHeight = Number(this.props.minScrollHandleHeight);
    if (calculatedStyle.height >= minHeight) {
      return calculatedStyle;
    }

    const diffHeightBetweenMinAndCalculated = minHeight - calculatedStyle.height;
    const scrollPositionToAvailableScrollRatio =
      this.state.scrollPos / (this.contentHeight - this.visibleHeight);
    const scrollHandlePosAdjustmentForMinHeight =
      diffHeightBetweenMinAndCalculated * scrollPositionToAvailableScrollRatio;
    const handlePosition = calculatedStyle.top - scrollHandlePosAdjustmentForMinHeight;

    return {
      height: minHeight,
      top: handlePosition,
    };
  };

  render() {
    const scrollStyles = this.getScrollStyles();
    const rootStyle = this.getRootStyles();
    const scrollHandleStyle = this.enforceMinHandleHeight(this.getScrollHandleStyle());
    const className = [
      this.props.className || '',
      'custom-scroll',
      this.state.onDrag ? 'scroll-handle-dragged' : '',
    ].join(' ');

    const scrollLineHeight = this.containerRef.current?.offsetHeight;

    return (
      <div className={className} style={rootStyle} ref={this.containerRef}>
        <div
          className="outer-container"
          style={this.getOuterContainerStyle()}
          onMouseDown={this.onMouseDown}
          onTouchStart={this.onTouchStart}
          onClick={this.onClick}
        >
          {this.hasScroll ? (
            <div className="positioning">
              <div
                ref={this.customScrollbarRef}
                style={{
                  height: `${scrollLineHeight}px`,
                }}
                className={`custom-scrollbar ${this.props.rtl ? 'custom-scrollbar-rtl' : ''}`}
                key="scrollbar"
              >
                <div
                  ref={this.scrollHandleRef}
                  className="custom-scroll-handle"
                  style={scrollHandleStyle}
                >
                  <div className={this.props.handleClass} />
                </div>
              </div>
            </div>
          ) : null}
          <div
            ref={this.scrollContainerRef}
            className={this.getInnerContainerClasses()}
            style={scrollStyles.innerContainer}
            onScroll={this.onScroll}
            tabIndex={-1}
          >
            <div
              className="content-wrapper"
              ref={this.contentWrapperRef}
              style={scrollStyles.contentWrapper}
            >
              {this.props.children}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
