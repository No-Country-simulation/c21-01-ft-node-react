import * as Yup from "yup";

export const entryValidationSchema = Yup.object().shape({
  title: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, "Solo se permiten letras")
    .max(16)
    .required("El título es obligatorio"),
  date: Yup.date().required("La fecha es obligatoria"),
  amount: Yup.number()
    .typeError("Debe ser un número")
    .required("El monto es obligatorio"),
});
