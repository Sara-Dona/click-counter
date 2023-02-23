  import React from 'react';
import './App.css';
import unicornio from './imagenes/uniswap-uni-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }
  return (
    <div className="App">
      <div id='container-logo'>
        <img src={unicornio} alt='unicornio' />
      </div>
      <div id='container-principal'>
        <Contador
        numClic={numClics}
        />
        <Boton 
        texto = 'Click'
        esBotonDeClic = {true}
        manejarClic ={manejarClic}/>

        <Boton 
        texto = 'Reset'
        esBotonDeClic = {false}
        manejarClic ={reiniciarContador}/>

      </div>
    </div>
  );
}

export default App;
