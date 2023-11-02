import imagenCalculadora from "./assets/imagenCalculadora.jpg";
import Boton from "./components/Boton";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="imagenCalculadora">
        <img src={imagenCalculadora} alt="Imagen Calculadora con React" />
      </div>
      <div className="contenedorCalculadora">
        <div className="fila">
          <Boton>1</Boton>
          <Boton>+</Boton>
        </div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
        <div className="fila"></div>
      </div>
    </div>
  );
}

export default App;
