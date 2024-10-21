export const handleFormSubmit = (values, formType) => {
  try {
    if (formType === "register") {
      localStorage.setItem("user", JSON.stringify(values));
      console.log("Registered user: ", values);
    } else if (formType === "login") {
      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (
        storedUser &&
        storedUser.email === values.email &&
        storedUser.password === values.password
      ) {
        console.log("Login successfull: ", values);
      } else {
        console.error("Incorrect username or password: ");
      }
    }
  } catch (error) {
    console.error("Error sending form: ", error);
  }
};
