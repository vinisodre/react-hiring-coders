import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const Container = styled.div`
  width:100%;
  max-width:997px;
  margin: 0 auto;
`

export const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: red;
`

export const List = styled.ul`
  list-style:none;
  padding:0;
  margin:0;
`

export const Item = styled.li`
  margin: 0.5rem 0;
  background: #000;
  color:white;
  padding:.5rem;
`

export const linkHome = styled(Link)`
  display:block;
  width:4rem;
  text-align: center;
  margin: 2rem auto;
  background-color: blue;
  color: white;
  padding: 0.5rem 0
  text-decoration:none
`
