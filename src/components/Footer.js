import styles from '../styles/footer.module.css'
import { FaTwitter, FaFacebookSquare, FaInstagram} from 'react-icons/fa'

function Footer() {
  return (
    <footer className={styles.footer}>
			<div className={styles.largeContainer}>
				<div className={styles.row}>

					<div className={styles.column01}>
						<a href='/' className={styles.logo}>Simple Home</a>
						<p>Officia vero odit dolore dignissimos aliquid. Lorem ipsum dolor sit. Amet consectetur adipisicing elit. Ducimus ad minima totam enim quaerat.</p>
					</div>
		
					<div className={styles.column02}>
						<h3>Page links</h3>
						<ul className={styles.links}>
							<li><a href='/'>Top</a></li>
							<li><a href='/gallery'>Gallery</a></li>
							<li><a href='/contact'>Contact</a></li>
						</ul>
					</div>
		
					<div className={styles.column03}>
						<h3>Connect with us</h3>
						<ul className={styles.medias}>
							<li>
                <a href='/tw'><FaTwitter/></a>
              </li>
							<li>
                <a href='/fa'><FaFacebookSquare/></a>
              </li>
							<li>
                <a href='/in'><FaInstagram/></a>
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