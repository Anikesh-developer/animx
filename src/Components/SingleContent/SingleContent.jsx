import React from 'react';
import './singlecontent.css';

const SingleContent = ({id,title ,url}) => {

  return (
    <div>
      <div className="singlecontent__content">
        <div className="singlecontent__content-title">
          <h1>{title}</h1>
        </div>
        <div className="singlecontent__content-img" >
          <img src={url} alt='image' />
        </div>
      </div>  
    </div>
  )
}

export default SingleContent
