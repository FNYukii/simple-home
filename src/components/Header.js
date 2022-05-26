import styles from '../styles/header.module.css'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import HamburgerMenu from './HamburgerMenu'

function Header() {

  const [isOpenMenu, setIsOpenMenu] = useState(false)

  const onTapBars = () => {
    setIsOpenMenu(true)
  }

  return (

    <div>
      <header className={styles.header}>
        <div className={styles.largeContainer}>
          <a href='/' className={styles.logo}>Simple Home</a>

          <ul className={styles.globalNav}>
            <li><NavLink to='/' activeclassname='active' exact='true'>Top</NavLink></li>
            <li><NavLink to='/gallery' activeclassname='active'>Gallery</NavLink></li>
            <li><NavLink to='/contact' activeclassname='active'>Contact</NavLink></li>
          </ul>

          <button className={styles.barsButton} onClick={onTapBars}>
            <FaBars className={styles.bars}/>
          </button>

        </div>
      </header>

      <HamburgerMenu isOpenMenu={isOpenMenu} onTapTimes={() => setIsOpenMenu(false)}/>
      
    </div>
  )
}

export default Header