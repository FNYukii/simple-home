import '../styles/hamburgerMenu.css'
import { FaTimes } from 'react-icons/fa'

function HamburgerMenu(props) {

  return (
    <div className={props.isOpenMenu ? 'hamburger-menu' : 'hamburger-menu invisible'}>
      <div className='times-wrapper' onClick={() => {props.onTapTimes()}} tabIndex='0'>
        <FaTimes className='times'/>
      </div>

      <ul className='global-nav'>
        <li><a href="/">Top</a></li>
        <li><a href="/gallery">Gallery</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>

    </div>
  )
}

export default HamburgerMenu