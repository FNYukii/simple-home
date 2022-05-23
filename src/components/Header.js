import { NavLink } from 'react-router-dom'
import '../styles/header.css'
import { FaBars } from 'react-icons/fa'

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
    </header>
  )
}

export default Header