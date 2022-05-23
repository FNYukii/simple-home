function NotFound() {

  document.title = 'Page not found - Simple Home'

  return (
    <main>
      <div className='large-container'>
        
        <div className='message-section'>
          <div>
            <h2>Page not found</h2>
            <p>Voluptatem quod nostrum numquam dicta quidem! Sit amet consectetur adipisicing.</p>
            <a href='/'>Top</a>
          </div>
        </div>
        
      </div>
    </main>
  )
}

export default NotFound