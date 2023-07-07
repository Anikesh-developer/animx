import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Detail } from '../Components';
import './toprated.css';
import { Link } from 'react-router-dom';

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
      <button className='back__button' ><Link to='/anikesh-developer.github.io/animx/'>Back</Link></button>
      <div className="toprated__header-content">
        {
          content && content?.map((c) => <Detail key={c.id} id={c.id} title={c.attributes.titles.en || c.attributes.titles.en_jp} img={c.attributes.posterImage.medium} subtitle={c.attributes.synopsis} start={c.attributes.startDate} end={c.attributes.endDate} ageRating={c.attributes.ageRating} rating={c.attributes.averageRating} />)
        }
      </div>
    </div>
  )
}

export default TopRated


