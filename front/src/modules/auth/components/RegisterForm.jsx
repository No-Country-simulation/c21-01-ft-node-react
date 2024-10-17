import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object().shape({
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

export const RegisterForm = () => {
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      validationSchema: schema,
    });

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre completo"
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.name && errors.name && <span>{errors.name}</span>}

      <input
        type="email"
        placeholder="Correo electrónico"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.email && errors.email && <span>{errors.email}</span>}

      <input
        type={"password"}
        placeholder="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {touched.password && errors.password && <span>{errors.password}</span>}

      <button type="submit">Registrarme</button>
      <br />
    </form>
  );
};
