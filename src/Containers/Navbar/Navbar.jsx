import React from 'react';
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
            <li id='Creators _age'>Creators Page</li>
            <li id='Contact_Us'>Contact Us</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
