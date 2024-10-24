import { useCustomFormik } from "../hooks/useCustomFormik";
import { registerSchema } from "../schemas/validationSchemas";
import lines from "../../../assets/lines.svg";
import logo from "../../../assets/logotipo.svg";
import { faUser, faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

import { FormInput } from "./FormInput";

export const RegisterForm = () => {
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useCustomFormik(
      {
        name: "",
        email: "",
        password: "",
      },
      registerSchema,
      (values) => {
        console.log("Register Form values", values);
      }
    );

  return (
    <div className="flex h-screen">
      <div className="w-1/2 flex-shrink-0h-72 bg-gradient-to-b from-teal-600 to-cyan-950 static">
        <div className="absolute bottom-0 left-0">
          <img
            src={lines}
            alt="Registro"
            className="w-1/2 h-full object-cover "
          />
        </div>
      </div>

      <div className="w-1/2 flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-md w-full bg-white p-6 space-y-4"
        >
          <div>
            <img src={logo} alt="logo" className="w-1/2 h-full object-cover" />
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800">Regístrate</h3>
            <p className="text-sm text-gray-500">Crea tu cuenta</p>
          </div>

          <FormInput
            icon={faUser}
            type="text"
            placeholder="Nombre completo"
            name="name"
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.name}
            error={errors.name}
          />

          <FormInput
            icon={faEnvelope}
            type="email"
            placeholder="Correo electrónico"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.email}
            error={errors.email}
          />

          <FormInput
            icon={faLock}
            type="password"
            placeholder="Contraseña"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            touched={touched.password}
            error={errors.password}
          />

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
