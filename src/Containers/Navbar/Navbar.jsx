import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="navbar__content">
        <div className="navbar__content-logo">
          <img src='Animx_logo.jpg' alt='' />
        </div>
        <div className="navbar__content-title">
          <h1>AnimX</h1>
        </div>
        <div className="navbar__content-menuitmes">
          <ul className='navbar__content-menulist'>
            <li id='All_Category'>All Category</li>
            <Link to='/animx/contactus' ><li>Contact Us</li></Link>
            <Link to="/animx/toprated"><li>Top Rated</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
