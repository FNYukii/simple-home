import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import '../styles/header.css'
import { FaBars } from 'react-icons/fa'
import HamburgerMenu from './HamburgerMenu'

function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const onTapBars = () => {
    setIsOpenMenu(true)
  }

  return (

    <div>
      {!isOpenMenu &&
        <header>
          <div className='large-container'>
            <a href='/' className='logo'>Simple Home</a>

            <div className='bars-wrapper' onClick={onTapBars}>
              <FaBars className='bars'/>
            </div>

            <ul className='global-nav'>
              <li><NavLink to='/' activeclassname='active' exact='true'>Top</NavLink></li>
              <li><NavLink to='/gallery' activeclassname='active'>Gallery</NavLink></li>
              <li><NavLink to='/contact' activeclassname='active'>Contact</NavLink></li>
            </ul>

          </div>
        </header>
      }

      {isOpenMenu &&
        <HamburgerMenu isOpenMenu={isOpenMenu} onTapTimes={() => setIsOpenMenu(false) }/>
      }
    </div>
  )
}

export default Header