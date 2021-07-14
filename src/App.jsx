import React, {useState} from 'react';

function App(props) {
  const [usuario, setUsuario] = useState("Vinicius") 
  return (
    <main>
      <h1>{props.title}</h1>
      <h3>{ usuario }</h3>
      <form>
      <input placeholder="Usuário" name="usuario" id="usuario" className="input" />
      <button type="button">Pesquisar</button>
      </form>
    </main>
  );
}

export default App;