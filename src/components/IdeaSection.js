function IdeaSection(props) {
  return (
    <div className='section idea-section'>
      <h2>{props.title}</h2>
      <div className='idea-container'>
        {props.ideas}
      </div>
    </div>
  )
}

export default IdeaSection