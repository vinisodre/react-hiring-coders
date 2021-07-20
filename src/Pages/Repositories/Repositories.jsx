import React, { useEffect, useState } from 'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom'

export default function Repositories(){
  const history = useHistory();
  const [ Repositories, setRepositories ] = useState([]);
  useEffect(() => {
    let repositoriesName = localStorage.getItem('repositoriesName');

    if(repositoriesName !== null) {
      repositoriesName = JSON.parse(repositoriesName);
    setRepositories(repositoriesName); 
    localStorage.clear();
    } else {
      history.push('/');
    }

    
  }, []);
  return (
    <main>
    <S.Container>
    <S.Title>Repositórios do usuário</S.Title>
        <S.List>
        { Repositories.map(repository => {
          return (
            <S.Item>Repositório: { repository }</S.Item>
          )
        }) }
        </S.List>
        <S.linkHome to="/">Voltar</S.linkHome>
    </S.Container>
    </main>
    )
}
