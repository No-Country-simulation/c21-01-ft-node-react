import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  name: Yup.string().required("Por favor ingresa tu nombre completo."),
  email: Yup.string()
    .email("Por favor ingresa un correo electrónico válido")
    .required("El correo electrónico es obligatorio."),
  password: Yup.string()
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .matches(/[A-Z]/, "La contraseña debe tener al menos una mayúscula.")
    .matches(/\d/, "La contraseña debe tener al menos un número.")
    .required("La contraseña es obligatoria."),
});
