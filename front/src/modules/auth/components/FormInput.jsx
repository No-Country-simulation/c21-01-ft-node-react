import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FormInput = ({
  icon,
  type,
  placeholder,
  name,
  value,
  onChange,
  onBlur,
  touched,
  error,
}) => {

  return (
    <div className="relative">
      <FontAwesomeIcon
        icon={icon}
        className={`absolute left-5 top-6 transform -translate-y-1/2 transition-all duration-200 
              ${touched && value ? "text-cyan-700" : "text-gray-300"}`}
      />
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`w-full p-3 pl-11 border border-gray-200 rounded-3xl 
              focus:outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-200`}
      />
      {touched && error && (
        <span className="text-red-400 text-sm">{error}</span>
      )}
    </div>
  );
};
FormInput.propTypes = {
  icon: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  touched: PropTypes.bool,
  error: PropTypes.string,
};
