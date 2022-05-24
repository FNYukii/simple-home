import { NavLink } from 'react-router-dom'
import '../styles/header.css'
import { FaBars, FaTimes, FaMoon } from 'react-icons/fa'

function Header() {
  return (
    <header>
      <div className='large-container'>
        <a href='/' className='logo'>Simple Home</a>

        <FaBars className='bars'/>

        <ul className='global-nav'>
          <li><NavLink to='/' activeclassname='active' exact='true'>Top</NavLink></li>
          <li><NavLink to='/gallery' activeclassname='active'>Gallery</NavLink></li>
          <li><NavLink to='/contact' activeclassname='active'>Contact</NavLink></li>
        </ul>

      </div>

      <div className='hamburger-menu'>
        <FaTimes/>

        <ul>
          <li><a href="index.html">Top</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>

        <div>
          <FaMoon/>
        </div>

      </div>

    </header>
  )
}

export default Header