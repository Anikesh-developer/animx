import React, {useState} from 'react';
import './detail.css';

const Detail = ({id, title,img ,subtitle }) => {

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
    </div>
  )
}

export default Detail