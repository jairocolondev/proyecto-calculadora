import PropTypes from "prop-types";
import "../styles/BotonLimpiar.css";

const BotonLimpiar = (props) => {
  return <div className="botonLimpiar">{props.children}</div>;
};

BotonLimpiar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BotonLimpiar;
