import PropTypes from "prop-types";
// import SuccessIcon from "../../../assets/success-icon.svg";
// import ErrorIcon from "../../../assets/error-icon.svg";
import { useNavigate } from "react-router-dom";

export const Popup = ({ onClose, success, formType }) => {
  const navigate = useNavigate();

  const getTag = () => {
    if (success) {
      return formType === "login"
        ? "Inicio de Sesión Exitoso"
        : "Registro Exitoso";
    } else {
      return formType === "login"
        ? "Error al Iniciar Sesión"
        : "Error en el Registro";
    }
  };

  const getMessage = () => {
    if (success) {
      return formType === "login"
        ? "Has ingresado correctamente a FinanzApp.<br>¡Es hora de gestionar tus finanzas!"
        : "Bienvenido/a a FinanzApp, ahora puedes empezar a gestionar tus finanzas y sucursales de forma eficiente.";
    } else {
      return formType === "login"
        ? "No pudimos iniciar sesión. Por favor, verifica tu correo electrónico y contraseña."
        : "Hubo un problema al intentar crear tu cuenta. Por favor, revisa la información e inténtalo de nuevo.";
    }
  };

  const getIcon = () => {
    return success ? "éxito" : "error";
  };

  const handleButtonClick = () => {
    if (success) {
      navigate("/dashboard");
    } else {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white">
      <div className="p-6 w-96">
        <div className="flex justify-center mb-4">{getIcon()}</div>

        <span className="text-center text-3xl font-semibold">{getTag()}</span>

        <p className="text-center text-xl font-normal">{getMessage()}</p>

        <div className="mt-4 flex justify-center">
          <button onClick={handleButtonClick} className="px-4 py-2">
            {success ? "Ir al Panel" : "Intentar de nuevo"}
          </button>
        </div>
      </div>
    </div>
  );
};
Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  success: PropTypes.bool.isRequired,
  formType: PropTypes.oneOf(["login", "register"]).isRequired,
};
