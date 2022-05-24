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

            <FaBars className='bars' onClick={onTapBars}/>

            <ul className='global-nav'>
              <li><NavLink to='/' activeclassname='active' exact='true'>Top</NavLink></li>
              <li><NavLink to='/gallery' activeclassname='active'>Gallery</NavLink></li>
              <li><NavLink to='/contact' activeclassname='active'>Contact</NavLink></li>
            </ul>

          </div>
        </header>
      }

      {isOpenMenu &&
        <HamburgerMenu isOpenMenu={isOpenMenu} onOpenMenu={() => setIsOpenMenu(false) }/>
      }
    </div>
  )
}

export default Header