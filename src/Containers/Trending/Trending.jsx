import React, { useEffect, useState } from 'react';
import {SingleContent} from '../../Components';
import './trending.css';

const Trending = () => {

  const[content ,setContent] = useState([]);

  const url = 'https://latest-anime-api.p.rapidapi.com/anime';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '948f93dbb5msh58a999ff815575bp110743jsn1cb4c7c96e01',
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