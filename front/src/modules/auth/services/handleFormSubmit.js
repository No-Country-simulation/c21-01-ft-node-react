import axios from "axios";

export const handleFormSubmit = async (values, formType) => {
  try {
    let userId = 0;
    if (formType === "register") {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_API_BASE}/users/register`,
          {
            Name: values.name,
            Email: values.email,
            Password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
      } catch (error) {
        return { success: false, message: error };
      }
      return { success: true, userId: userId };
    } else if (formType === "login") {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API_BASE}/users/login`,
          {
            Email: values.email,
            Password: values.password,
          },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("%c data :", "background-color:#048A81", data);
        userId = data.res.UserId;
        localStorage.setItem("userName", data.res.Name);
      } catch (error) {
        return { success: false, message: error };
      }
      return { success: true, userId };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false, error: error };
  }
};
