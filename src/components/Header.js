import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/header.css'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const onTapBars = () => {
    setIsOpenMenu(true)
    alert('Open')
  }

  const onTapTimes = () => {
    setIsOpenMenu(false)
    alert('Close')
  }

  return (

    <header>
      <div className='large-container'>
        <a href='/' className='logo'>Simple Home</a>

        <FaBars className='bars' onClick={onTapBars}/>

        {!isOpenMenu &&
          <ul className='global-nav'>
            <li><NavLink to='/' activeclassname='active' exact='true'>Top</NavLink></li>
            <li><NavLink to='/gallery' activeclassname='active'>Gallery</NavLink></li>
            <li><NavLink to='/contact' activeclassname='active'>Contact</NavLink></li>
          </ul>
        }

      </div>

      {isOpenMenu &&
        <div className='hamburger-menu'>
          <FaTimes onClick={onTapTimes}/>

          <ul>
            <li><a href="index.html">Top</a></li>
            <li><a href="gallery.html">Gallery</a></li>
            <li><a href="contact.html">Contact</a></li>
          </ul>

        </div>
      }
      
    </header>
  )
}

export default Header