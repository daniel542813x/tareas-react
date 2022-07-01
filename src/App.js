import './App.css';
import ListaDeTareas from './componentes/ListaDeTareas.js';
import Logo from "./imagenes/logo.png"
import TareaFormulario from './componentes/tarea-formulario'
function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='logo-contenedor'> 
        <img
          src={Logo}
          className='logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>
        
        <ListaDeTareas/>
        
      </div>
    </div>
  );
}

export default App;
