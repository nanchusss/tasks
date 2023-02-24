import "./styledComponents/App.css";
import "../src/styledComponents/App.css";
import ListaTareas from "./components/listaTareas";
import Header from "../src/components/header";
import { useState, useEffect } from "react";
import FormularioTareas from "./components/formularioTareas";

const App = () => {
  //Obtenemos las tareas guardadas de localStorage
  const tareasGuardadas = localStorage.getItem("tareas")
    ? JSON.parse(localStorage.getItem("tareas"))
    : [];
  //pregunta si hay algo, si no hay nada es un arreglo vacío.

  //Primero se comprueba si hay algúnvalor. conecta con local storage y lo devuelve con get Item
  //Establecemos el estado de las tareas, el estado es lo que obtenemos de arriba.
  const [tareas, cambiarTareas] = useState(tareasGuardadas);
  //Este useeffect guardando el estado dentro de localStorage

  useEffect(() => {
    console.log("Cambio en tareas");
    localStorage.setItem("tareas", JSON.stringify(tareas));
    //el almacenamiento solo puede ser en una cadena de texto y por ello, usamos json.stringify
    console.log(JSON.stringify(tareas));

    //código cada vez que hay un cambio en la página, pero queremos que solo sea cuando el estado cambie
  }, [tareas]);
  //le ponemos un array con tareas, eso hace que solo se ejecute cuando tareas cambie
  //accedemos y comprobamos si el valor de localstorage es null
  let configMostrarCompletadas = "";
  if (localStorage.getItem("mostrarCompletadas") === null) {
    configMostrarCompletadas = true;
  } else {
    configMostrarCompletadas =
      localStorage.getItem("mostrarCompletadas") === "true";
  }

  //El estado de Mostrar Completadas
  const [mostrarCompletadas, cambiarMostrarCompletadas] = useState(false);
  useEffect(() => {
    localStorage.setItem(
      "mostrarCompletadas",
      mostrarCompletadas.toString(),
      //queremos mostrar una cadena de texto, por eso to string
      [mostrarCompletadas]
    );
  }, [tareas]);

  return (
    <div className="contenedor">
      <Header
        mostrarCompletadas={mostrarCompletadas}
        cambiarMostrarCompletadas={cambiarMostrarCompletadas}
      />
      <FormularioTareas tareas={tareas} cambiarTareas={cambiarTareas} />
      <ListaTareas
        tareas={tareas}
        cambiarTareas={cambiarTareas}
        mostrarCompletadas={mostrarCompletadas}
      />
    </div>
  );
};

export default App;
