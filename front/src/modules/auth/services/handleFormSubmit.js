export const handleFormSubmit = (values, formType) => {
  try {
    if (formType === "register") {
      localStorage.setItem("user", JSON.stringify(values));
      return { success: true };
    } else if (formType === "login") {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === values.email &&
        storedUser.password === values.password
      ) {
        return { success: true };
      } else {
        return { success: false, error: "Incorrect username or password" };
      }
    }
  } catch (error) {
    return { success: false, error };
  }
};
