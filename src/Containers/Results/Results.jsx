import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './results.css';
import { Link } from 'react-router-dom';

const Results = () => {

  const {id} = useParams('');

  const [item , setItem] = useState("");

  const fetchData = async () => {
    const {data} = await axios.get(`https://kitsu.io/api/edge/anime/${id}`)

    setItem(data.data);
  }

  // console.log(item);

  useEffect(() => {
    fetchData();
  },);

  return (
    <div className='results__content'>
      {/* here we have to use this format to read the content of the constent item because item is not a function so we cannot read te data using map or filter */}
      <div className="results__content-poster">
        <button className='results__back-button' ><Link to='/animx/'>Back</Link></button>
        {item && (
          <img className='results__content-posterimage' src={item.attributes.posterImage.large} alt="PosterImage" />
        )}
      </div>
      <div className="results__content-details">
        {item && (
          <h1>{item.attributes.titles.en_jp}</h1>
        )}
        {item && (
          <h2>{item.attributes.synopsis}</h2>
        )}
        <div className="results__content-rate">
          {item && (
            <h3>{item.attributes.ageRating}</h3>
          )}
          {item && (
            <h3>{item.attributes.status}</h3>
          )}
        </div>
      </div>
    </div>
  )
}

export default Results
