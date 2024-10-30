import { useFormik } from "formik";
import { handleFormSubmit } from "../services/handleFormSubmit";
import {useState } from "react";
import axios from 'axios'
export const useCustomFormik = (initialValues, validationSchema, formType) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formResult, setFormResult] = useState({ success: false });

  const closePopup = () => setShowPopup(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      conexionApi(values,formType)
      console.log(formType);
      const result = handleFormSubmit(values, formType);
            
      setFormResult({ success: result.success });
      setShowPopup(true);
    },
  });

  const conexionApi = async (values,formType) => {
    if(formType == 'login') {
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
        alert(res.data.message) 
      } catch (error) {
        alert(error.response)
      }
    } else {
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
        alert(res.data.message) 
      } catch (error) {
        alert(error.response)
      }
    }
    }


  return { ...formik, showPopup, formResult, closePopup };
};
