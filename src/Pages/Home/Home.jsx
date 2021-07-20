import React, {useState} from 'react';
import axios from 'axios';
import { useHistory} from 'react-router-dom';
import * as S from './styled';

function App(props) {
  const [erro, setErro] = useState(false);
  const history = useHistory() ;
  const [usuario, setUsuario] = useState('') 
  function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`)
    .then(response => {
      const repositories = response.data;
      const repositoriesName = [];
      repositories.map((repository) => {
        repositoriesName.push(repository.name);
      });
      localStorage.setItem('repositoriesName', JSON.stringify(repositoriesName));
      setErro(false);
      history.push('/repositories');
    })
    .catch(err =>{
      setErro(true);
    })
  }

  return (
    <main>
      <h1>Pesquisa de Usuários do Github</h1>
      <form>
      <input className="input" placeholder="usuario" onChange={e => setUsuario(e.target.value)} value={usuario}  />
      <button type="button" onClick={handlePesquisa}>Pesquisar</button>
      </form>
     
     {erro ? <S.erroMSG>Ocorreu um erro. Tente novamente!</S.erroMSG> : ''} 
      
    </main>
  );
}

export default App;