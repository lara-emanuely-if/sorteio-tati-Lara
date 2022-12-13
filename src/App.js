import React, { useState } from 'react'
import './App.css';

function App() {

  const [ numero, setNumero] = useState(0);  

  function handleSorteio() {
      let aleatorio = (Math.floor(Math.random() * 100));
      setNumero(aleatorio)
  }

  return (
    <div className='App-header'>
        <h1>
       Sorteio
        </h1>
        <div>
      <h1>Sorteio de números aleátorios (1-100)</h1>
      <input tex="name" type='button' title="Sorteio" onClick={handleSorteio}/>
      <h1>Número Aleátorio: {numero}</h1>
    </div>
       
  
    </div>
  );
}

export default App;
