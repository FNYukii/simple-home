import { FaTwitter, FaFacebookSquare, FaInstagram} from 'react-icons/fa'
import styles from '../styles/footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
			<div className={styles.largeContainer}>
				<div className={styles.row}>

					<div className={styles.column01}>
						<a href='/' className={styles.logo}>Simple Home</a>
						<p className={styles.detail}>Officia vero odit dolore dignissimos aliquid. Lorem ipsum dolor sit. Amet consectetur adipisicing elit. Ducimus ad minima totam enim quaerat.</p>
					</div>
		
					<div className={styles.column02}>
						<h3>Page links</h3>
						<ul className={styles.nav}>
							<li className={styles.navItem}><a className={styles.navItemAnchor} href='/'>Top</a></li>
							<li className={styles.navItem}><a className={styles.navItemAnchor} href='/gallery'>Gallery</a></li>
							<li className={styles.navItem}><a className={styles.navItemAnchor} href='/contact'>Contact</a></li>
						</ul>
					</div>
		
					<div className={styles.column03}>
						<h3>Connect with us</h3>
						<ul className={styles.medias}>
							<li className={styles.mediasItem}>
                <a className={styles.mediasItemAnchor} href='/twitter'><FaTwitter/></a>
              </li>
							<li className={styles.mediasItem}>
                <a className={styles.mediasItemAnchor} href='/facebook'><FaFacebookSquare/></a>
              </li>
							<li className={styles.mediasItem}>
                <a className={styles.mediasItemAnchor} href='/instagram'><FaInstagram/></a>
              </li>
						</ul>
					</div>

				</div>
				<p className={styles.copyright}>Copyright 2022 SimpleHome.</p>

			</div>
		</footer>
  )
}

export default Footer