import MessageSection from '../components/MessageSection'

function NotFound() {

  document.title = 'Page not found'

  return (
    <main>
      <MessageSection title='Page not found' detail='Nam quidem tenetur minima vero mollitia inventore in ullam iusto perspiciatis alias!'/>
    </main>
  )
}

export default NotFound