import '../styles/messageSection.css'

function Thanks() {

  document.title = 'Thanks - Simple Home'

  return(
    <main>
      <div className='large-container'>
        
        <div className='message-section'>
          <div>
            <h2>Thanks for your message</h2>
            <p>Voluptatem quod nostrum numquam dicta quidem! Sit amet consectetur adipisicing.</p>
            <a href='/'>Top</a>
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default Thanks