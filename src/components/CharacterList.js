import React, { useEffect, useState } from "react";
//import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import axios from 'axios';
import CharacterCard from './CharacterCard';
import SearchForm from './SearchForm';
import styled from 'styled-components';

const AllCharacters = styled.div`
  display:flex;
  flex-flow:column wrap;
`


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] =useState('');
  useEffect(()=>{
    console.log("Axios activated")
    axios.get('https://rickandmortyapi.com/api/character/')
    
    .then(res =>{
      console.log(res);
      setCharacters(res.data.results);
      console.log(`Character looks like ${characters}`)
    })
    .catch(err=>{
      console.log(`Error:${err}`);
    });
},[query])
 

  return (
        <section className="character-list">
          <h2>Search for Characters</h2>
          {SearchForm(characters)}
          <h2>All Characters</h2>
          <AllCharacters>
            {characters.map((el)=>(CharacterCard(el)))}
          </AllCharacters>
        </section>
  );
}
