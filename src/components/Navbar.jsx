import React, {useState} from 'react'
import logo from '../images/logo.png'

function Navbar() {
    const [nav,setNav] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true);
        }
        else{
            setNav(false);
        }
    }
    window.addEventListener('scroll', changeBackground);

  return (
    <nav className={nav ? 'nav-active' : 'nav'}>
        <a href="#" className='logo'>
            <img src={logo} alt="" />
        </a>
        {/* <input type="checkbox" className='menu-btn' id='menu-btn' />
        <label className='menu-icon' htmlFor="menu-btn">
            <span className='nav-icon'></span>
        </label> */}
        <h2>Annette Black</h2>
        <ul className='menu'>
            <li><a href="#">Programs</a></li>
            <li><a href="#">Retreats</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#" className='active'>Login</a></li>
        </ul>
       
        
    </nav>
  )
}

export default Navbar