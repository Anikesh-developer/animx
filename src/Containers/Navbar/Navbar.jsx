import React , {useState} from 'react' ;
import {RiMenu3Line , RiCloseLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import './navbar.css';
import { SearchBar, Searchresult } from '../../Components';

const Menu = () => (
  <>
          
            <Link to="/animx/"><p > Trending </p></Link>
            <Link to='/animx/contactus' ><p className='menu'>Contact Us</p></Link>
            <Link to="/animx/toprated"><p className='menu' >Top Rated</p></Link>
          
  </>
)

const Navbar = () => {

  const [ toggleMenu , setToggleMenu ] = useState(false);
  const [result,setResult] = useState([]);

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
      {/* here we are passing setResult as a prop to searchbar component bcz this will help to get the data from api call */}
      <div className="searchbar-container">
        <SearchBar setResult ={setResult}/>
        <Searchresult result={result} />
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
