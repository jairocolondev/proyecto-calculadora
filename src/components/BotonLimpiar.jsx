import PropTypes from "prop-types";
import "../styles/BotonLimpiar.css";

const BotonLimpiar = ({ children, manejarLimpiar }) => {
  return (
    <div className="botonLimpiar" onClick={() => manejarLimpiar(children)}>
      {children}
    </div>
  );
};

BotonLimpiar.propTypes = {
  children: PropTypes.node,
  manejarLimpiar: PropTypes.func,
};

export default BotonLimpiar;
