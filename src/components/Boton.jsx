import PropTypes from "prop-types";
import "../styles/Boton.css";

const Boton = ({ children }) => {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`botonContenedor ${
        esOperador(children) ? "operador" : ""
      }`.trimEnd()}
    >
      {children}
    </div>
  );
};

Boton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Boton;
