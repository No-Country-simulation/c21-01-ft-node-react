import { useFormik } from "formik";
import { handleFormSubmit } from "../services/handleFormSubmit";
import { useNavigate } from "react-router-dom";

export const useCustomFormik = (initialValues, validationSchema, formType) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      handleFormSubmit(values, formType);
      if (formType === "register" || formType === "login") {
        navigate("/dashboard");
      }
    },
  });

  return formik;
};
