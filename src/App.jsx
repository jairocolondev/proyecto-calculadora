import { useState, useEffect } from "react";
import imagenCalculadora from "./assets/imagenCalculadora.jpg";
import Boton from "./components/Boton";
import BotonLimpiar from "./components/BotonLimpiar";
import Pantalla from "./components/Pantalla";
import { evaluate } from "mathjs";
import "./index.css";
import CustomAlert from "./components/CustomAlert";

function App() {
  const [input, setInput] = useState(() => {
    // Obtener el valor guardado desde localStorage, si existe
    const savedInput = localStorage.getItem("calculatorInput");
    // Si hay algo guardado, lo devolvemos, si no, devolvemos un string vacío
    return savedInput || "0";
  });
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  // Efecto para guardar el valor de 'input' en localStorage cada vez que cambia
  useEffect(() => {
    // Guardar el valor de 'input' en localStorage
    localStorage.setItem("calculatorInput", input);
  }, [input]); // Dependencias: el efecto se ejecutará cada vez que 'input' cambie

  const addInput = (value) => {
    if (value === "." && input.includes(".")) {
      return;
    }
    if (input === "0" && value !== ".") {
      setInput(value);
    } else {
      setInput(input + value);
    }
  };

  const customAlert = (mensaje) => {
    setAlertMessage(mensaje);
    setAlertVisible(true);
  };

  const calcularResultado = () => {
    try {
      if (!input || input === "0") {
        customAlert("Por favor ingrese valores para realizar los cálculos...");
      } else {
        const resultado = evaluate(input).toString();
        setInput(resultado);
      }
    } catch (error) {
      customAlert("Error en la expresión matemática...");
    }
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const eliminarUltimoCaracter = () => {
    if (input.length === 1) {
      setInput("0");
    } else if (input.length > 1) {
      setInput(input.slice(0, -1));
    }
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
            <BotonLimpiar manejarLimpiar={() => setInput("0")}>
              Limpiar
            </BotonLimpiar>
            <Boton manejarClic={eliminarUltimoCaracter}>Borrar</Boton>
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
