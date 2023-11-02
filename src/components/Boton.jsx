import PropTypes from "prop-types";
import "../styles/Boton.css";

function Boton(props) {
  const esOperador = (valor) => {
    return isNaN(valor) && valor != "." && valor != "=";
  };

  return (
    <div
      className={`botonContenedor ${
        esOperador(props.children) ? "operador" : ""
      }`.trimEnd()}
    >
      {props.children}
    </div>
  );
}

Boton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Boton;
