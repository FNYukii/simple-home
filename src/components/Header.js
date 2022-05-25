import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import HamburgerMenu from './HamburgerMenu'
import styles from '../styles/header.module.css'

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

          <ul className={styles.nav}>
            <li className={styles.navItem}><NavLink className={styles.navItemAnchor} to='/' activeclassname='active' exact='true'>Top</NavLink></li>
            <li className={styles.navItem}><NavLink className={styles.navItemAnchor} to='/gallery' activeclassname='active'>Gallery</NavLink></li>
            <li className={styles.navItem}><NavLink className={styles.navItemAnchor} to='/contact' activeclassname='active'>Contact</NavLink></li>
          </ul>

          <div className={styles.barsWrapper} onClick={onTapBars} tabIndex='0'>
            <FaBars className={styles.bars}/>
          </div>

        </div>
      </header>

      <HamburgerMenu isOpenMenu={isOpenMenu} onTapTimes={() => setIsOpenMenu(false)}/>
      
    </div>
  )
}

export default Header