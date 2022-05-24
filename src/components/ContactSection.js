import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import header06 from '../images/header06.jpg'
import '../styles/contactSection.css'

function ContactSection() {

  const [category, setCategory] = useState('Patnership and sponsorship')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const navigate = useNavigate()

  const onInputCategory = (e) => {
    setCategory(e.target.value)
  }

  const onInputEmail = (e) => {
    setEmail(e.target.value)
  }

  const onInputMessage = (e) => {
    setMessage(e.target.value)
  }

  const send = () => {
    if (email === '') {
      alert('Please enter your email.')
      return
    }
    if (message === '') {
      alert('Please enter your message.')
      return
    }
    console.log(`category: ${category}, email: ${email}, message: ${message}`)
    navigate('/thanks')
  }

  return (
    <div className='section form-section'>
      <div className='large-container'>
        <img src={header06} alt='/'/>
      </div>

      <div className='small-container'>
        <h2>Contact us</h2>
        <p>Fuga doloremque nobis omnis explicabo. Facilis?</p>
        <p>laceat praesentium vel sint voluptatem ut molestiae vitae magnam modi illo. Impedit hic possimus necessitatibus explicabo dicta commodi aliquam eligendi exercitationem nemo voluptatum. </p>
      </div>

      <form>
        <div className='dropdown-menu'>
          <select onChange={onInputCategory}>
            <option disabled>Select a category</option>
            <option value='partnership'>Patnership and sponsorship</option>
            <option value='interview'>Media interview</option>
            <option value='others'>Others</option>
          </select>
        </div>

        <input onChange={onInputEmail} required placeholder='Your email'/>
        <textarea onChange={onInputMessage} required placeholder='Your message'/>

      </form>

      <button onClick={send}>Send message</button>

    </div>
  )
}

export default ContactSection