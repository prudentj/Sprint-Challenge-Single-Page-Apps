import React, { useState } from "react";

export default function SearchForm() {
  const [items, setItems] = useState([]);
    const [query, setQuery] =useState('');
    useEffect(()=>{
        console.log("Axios activated")
        axios.get('http://poterapi.com/v1/spells',{
                params:{
                    key:'$2a$10$dCvO83kjrvgy0HIfgxJb.uCeZ61tDXpxZU1ybWAYNWw7rePU90J2u'
                }
            }
        )
        //I wll need to alter this for each API
        //HP API has a spell data type
        .then(res =>{
            const data =res.data;
            console.log(res);
            const result =data.filter(item => item.spell.toLowerCase()
            .includes(query.toLowerCase())
            );
            setItems(res);
        });
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
                <div>
                    {items.map(item => {
                      return(
                          //I will need to style this to match the required assignment
                          <div>
                            <h2>{`${item}`}</h2>    
                          </div>
                      )  
                    })}
                </div>
            </form>
        </div>
      </section>
    );
}
