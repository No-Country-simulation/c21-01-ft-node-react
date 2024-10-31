import { useFormik } from "formik";
import { handleFormSubmit } from "../services/handleFormSubmit";
import {useState } from "react";

export const useCustomFormik = (initialValues, validationSchema, formType) => {
  const [showPopup, setShowPopup] = useState(false);
  const [formResult, setFormResult] = useState({ success: false });

  const closePopup = () => setShowPopup(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const result = await handleFormSubmit(values, formType);
            
      setFormResult({ success: result.success });
      setShowPopup(true);
    },
  });


  return { ...formik, showPopup, formResult, closePopup };
};
