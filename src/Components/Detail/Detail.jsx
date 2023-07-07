import React, {useState} from 'react';
import './detail.css';
import dayjs from 'dayjs';

const Detail = ({id, title,img ,subtitle, start ,end, rating ,ageRating }) => {

  const[showmodel ,setShowModel] = useState(false);

  const MyModel = () => {
    return <>
      <div className="model-wrapper"></div>
      <div className="model-container">
        <h3 className='header'>Synopsis</h3>
        <p className='subtitle'>{subtitle}</p>
        <button className='button' onClick={() => setShowModel(false)}>Close</button>
      </div>
    </>
  }

  return (
    <div className="detail__content">
      <div className="detail__content-title">
        <h1>{title}</h1>
      </div>
      <div className="detail__content-img">
        <img src={img} alt={title} onClick={() => setShowModel(true)} />
        {showmodel && <MyModel />}
      </div>
      <div className="detail__content-date">
        <div className="detail__content-date__startdate">
          {dayjs(start).format("MMM D, YYYY")}
        </div>
        <div className="detail__content-date__enddate">
          {dayjs(end).format("MMM D, YYYY")}
        </div>
      </div>
      <div className="detail__content-rate">
        <div className="detail__content-rate__rating">
          <span>Rating : </span>
          {rating}
        </div>
        <div className="detail__content-rate__ageRating">
          {ageRating}
        </div>
      </div>
    </div>
  )
}

export default Detail