import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './searchresult.css';

const Searchresult = ({result}) => {

    const [query ,setQuery] = useState('') ;
    const navigate = useNavigate()
    const [id,setId] = useState('');

    console.log(id)

    if (query.length > 0){
      navigate(`/animx/${query}/${id}`)
    }

  return (
    <div className='searchresult-list'>
      {
        result && result.map((c) => { 
            return <div className='searchresult-items'  onClick={(e,i) => 
              {setQuery(c.attributes.titles.en_jp) 
              setId(c.id)}} key={c.id} >{c.attributes.titles.en_jp}</div>
        })
      }
    </div>
  ) 
}

export default Searchresult