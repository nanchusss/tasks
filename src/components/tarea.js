import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckSquare,
  faSquare,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Tarea = ({ tarea, toggleCompletada, editarTarea, borrarTarea }) => {
  //yo toggle completada la voy a declarara en el componente padre que es lista de tareas, cada componente que rendediza app, tiene sus funciones definidas en el componente mismo. Y cuando queremos pasar a un componente una función por ejemplo, vamos a declararla en el componente padre y a ponerla en las props, como en este caso.
  const [editandoTarea, cambiarEditandoTarea] = useState(false);

  const [nuevaTarea, cambiarNuevaTarea] = useState(tarea.texto);
  const handleSubmit = (e) => {
    e.preventDefault();
    editarTarea(tarea.id, nuevaTarea);
    cambiarEditandoTarea(false);
  };
  return (
    <li className="lista-tareas__tarea">
      <FontAwesomeIcon
        icon={tarea.completada ? faCheckSquare : faSquare}
        className="lista-tareas__icono lista-tareas__icono-check"
        onClick={() => toggleCompletada(tarea.id)}
        //damos un click y se cambia el valor de completada
      />{" "}
      <div className="lista-tareas__texto">
        {editandoTarea ? (
          <form
            action=""
            className="formulario-editar-tarea"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              className="formulario-editar-tarea__input"
              value={nuevaTarea}
              onChange={(e) => cambiarNuevaTarea(e.target.value)}
            />
            <button type="submit" className="formulario-editar-tarea__btn">
              {" "}
              Actualizar
            </button>
          </form>
        ) : (
          tarea.texto
        )}
      </div>
      <div className="lista-tareas__contenedor-botones">
        <FontAwesomeIcon
          icon={faEdit}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => cambiarEditandoTarea(!editandoTarea)}
        ></FontAwesomeIcon>
        <FontAwesomeIcon
          icon={faTimes}
          className="lista-tareas__icono lista-tareas__icono-accion"
          onClick={() => borrarTarea(tarea.id)}
        ></FontAwesomeIcon>
      </div>
    </li>
  );
};
//tarea lo que hace es recibir tarea de lista de tareas, y renderizar en una lista tarea.texto

export default Tarea;
