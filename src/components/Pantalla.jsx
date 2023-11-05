import propTypes from "prop-types";
import "../styles/Pantalla.css";

const Pantalla = ({ input }) => {
  return <div className="input">{input}</div>;
};

Pantalla.propTypes = {
  input: propTypes.string,
};

export default Pantalla;
