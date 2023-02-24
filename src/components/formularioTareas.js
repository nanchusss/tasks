import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";

//La app es para hacer tareas, un input que guarda la información a través de setState y onChange.

const FormularioTareas = ({ tareas, cambiarTareas }) => {
  const [inputTarea, cambiarInputTareas] = useState("");
  const handleInput = (e) => {
    cambiarInputTareas(e.target.value);
  };

  //Esta función lo que hace es, primero previene que se actualice la página, y después va a sumar un objeto al array, que va a tener como valor de texto, input tarea, que le agrega el inputo que toma handleInput.
  const handleSubmit = (e) => {
    e.preventDefault();
    cambiarTareas([
      ...tareas,
      {
        id: uuidv4(),
        texto: inputTarea,
        completada: false,
      },
    ]);

    //estamos cambiando las tareas desde el input, ha cambiado la tarea. Cambiar tareas va a ser un arreglo con las tareas anteriores ...tareas y les suma las nuevas

    cambiarInputTareas("");
    //cambiar input tareas vacía el input cuando ya agregamos la tarea.
  };
  return (
    <form action="" className="formulario-tareas" onSubmit={handleSubmit}>
      <input
        type="text"
        className="formulario-tareas__input"
        placeholder="Escribe una tarea"
        value={inputTarea}
        onChange={(e) => handleInput(e)}
      />
      <button type="submit" className="formulario-tareas__btn">
        <FontAwesomeIcon icon={faPlusSquare}></FontAwesomeIcon>
      </button>
    </form>
  );
};

export default FormularioTareas;
