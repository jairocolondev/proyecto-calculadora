import PropTypes from "prop-types";
import "../styles/Boton.css";

const Boton = ({ children, manejarClic }) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <button
      className={`botonContenedor ${
        esOperador(children) ? "operador" : ""
      }`.trimEnd()}
      onClick={() => manejarClic(children)}
    >
      {children}
    </button>
  );
};

Boton.propTypes = {
  children: PropTypes.node,
  manejarClic: PropTypes.func,
};

export default Boton;
