export function wait(milliseconds: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

/*
 * Trigger callback by keyboard keys Enter or Space
 * */
export const onKeyboardSelection = (
  callback: (_?: KeyboardEvent) => void,
  options?: { preventEnabled: boolean },
) => (event: KeyboardEvent): void => {
  const { preventEnabled = true } = options || {};
  if (['Enter', ' ', 'Spacebar'].includes(event.key)) { 
    preventEnabled && event.preventDefault();
    callback(event);
  }
};
