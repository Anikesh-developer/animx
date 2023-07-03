import React, { useEffect, useState } from 'react';
import {SingleContent} from '../../Components';
import './trending.css';
import { MY_API_KEY } from '../../config';

const Trending = () => {

  const[content ,setContent] = useState([]);

  const url = 'https://latest-anime-api.p.rapidapi.com/anime';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': MY_API_KEY,
      'X-RapidAPI-Host': 'latest-anime-api.p.rapidapi.com'
    }
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch(url , options);
      const data = await response.json();
      setContent(data);
    }
    getData();  
    console.log(content)
  },[])

  console.log(content)

  return (
    <div className='trending'>
      <div className="trending__title">
      { 
        content && content?.map((c) => <SingleContent key={c.anime_id} id={c.anime_id} url={c.img_url} title={c.name} /> )
      }
      </div>
    </div>
  )
}

export default Trending