import styles from '../styles/ideaSection.module.css'

function IdeaSection(props) {
  return (
    <div className={styles.ideaSection}>
      <div className={props.isShowDivider ? styles.largeContainer : `${styles.largeContainer} ${styles.showDivider}`}>
        <h2>{props.title}</h2>

        <div className={styles.ideas}>
          {props.ideas}
        </div>

      </div>
    </div>
  )
}

export default IdeaSection