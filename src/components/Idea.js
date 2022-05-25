import '../styles/idea.css'

function Idea(props) {
  return (
    <div className='idea'>
      <a href={props.href}><img src={props.photo} alt={props.alt}/></a>

      <a href={props.href}>{props.title}</a>
      
    </div>
  )
}

export default Idea