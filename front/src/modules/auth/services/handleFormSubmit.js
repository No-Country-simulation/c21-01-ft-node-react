export const handleFormSubmit = (values, formType) => {
  try {
    if (formType === "register") {
      localStorage.setItem("user", JSON.stringify(values));
      console.log("Registered user: ", values);
      return { success: true };
    } else if (formType === "login") {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === values.email &&
        storedUser.password === values.password
      ) {
        console.log("Login successfull: ", values);
        return { success: true };
      } else {
        console.error("Incorrect username or password: ");
        return { success: false, error: "Incorrect username or password" };
      }
    }
  } catch (error) {
    console.error("Error sending form: ", error);
    return { success: false, error: "An error occurred" };
  }
};
