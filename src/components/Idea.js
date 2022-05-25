import styles from '../styles/idea.module.css'

function Idea(props) {
  return (
    <div className={styles.idea}>
      <a href={props.href}><img src={props.photo} alt={props.alt}/></a>

      <a href={props.href}>{props.title}</a>
      
    </div>
  )
}

export default Idea