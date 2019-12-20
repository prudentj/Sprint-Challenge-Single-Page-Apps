import React from "react";
import styled from 'styled-components';

const Character = styled.div`
    display:flex;
    flex-flow: collumn;
    border: solid black 1px;
    color:black;
    width:30%;
`

export default function CharacterCard(props) {
  return (
    <Character> 
      <h2>{props.name}</h2>
      <ul>
        <li>{props.status}</li>
        <li>{props.species}</li>
        <li>{props.gender}</li>
      </ul>
      
    </Character>
    );
}
