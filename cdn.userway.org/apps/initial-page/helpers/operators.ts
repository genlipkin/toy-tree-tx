/*
 * Polyfill of ([]).includes() method for IE browsers support
 * */
export const includes = <T>(array: T[], value: T) => array.indexOf(value) !== -1;

/*
 * Wait async operation with delay in milliseconds
 * */
export const wait = (milliseconds: number) =>
  new Promise<void>((resolve) => setTimeout(resolve, milliseconds));

/*
 * Trigger callback by keyboard keys Enter (13) or Space (32)
 * */
export const onKeyboardSelection =
  (callback: (_?: KeyboardEvent) => void, options?: { preventEnabled: boolean }) =>
  (event: KeyboardEvent): void => {
    const { preventEnabled = true } = options || {};

    if (includes(['Space', 'Enter'], event.code)) {
      preventEnabled && event.preventDefault();
      callback(event);
    }
  };
