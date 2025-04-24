export interface PostMessageData extends Record<string, any> {
  action: string;
  type?: string;
}

export const sendPostMessage = <T = PostMessageData>(data: T) => {
  window.parent.postMessage(
    {
      isUserWay: true,
      ...data,
    },
    '*',
  );
};
