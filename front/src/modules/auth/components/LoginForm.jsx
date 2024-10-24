import { useCustomFormik } from "../hooks/useCustomFormik";
import { loginSchema } from "../schemas/validationSchemas";

import { FormInput } from "./FormInput";
import { Popup } from "./Popup";
import { Link } from "react-router-dom";
import logo from "../../../assets/logotipo.svg";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

export const LoginForm = () => {
  const {
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    touched,
    values,
    showPopup,
    formResult,
    closePopup,
  } = useCustomFormik(
    {
      email: "",
      password: "",
    },
    loginSchema,
    "login"
  );

  return (
    <div className="w-login-form flex flex-col justify-center items-center">
      <div className="mb-4">
        <img src={logo} alt="logo" className="w-2/3 mb-4 h-full object-cover" />
      </div>

      {!showPopup ? (
        <form
          onSubmit={handleSubmit}
          noValidate
          className="max-w-md w-form-content bg-white space-y-4"
        >
          <div>
            <h3 className="text-heading font-bold text-text-primary">
              Bienvenido
            </h3>
            <p className="text-body text-text-secondary">Accede a tu Cuenta</p>
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
            <a className="text-body text-text-link" href="#">
              ¿Has olvidado tu contraseña?
            </a>
          </div>

          <div className="w-full flex justify-between">
            <button
              type="submit"
              className="w-button-large bg-primary text-white py-buttonPadding rounded-3xl hover:bg-primary-dark transition duration-300"
            >
              Ingresar
            </button>
            <Link
              to="/register"
              className="w-button-small flex justify-center items-center text-center border border-primary text-primary mx-2 py-buttonPadding rounded-3xl hover:bg-primary-dark hover:text-white hover:border-primary-dark transition duration-300"
            >
              Regístrate
            </Link>
          </div>
        </form>
      ) : (
        <Popup
          success={formResult.success}
          formType="login"
          onClose={closePopup}
        />
      )}
    </div>
  );
};
