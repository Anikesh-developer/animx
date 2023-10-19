import React, { useState } from 'react';
import { IoIosSearch } from "react-icons/io";

const Searchbar = ({setResult}) => {

    const[input,setInput] = useState("");

    
    const fetchData = (value) => {
        fetch(`https://kitsu.io/api/edge/trending/anime`).then((response) => response.json()).then((json) => {
            // console.log(json.data)
            const results = json.data.filter((user) => {
                return (
                    value && user && user.attributes.titles.en_jp && user.attributes.titles.en_jp.toLowerCase().includes(value)
                );
            });
            console.log(results);
            setResult(results);
        });
    };

    const handleChange = (value) => {
        setInput(value)
        fetchData(value)
    }

  return (
    <div className='searchbar__items' >
        <div className="navbar__searchbtn" >
            <input className='navbar__searchbtn-itmes' type='text' placeholder='Search' value={input} onChange={(e) => handleChange(e.target.value)} ></input>
            <IoIosSearch />
        </div>
    </div>
  )
}

export default Searchbar
