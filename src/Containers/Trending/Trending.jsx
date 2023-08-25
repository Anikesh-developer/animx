import React, { useEffect, useState } from 'react';
import {SingleContent} from '../../Components';
import './trending.css';
import { MY_API_KEY } from '../../config';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const Trending = () => {

  const[content ,setContent] = useState([]);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const url = 'https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Fullmetal&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': MY_API_KEY,
      'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
    }
  };

  useEffect(() => {
    async function getData() {
      const response = await fetch(url , options);
      const data = await response.json();
      setContent(data.data);
    }
    getData();  
    console.log(content)
  },[])

  console.log(content)

  return (
    <div className='trending'>
      <h1 className='trending__heading'>Trending Anime</h1>
      <div className="trending__title">
      { 
        content && content?.map((c) => <SingleContent key={c.id} id={c.id} url={c.image} title={c.title} /> )
      }
      </div>
      <div className='uparrow'>
        <div className="singlecontent__content-uparrow">
          <ArrowUpwardIcon onClick={scrollUp} />
        </div>
      </div>
    </div>
  )
}

export default Trending