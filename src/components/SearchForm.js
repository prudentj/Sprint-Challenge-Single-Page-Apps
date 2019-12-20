import React, { useState, useEffect } from "react";
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const Searchbox = styled.div`
    display: flex;
    background: gray;
    border: black solid 1px;
`

export default function SearchForm(props) {
  const [items, setItems] = useState(props);
    const [query, setQuery] =useState('');
    useEffect(()=>{
        console.log('Your props are:');
        console.log(props);
        const result = props.filter(item => (item.name.toLowerCase()
        .includes(query.toLowerCase())));
        setItems(result);
        console.log(`Query ran Result below`)
        console.log(items);
    },[query])

    const handleChange = event => {
        setQuery(event.target.value);
      };
    
    return(
        //I will neeed to alter my class names for styling
      <section className="search-form" >
        <div className='items'>
            <form className='search'>
                <input
                    type='text'
                    onChange={handleChange}
                    value = {query}
                    name='name'
                    tabIndex='0'
                    placeholder='search text here'
                    autoComplete='off'
                />
                <Searchbox>
                    {items.map(item => {
                      return(
                          //I will need to style this to match the required assignment
                          CharacterCard(item)
                      )  
                    })}
                </Searchbox>
            </form>
        </div>
      </section>
    );
}
