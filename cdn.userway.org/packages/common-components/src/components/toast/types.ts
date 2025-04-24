export enum ToastType {
  Success = 'success',
  Error = 'error',
}

export interface ToastNotification {
  id: string;
  type: ToastType;
  text: string;
}
