import { useCustomFormik } from "../hooks/useCustomFormik";
import { loginSchema } from "../schemas/validationSchemas";

import { FormInput } from "./FormInput";

import logo from "../../../assets/logotipo.svg";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export const LoginForm = () => {
  const { handleSubmit, handleChange, handleBlur, errors, touched, values } =
    useCustomFormik(
      {
        email: "",
        password: "",
      },
      loginSchema,
      "login"
    );

  return (
    <div className="w-1/2 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="max-w-md w-full bg-white p-6 space-y-4"
      >
        <div>
          <img src={logo} alt="logo" className="w-2/3 h-full object-cover" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-gray-800">Bienvenido</h3>
          <p className="text-sm text-gray-500">Accede a tu Cuenta</p>
        </div>

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

        <div>
          <a className="text-sm text-gray-400" href="#">
            ¿Has olvidado tu contraseña?
          </a>
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-1/2 bg-cyan-700 text-white py-3 rounded-3xl hover:bg-cyan-950 transition duration-300"
          >
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
};
