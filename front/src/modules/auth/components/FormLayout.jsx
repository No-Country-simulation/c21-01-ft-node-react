import PropTypes from "prop-types";
import lines from "../../../assets/lines.svg";

export const FormLayout = ({ form }) => {
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

      <div className="w-1/2 flex justify-center items-center">{form}</div>
    </div>
  );
};
FormLayout.propTypes = {
  form: PropTypes.node.isRequired,
};
