import { useEffect, useRef, useState } from 'preact/hooks';
import { useWindowSize } from './use-window-size';

// Min distance of cursor moving before drag will run
const DISTANCE_THRESHOLD = 8;
// For throttling to avoid redundant redrawing
const TIME_THRESHOLD = 10;

interface DraggablePositions {
  mouseStartPositionX: number;
  mouseStartPositionY: number;
  draggableAreaPositionX: number;
  draggableAreaPositionY: number;
}

export enum AxisMovementType {
  X,
  Y,
  XY,
}

interface StoredValues {
  positionX: number | null;
  positionY: number | null;
  windowWidth: number | null;
  windowHeight: number | null;
  isStickedToRight: boolean;
}

export const useDraggableWindow = (
  // Specifies element that initiates drag
  handleElem: HTMLElement,
  // Specifies area that should be draggable after interaction with handleElem
  draggableArea: HTMLElement,
  axis = AxisMovementType.XY,
) => {
  const { width, height } = useWindowSize();
  const startTime = useRef<number>();
  const [isDragging, setIsDragging] = useState(false);
  const [draggablePositions, setDraggablePositions] = useState<DraggablePositions | null>(null);
  const currentValues = useRef<StoredValues>({
    positionX: null,
    positionY: null,
    windowWidth: null,
    windowHeight: null,
    isStickedToRight: false,
  });

  const resetPosition = () => {
    const { left, top } = draggableArea.style;
    currentValues.current = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      positionX: +left.slice(0, -2),
      positionY: +top.slice(0, -2),
      isStickedToRight: false,
    };
  };

  const checkAreaLimits = (
    position: number,
    axis: Exclude<AxisMovementType, AxisMovementType.XY>,
  ) => {
    const getPositionInLimits = ({
      draggableAreaSize,
      limit,
    }: {
      draggableAreaSize: number;
      limit: number;
    }) => {
      if (position < 0) {
        return 0;
      }

      if (position + draggableAreaSize > limit) {
        return limit - draggableAreaSize;
      }

      return position;
    };

    const { innerWidth, innerHeight } = window;
    const { offsetWidth, offsetHeight } = draggableArea;
    const isAxisX = axis === AxisMovementType.X;
    const options = {
      draggableAreaSize: isAxisX ? offsetWidth : offsetHeight,
      limit: isAxisX ? innerWidth : innerHeight,
    };

    return getPositionInLimits(options);
  };

  const alignOnResize = (
    position: number,
    axis: Exclude<AxisMovementType, AxisMovementType.XY>,
  ) => {
    const {
      positionX,
      positionY,
      windowWidth,
      windowHeight,
      isStickedToRight,
    } = currentValues.current;

    switch (axis) {
      case AxisMovementType.X:
        return isStickedToRight
          ? window.innerWidth - draggableArea.offsetWidth
          : (Number(positionX) * window.innerWidth) / Number(windowWidth);
      case AxisMovementType.Y:
        return (Number(positionY) * window.innerHeight) / Number(windowHeight);
      default:
        return position;
    }
  };

  const redraw = (x: number, y: number) => {
    switch (axis) {
      case AxisMovementType.X:
        draggableArea.style.left = `${x}px`;
        break;
      case AxisMovementType.Y:
        draggableArea.style.top = `${y}px`;
        break;
      case AxisMovementType.XY:
      default:
        draggableArea.style.left = `${x}px`;
        draggableArea.style.top = `${y}px`;
    }

    currentValues.current = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
      positionX: x,
      positionY: y,
      isStickedToRight: x + draggableArea.offsetWidth === window.innerWidth,
    };
  };

  const getDraggableAreaPosition = () => {
    const computed = window.getComputedStyle(draggableArea);
    const draggableAreaPositionX = +computed.left.slice(0, -2);
    const draggableAreaPositionY = +computed.top.slice(0, -2);

    return {
      draggableAreaPositionX,
      draggableAreaPositionY,
    };
  };

  const onDragMove = (e: MouseEvent) => {
    if (!draggablePositions) {
      return;
    }
    const {
      mouseStartPositionX,
      mouseStartPositionY,
      draggableAreaPositionX,
      draggableAreaPositionY,
    } = draggablePositions;
    const x = e.clientX;
    const y = e.clientY;
    const leftDiff = x - mouseStartPositionX;
    const topDiff = y - mouseStartPositionY;

    // Calculate distance of cursor moving
    // eslint-disable-next-line no-restricted-properties
    if (Math.sqrt(Math.pow(leftDiff, 2) + Math.pow(topDiff, 2)) < DISTANCE_THRESHOLD) {
      return;
    }

    const now = Date.now();
    const timeDiff = now - Number(startTime.current);
    const preparedX = checkAreaLimits(draggableAreaPositionX + leftDiff, AxisMovementType.X);
    const preparedY = checkAreaLimits(draggableAreaPositionY + topDiff, AxisMovementType.Y);

    if (timeDiff > TIME_THRESHOLD) {
      startTime.current = now;
      redraw(preparedX, preparedY);
    }
  };

  const onDragEnd = (e: MouseEvent) => {
    setIsDragging(false);
    onDragMove(e);
  };

  const onDragStart = (e: MouseEvent) => {
    const { draggableAreaPositionX, draggableAreaPositionY } = getDraggableAreaPosition();

    startTime.current = Date.now();

    setIsDragging(true);
    setDraggablePositions({
      mouseStartPositionX: e.clientX,
      mouseStartPositionY: e.clientY,
      draggableAreaPositionX,
      draggableAreaPositionY,
    });
  };

  const onResize = () => {
    if (!draggableArea) {
      return;
    }

    const { draggableAreaPositionX, draggableAreaPositionY } = getDraggableAreaPosition();
    const alignedX = alignOnResize(draggableAreaPositionX, AxisMovementType.X);
    const alignedY = alignOnResize(draggableAreaPositionY, AxisMovementType.Y);
    const preparedX = checkAreaLimits(alignedX, AxisMovementType.X);
    const preparedY = checkAreaLimits(alignedY, AxisMovementType.Y);

    startTime.current = Date.now();
    redraw(preparedX, preparedY);
  };

  useEffect(() => {
    if (handleElem) {
      handleElem.onmousedown = onDragStart;
    }
  }, [handleElem]);

  useEffect(() => {
    if (!draggableArea) {
      return;
    }

    const { draggableAreaPositionX, draggableAreaPositionY } = getDraggableAreaPosition();

    if (!draggableAreaPositionX || !draggableAreaPositionY) {
      draggableArea.style.position = 'absolute';
    }

    const resizeObserver = new ResizeObserver(() => onResize());

    resizeObserver.observe(draggableArea);

    return () => resizeObserver.unobserve(draggableArea);
  }, [draggableArea]);

  useEffect(() => {
    if (!draggablePositions) {
      return;
    }

    const unsubscribe = () => {
      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup', onDragEnd);
    };

    if (isDragging) {
      document.addEventListener('mousemove', onDragMove);
      document.addEventListener('mouseup', onDragEnd);
    } else {
      unsubscribe();
    }

    return unsubscribe;
  }, [draggablePositions, isDragging]);

  // React on the window resize
  useEffect(() => {
    onResize();
  }, [width, height]);

  return {
    resetPosition,
  };
};
