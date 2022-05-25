import styles from '../styles/textSection.module.css'

function TextSection(props) {

  return (
    <div className={styles.textSection}>
      <div className={props.isLarge ? styles.largeContainer : styles.smallContainer}>
        <img className={styles.image} src={props.photo} alt=''/>
      </div>

      <div className={styles.smallContainer}>
        <h2>{props.title}</h2>
        <p style={{whiteSpace: 'pre-line'}}>{props.text}</p>
      </div>
      
    </div>
  )
}

export default TextSection