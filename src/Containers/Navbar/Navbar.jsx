import React , {useState} from 'react' ;
import {RiMenu3Line , RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './navbar.css';
import { IoIosSearch } from "react-icons/io";

const Menu = () => (
  <>
          
            <Link to="/animx/"><p >All Category</p></Link>
            <Link to='/animx/contactus' ><p className='menu'>Contact Us</p></Link>
            <Link to="/animx/toprated"><p className='menu' >Top Rated</p></Link>
          
  </>
)

const Navbar = () => {

  const [ toggleMenu , setToggleMenu ] = useState(false);

  return (
    <div className='navbar'>
      <div className="navbar__content">
        <div className="navbar__content-logo">
          <img src='Animx_logo.jpg' alt='' />
          <h1 className='navbar__content-title'>AnimX</h1>
        </div>
        <div className="navbar__content-menuitmes">
          <Menu />
        </div>
      </div>
      <div className="navbar__searchbtn">
          <input className='navbar__searchbtn-input' type='text' placeholder='Type Search'></input>
          <IoIosSearch />
        </div>
      <div className="navbar__menu">
        {toggleMenu
          ? <RiCloseLine color='#fff' size={27}  onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line  color='#fff'  size={27} onClick = {() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
