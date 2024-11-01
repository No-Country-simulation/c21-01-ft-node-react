import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import SuccessIcon from "../../../assets/succes.svg";
import ErrorIcon from "../../../assets/error.svg";
import axios from "axios";

export const Popup = ({ onClose, success, UserId, formType }) => {
  const navigate = useNavigate();
  console.log("%c success :", "background-color:#192BC2", success);
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
        ? "Has ingresado correctamente a FinanzApp. ¡Es hora de gestionar tus finanzas!"
        : "Bienvenido/a a FinanzApp, ahora puedes empezar a gestionar tus finanzas y sucursales de forma eficiente.";
    } else {
      return formType === "login"
        ? "No pudimos iniciar sesión. Por favor, verifica tu correo electrónico y contraseña."
        : "Hubo un problema al intentar crear tu cuenta. Por favor, revisa la información e inténtalo de nuevo.";
    }
  };

  const getIcon = () => {
    return success ? (
      <img src={SuccessIcon} alt="success" className="size-24" />
    ) : (
      <img src={ErrorIcon} alt="error" className="size-24" />
    );
  };

  const handleButtonClick = async () => {
    if (success) {
      await axios.get(`${import.meta.env.VITE_API_BASE}/users/dashboard`, {
        params: { userId: UserId },
      });
      localStorage.setItem("userId", UserId);
      navigate("/dashboard");
    } else {
      onClose();
    }
  };

  return (
    <div className="p-5 w-50 rounded-2xl shadow-md shadow-gray-400">
      <div className="flex justify-center p-7">{getIcon()}</div>
      <span className="block text-primary text-center text-2xl font-medium mb-2">
        {getTag()}
      </span>
      <p className="text-center text-l font-normal pb-8">{getMessage()}</p>
      <div className="mt-4 mb-4 flex justify-center">
        <button
          onClick={handleButtonClick}
          className="w-button-medium bg-primary text-white py-buttonPadding rounded-2xl hover:bg-primary-dark transition duration-300"
        >
          {success ? "Ir al Panel" : "Intentar de nuevo"}
        </button>
      </div>
    </div>
  );
};
Popup.propTypes = {
  onClose: PropTypes.func.isRequired,
  UserId: PropTypes.number,
  success: PropTypes.bool.isRequired,
  formType: PropTypes.oneOf(["login", "register"]).isRequired,
};
