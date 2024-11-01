import axios from 'axios';

export const handleFormSubmit = async (values, formType) => {
    try {
      let userId = 0;
      if (formType === "register") {
        try {
          const res = await axios.post('http://localhost:3000/users/register', {
            Name: values.name,
            Email: values.email,
            Password: values.password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
          userId = res.data.userId;
          localStorage.setItem('userName', res.data.nameUser)
        } catch (error) {
          return { success: false, message: error};
        }
        return { success: true, userId};
      } else if (formType === "login") {
        try {
          const res = await axios.post('http://localhost:3000/users/login', {
            Email: values.email,
            Password: values.password
          },
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
          )
          userId = res.data.userId;
          localStorage.setItem('userName', res.data.nameUser)
        } catch (error) {
          return { success: false, message: error};
        }
        return { success: true, userId};
      } else {
        return { success: false }
      }
    } catch (error) {
      return {success: false, error: error}
    }

};
