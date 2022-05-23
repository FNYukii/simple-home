function NotFound() {

  document.title = 'Page not found - Simple Home'

  return (
    <main>
      <div className='large-container'>
        
        <div className='message-section'>
          <div>
            <h2>Page not found</h2>
            <p>Nam quidem tenetur minima vero mollitia inventore in ullam iusto perspiciatis alias!</p>
            <a href='/'>Top</a>
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default NotFound