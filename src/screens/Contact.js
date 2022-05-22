import header06 from '../images/header06.jpg'
import '../styles/contact.css'
import '../styles/section.css'
import React, { useState } from 'react'

function Contact() {

  const [category, setCategory] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const onInputCategory = (e) => {
    setCategory(e.target.value)
  }

  const onInputEmail = (e) => {
    setEmail(e.target.value)
  }

  const onInputMessage = (e) => {
    setMessage(e.target.value)
  }

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
            <select onChange={onInputCategory}>
              <option disabled>Select a category</option>
              <option value="partnership">Patnership and sponsorship</option>
              <option value="interview">Media interview</option>
              <option value="others">Others</option>
            </select>
          </div>

          <input type="email" onChange={onInputEmail} required/>
          <textarea onChange={onInputMessage} rows="20" required/>

        </form>

        <button>Send message</button>
        
      </div>

    </main>
  )
}

export default Contact