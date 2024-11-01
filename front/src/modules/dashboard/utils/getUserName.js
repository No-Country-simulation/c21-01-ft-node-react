export const getUserName = () => {
  try {
    const user = localStorage.getItem('userName');
    return user || "Usuario";
  } catch (error) {
    return error;
  }
};
