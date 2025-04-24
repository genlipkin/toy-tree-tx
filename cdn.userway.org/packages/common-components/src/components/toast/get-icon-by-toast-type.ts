import { CloseIcon, TickIcon } from '@uw/icons';
import { ToastType } from './types';

export const getIconByToastType = (type: ToastType) => {
  switch (type) {
    case ToastType.Error:
      return CloseIcon;
    case ToastType.Success:
    default:
      return TickIcon;
  }
};
