import { useState } from "react";
import imagenCalculadora from "./assets/imagenCalculadora.jpg";
import Boton from "./components/Boton";
import BotonLimpiar from "./components/BotonLimpiar";
import Pantalla from "./components/Pantalla";
import { evaluate } from "mathjs";
import "./index.css";
import CustomAlert from "./components/CustomAlert";

function App() {
  const [input, setInput] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const addInput = (value) => {
    setInput(input + value);
  };

  const customAlert = (mensaje) => {
    setAlertMessage(mensaje);
    setAlertVisible(true);
  };

  const calcularResultado = () => {
    try {
      if (input) {
        setInput(evaluate(input).toString());
      } else {
        customAlert("Por favor ingrese valores para realizar los cálculos...");
      }
    } catch (error) {
      customAlert("Error en la expresión matemática...");
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  return (
    <>
      <div className="app">
        <div className="imagenCalculadora">
          <img src={imagenCalculadora} alt="Imagen Calculadora con React" />
        </div>
        <div className="contenedorCalculadora">
          <Pantalla placeholder="0" input={input} />
          <div className="fila">
            <Boton manejarClic={addInput}>1</Boton>
            <Boton manejarClic={addInput}>2</Boton>
            <Boton manejarClic={addInput}>3</Boton>
            <Boton manejarClic={addInput}>+</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={addInput}>4</Boton>
            <Boton manejarClic={addInput}>5</Boton>
            <Boton manejarClic={addInput}>6</Boton>
            <Boton manejarClic={addInput}>-</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={addInput}>7</Boton>
            <Boton manejarClic={addInput}>8</Boton>
            <Boton manejarClic={addInput}>9</Boton>
            <Boton manejarClic={addInput}>*</Boton>
          </div>
          <div className="fila">
            <Boton manejarClic={calcularResultado}>=</Boton>
            <Boton manejarClic={addInput}>0</Boton>
            <Boton manejarClic={addInput}>.</Boton>
            <Boton manejarClic={addInput}>/</Boton>
            <CustomAlert
              message={alertMessage}
              isVisible={alertVisible}
              onClose={closeAlert}
            />
          </div>
          <div className="fila">
            <BotonLimpiar manejarLimpiar={() => setInput("")}>
              Limpiar
            </BotonLimpiar>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p className="parrafoFooter">
          © {new Date().getFullYear()} | Creado por{" "}
          <a
            className="linkJairoColon"
            href="https://github.com/jairocolondev"
            target="_blank"
            rel="noreferrer"
          >
            Jairo Colón, Creative Design
          </a>{" "}
          con React + Vite
        </p>
      </footer>
    </>
  );
}

export default App;
