import React, { useState} from "react";
import TareaForumulario from './tarea-formulario'
import '../css/ListaDeTareas.css'
import Tarea from "./Tarea";
function ListaDeTareas(){
    const [tareas,setTareas]= useState([]);

    return(
    <>
     <TareaForumulario />
     <div className="tareas-lista-contenedor">
        {
            tareas.map((tarea )=> <Tarea 
            texto={tarea.texto}
            />
        )}
     </div>
    </>
    );
}

export default TareaForumulario;