import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="navbar__content">
        <div className="navbar__content-logo">
          <img src='Animx_logo.jpg' alt='' />
          <h1 className='navbar__content-title'>AnimX</h1>
        </div>
        <div className="navbar__content-menuitmes">
          <ul className='navbar__content-menulist'>
            <Link to="/animx/"><li >All Category</li></Link>
            <Link to='/animx/contactus' ><li className='menu'>Contact Us</li></Link>
            <Link to="/animx/toprated"><li className='menu' >Top Rated</li></Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
