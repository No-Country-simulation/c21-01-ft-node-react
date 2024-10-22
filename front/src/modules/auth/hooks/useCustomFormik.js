import { useFormik } from "formik";
import { handleFormSubmit } from "../services/handleFormSubmit";
import { useNavigate } from "react-router-dom";

export const useCustomFormik = (initialValues, validationSchema, formType) => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      const result = handleFormSubmit(values, formType);

      if (result.success) {
        navigate("/dashboard");
      } else {
        console.error(result.error || "An error occurred");
      }
    },
  });

  return formik;
};
