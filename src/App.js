// Importaciones de las funciones de react
import React, {useEffect, useState} from 'react';
// Importacion de hoja de estilos
import './App.css';
// Importaciones de compponentes externos
import {Boton} from "./components/boton";
// *JSX
// * Javascript en HTML

// En su lugar usaremos className
// ?Hooks son funciones que vienen con React

// Función que renderiza nuestra app
function App() {

  const [contador, setContador] = useState (0);
  const [nombre, setNombre] = useState ("");

  useEffect ( () => {

  setContador (150);
}, [nombre]);
  return (
    <div className="App" id = "App">
    <div>El valor de mi contador es: {contador}</div>
     <button
       onClick={() => {
//Llamamos al Hook y le asignamos otro valor al contador         
         setContador (contador + 1);
       }}
        >
       Aumentar contador</button> 
     <input
      value = {nombre}
      onChange = {(event) => {
       setNombre (event.target.value);
     }}
     placeholder = "Ingresa tu nombre"
     >
     </input>
     <Boton />
     <span> Mi nombre es : {nombre}</span>
    
    </div>
  );
  }

export default App;
