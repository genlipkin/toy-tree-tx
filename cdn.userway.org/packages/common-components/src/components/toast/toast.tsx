import { FunctionalComponent, h } from 'preact';
import { useContext } from 'preact/hooks';
import { ToastServiceContext } from './toast-service-provider';
import { getIconByToastType } from './get-icon-by-toast-type';

import './toast.scss';

type ToastProps = {
  className?: string;
};

export const Toast: FunctionalComponent<ToastProps> = ({ className = '' }) => {
  const { activeToast } = useContext(ToastServiceContext);

  if (!activeToast) {
    return null;
  }

  const Icon = getIconByToastType(activeToast.type);

  return (
    <div
      className={`toast toast_${activeToast.type} ${className}`}
      role="alert"
      aria-live="assertive"
    >
      <div className="toast__icon-wrapper">
        <Icon width={14} height={14} />
      </div>
      <p className="toast__text">{activeToast.text}</p>
    </div>
  );
};
