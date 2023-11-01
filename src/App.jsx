import imagenCalculadora from "./assets/imagenCalculadora.jpg";
import "./index.css";

function App() {
  return (
    <div className="app">
      <div className="imagenCalculadora">
        <img src={imagenCalculadora} alt="Imagen Calculadora con React" />
      </div>
      <div className="contenedorCalculadora">
        Aquí irán todos los elemetos de la calculadora
      </div>
    </div>
  );
}

export default App;
