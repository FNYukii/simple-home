import styles from '../styles/hamburgerMenu.module.css'
import { FaTimes } from 'react-icons/fa'

function HamburgerMenu(props) {

  return (
    <div className={props.isOpenMenu ? styles.hamburgerMenu : `${styles.hamburgerMenu} ${styles.invisible}`}>
      <div className={styles.timesButtonBox}>
        <button className={styles.timesButton} onClick={() => {props.onTapTimes()}}>
          <FaTimes className={styles.times}/>
        </button>
      </div>

      <ul className={styles.globalNav}>
        <li><a href="/">Top</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

    </div>
  )
}

export default HamburgerMenu