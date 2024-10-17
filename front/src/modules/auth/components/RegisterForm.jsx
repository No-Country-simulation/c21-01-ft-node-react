import { useFormik } from "formik";
import * as Yup from "yup";
import lines from "../../../assets/lines.svg";
import logo from "../../../assets/logotipo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

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
      onSubmit: (values) => {
        console.log("Form values", values);
      },
    });

  return (
    <div className="flex h-screen">
      {/* Imagen a la izquierda */}
      <div className="w-1/2 flex-shrink-0h-72 bg-gradient-to-b from-teal-600 to-cyan-950 static">
        <div className="absolute bottom-0 left-0">
          <img
            src={lines}
            alt="Registro"
            className="w-1/2 h-full object-cover "
          />
        </div>
      </div>

      {/* Formulario a la derecha */}
      <div className="w-1/2 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-md w-full bg-white p-6 space-y-4"
        >
          {/* Logotipo */}
          <div>
            <img src={logo} alt="logo" className="w-1/2 h-full object-cover" />
          </div>
          {/* Titulo y sub */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Regístrate</h3>
            <p className="text-sm text-gray-500">Crea tu cuenta</p>
          </div>

          {/* Input nombre */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faUser}
              className={`absolute left-5 top-6 transform -translate-y-1/2 transition-all duration-200 
              ${
                touched.name && values.name ? "text-cyan-700" : "text-gray-300"
              }`}
            />
            <input
              type="text"
              placeholder="Nombre completo"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 pl-11 border border-gray-200 rounded-3xl 
              focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-200`}
            />
            {touched.name && errors.name && (
              <span className="text-red-400 text-sm">{errors.name}</span>
            )}
          </div>

          {/* Input correo */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faEnvelope}
              className={`absolute left-5 top-6 transform -translate-y-1/2 transition-all duration-200 
              ${
                touched.email && values.email
                  ? "text-cyan-700"
                  : "text-gray-300"
              }`}
            />
            <input
              type="email"
              placeholder="Correo electrónico"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 pl-11 border border-gray-200 rounded-3xl 
              focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-200`}
            />
            {touched.email && errors.email && (
              <span className="text-red-400 text-sm">{errors.email}</span>
            )}
          </div>

          {/* Input contraseña */}
          <div className="relative">
            <FontAwesomeIcon
              icon={faLock}
              className={`absolute left-5 top-6 transform -translate-y-1/2 transition-all duration-200 
              ${
                touched.password && values.password
                  ? "text-cyan-700"
                  : "text-gray-300"
              }`}
            />
            <input
              type="password"
              placeholder="Contraseña"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={`w-full p-3 pl-11 border border-gray-200 rounded-3xl 
              focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-200`}
            />
            {touched.password && errors.password && (
              <span className="text-red-400 text-sm">{errors.password}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-1/2 bg-cyan-700 text-white py-3 rounded-3xl hover:bg-cyan-950 transition duration-300"
          >
            Registrarme
          </button>
          <div>
            <a className="text-sm text-gray-400" href="#">
              ¿Ya tienes una cuenta?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
