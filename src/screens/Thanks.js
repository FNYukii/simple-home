import MessageSection from '../components/MessageSection'

function Thanks() {

  document.title = 'Thanks for your message'

  return(
    <main>
      <MessageSection title='Thanks for your message' detail='Voluptatem quod nostrum numquam dicta quidem! Sit amet consectetur adipisicing.'/>
    </main>
  )
}

export default Thanks