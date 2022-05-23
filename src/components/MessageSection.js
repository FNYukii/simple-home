import '../styles/messageSection.css'

function MessageSection(props) {
  return (
    <div className='message-section'>
      <div className='large-container'>
        <h2>{props.title}</h2>
        <p>{props.detail}</p>

        <a href='/'>Top</a>

      </div>
    </div>
  )
}

export default MessageSection