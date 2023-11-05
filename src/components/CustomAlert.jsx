import PropTypes from "prop-types";
import "../styles/CustomAlert.css";

const CustomAlert = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="custom-alert-backdrop">
      <div className="custom-alert">
        <p>{message}</p>
        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

CustomAlert.propTypes = {
  message: PropTypes.string,
  isVisible: PropTypes.bool,
  onClose: PropTypes.func,
};

export default CustomAlert;
