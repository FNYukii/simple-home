import '../styles/hamburgerMenu.css'
import { FaTimes } from 'react-icons/fa'

function HamburgerMenu(props) {

  return (
    <div className='hamburger-menu'>
      <div className='times-wrapper'>
        <FaTimes className='times' onClick={() => {props.onTapTimes()}}/>
      </div>

      <ul className='global-nav'>
        <li><a href="index.html">Top</a></li>
        <li><a href="gallery.html">Gallery</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>

    </div>
  )
}

export default HamburgerMenu