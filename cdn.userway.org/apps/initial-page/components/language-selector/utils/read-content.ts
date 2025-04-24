export const readContent = (data: InputEvent | string, sendNavigationReaderRequest, translate) => {
  // Pronounce string
  if (typeof data === 'string') return sendNavigationReaderRequest(data);

  // Pronounce input event
  if (data.data) sendNavigationReaderRequest(data.data);
  if (data.inputType === 'deleteContentBackward')
    sendNavigationReaderRequest(translate('widget.language.backspace'));
  if (data.inputType === 'deleteContentForward')
    sendNavigationReaderRequest(translate('widget.language.delete'));
};
