export const generateRandomId = () => {
  return 'uw' + (~~(Math.random() * 1e8)).toString(16);
};
