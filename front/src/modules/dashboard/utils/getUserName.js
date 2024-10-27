export const getUserName = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.name || "Usuario";
  } catch (error) {
    return error;
  }
};
