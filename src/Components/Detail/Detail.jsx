import React from 'react';
import './detail.css';

const Detail = ({id, title,img ,subtitle }) => {
  return (
    <div className="detail__content">
      <div className="detail__content-title">
        <h1>{title}</h1>
      </div>
      <div className="detail__content-img">
        <img src={img} alt={title} />
      </div>
      <div className="detail__content-subtitle">
        <h3>{subtitle}</h3>
      </div>
    </div>
  )
}

export default Detail