import React from "react";
import Tarea from "./tarea";

const ListaTareas = ({ tareas, cambiarTareas, mostrarCompletadas }) => {
  const toggleCompletada = (id) => {
    console.log("estamos editando la tarea: ", id);
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return {
            ...tarea,
            completada: !tarea.completada,
            //cambiando el valor de completado.
          };
        }
        return tarea;
      })
    );
  };
  const editarTarea = (id, nuevoTexto) => {
    console.log("estamos editando la tarea: ", id);
    cambiarTareas(
      tareas.map((tarea) => {
        if (tarea.id === id) {
          return {
            ...tarea,
            texto: nuevoTexto,
            //cambiando el valor de completado.
          };
        }
        return tarea;
      })
    );
  };
  const borrarTarea = (id) => {
    console.log("estamos editando la tarea: ", id);
    cambiarTareas(
      tareas.filter((tarea) => {
        if (tarea.id !== id) {
          return tarea;
          //el arreglo que devuelve es filtrado y no aparece en el nuevo array.
        }
        return;
      })
    );
  };

  return (
    <ul className="lista-tareas">
      {tareas.length > 0 ? (
        tareas.map((tarea) => {
          if (mostrarCompletadas) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              ></Tarea>
            );
          } else if (!tarea.completada) {
            return (
              <Tarea
                key={tarea.id}
                tarea={tarea}
                toggleCompletada={toggleCompletada}
                editarTarea={editarTarea}
                borrarTarea={borrarTarea}
              ></Tarea>
            );
          }
          return;
        })
      ) : (
        <div className="lista-tareas__mensaje">No hay tareas agregadas</div>
      )}
    </ul>
  );
};

export default ListaTareas;
