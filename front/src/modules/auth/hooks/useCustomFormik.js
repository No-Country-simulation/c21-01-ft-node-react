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
      const result = handleFormSubmit(values, formType);
      


      setFormResult({ success: result.success });
      setShowPopup(true);
    },
  });

  const conexionApi = async (values,formType) => {
    if(formType == 'login') {
      try {
        const res = await axios.post('http://localhost:3000/users/login', {
          email: values.email,
          password: values.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      
        )
      alert(res.message) 
      } catch (error) {
        console.log(error.message)
      }
    } else {
      try {
        const res = await axios.post('http://localhost:3000/users/register', {
          name: values.name,
          email: values.email,
          password: values.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      
        )
      alert(res.message) 
      } catch (error) {
        console.log(error.message)
      }
    }
    }


  return { ...formik, showPopup, formResult, closePopup };
};
