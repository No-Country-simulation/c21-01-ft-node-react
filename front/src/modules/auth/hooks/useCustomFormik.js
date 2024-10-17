import { useFormik } from "formik";

export const useCustomFormik = (initialValues, validationSchema, onSubmit) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return formik;
};
