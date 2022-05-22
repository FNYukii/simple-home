import { FaTwitter, FaFacebookSquare, FaInstagram} from 'react-icons/fa'
import '../styles/footer.css'

function Footer() {
  return (
    <footer>
			<div className="large-container">

				<div className="row">

					<div className="column01">
						<a href='/' className='logo'>Simple Home</a>
						<p>Officia vero odit dolore dignissimos aliquid. Lorem ipsum dolor sit. Amet consectetur adipisicing elit. Ducimus ad minima totam enim quaerat.</p>
					</div>
		
					<div className="column02">
						<h3>Page links</h3>
						<ul className="global-nav">
							<li><a href="/">Top</a></li>
							<li><a href="/gallery">Gallery</a></li>
							<li><a href="/contact">Contact</a></li>
						</ul>
					</div>
		
					<div className="column03">
						<h3>Connect with us</h3>
						<ul>
							<li>
                <a href="/twitter"><FaTwitter/></a>
              </li>
							<li>
                <a href="/facebook"><FaFacebookSquare/></a>
              </li>
							<li>
                <a href="/instagram"><FaInstagram/></a>
              </li>
						</ul>
					</div>

				</div>

				<p className="copyright">Copyright 2022 Simple Home.</p>

			</div>
		</footer>
  )
}

export default Footer