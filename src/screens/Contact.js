import header06 from '../images/header06.jpg'
import '../styles/contact.css'
import '../styles/section.css'

function Contact() {
  return (
    <main>
      <div className="section form-section">
        <div className="large-container">
          <img src={header06} alt=""/>
        </div>

        <div className="small-container">
          <h2>Contact us</h2>
          <p>Fuga doloremque nobis omnis explicabo. Facilis?</p>
          <p>laceat praesentium vel sint voluptatem ut molestiae vitae magnam modi illo. Impedit hic possimus necessitatibus explicabo dicta commodi aliquam eligendi exercitationem nemo voluptatum. </p>
        </div>

        <form>
          <div className="dropdown-menu">
            <select name="category">
              <option disabled>Select a category</option>
              <option value="partnership">Patnership and sponsorship</option>
              <option value="interview">Media interview</option>
              <option value="others">Others</option>
            </select>
          </div>

          <input type="email" name="email" value="Your email" required/>
          <textarea name="message" rows="20" required>Your message</textarea>

          <button type="submit">Send message</button>

        </form>
      </div>

    </main>
  )
}

export default Contact