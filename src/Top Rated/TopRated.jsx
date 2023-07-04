import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Detail } from '../Components';
import './toprated.css';

const TopRated = () => {

  const [content,setContent] = useState([]);

  const fetchData = async () => {
    const {data} = await axios.get (`https://kitsu.io/api/edge/anime`);

    setContent(data.data);

  }

  console.log(content);

  useEffect (() => {
    fetchData();
  },[]);

  return (
    <div className='toprated'>
      <h1 className='toprated__header'>Top Rated Anime</h1>
      <div className="toprated__header-content">
        {
          content && content?.map((c) => <Detail key={c.id} id={c.id} title={c.attributes.titles.en} img={c.attributes.posterImage.medium} subtitle={c.attributes.synopsis} />)
        }
      </div>
    </div>
  )
}

export default TopRated


