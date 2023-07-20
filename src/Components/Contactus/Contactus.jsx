import React from 'react';
import './contactus.css';

const Contactus = () => {
  return (
    <div className='contactus'>
      <div className="contactus__title">
        <h1>Feel Free To Contact Us</h1>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3867110144142!2d77.55214027397962!3d13.011028214014866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d4b805e4167%3A0xa4c255e80b7e5464!2sOrion%20Mall!5e0!3m2!1sen!2sin!4v1689872603853!5m2!1sen!2sin" width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div className="contactus__form">
        <form action='https://formspree.io/f/xoqovwoy' method='POST' className='contactus__form-inputs'>
          <input type="text" name= "username" placeholder='username' autoComplete='off' required></input>
          <input type="email" name= "Email" placeholder='Email' autoComplete='off' required></input>
          <textarea name='message' cols='30' rows='6' placeholder='Enter your Message' autoComplete='off' required />
          <input id='button' type='submit' value='Send' />
        </form>
      </div>
    </div>
  )
}

export default Contactus
