import axios from 'axios';

export const handleFormSubmit = async (values, formType) => {
    try {
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
        } catch (error) {
          return { success: false, message: error};
        }
        return { success: true, message: 'User successfully created' };
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
        } catch (error) {
          return { success: false, message: error};
        }
        return { success: true , message: 'Login Success!' };
      } else {
        return { success: false }
      }
    } catch (error) {
      return {success: false, error: error}
    }

};
