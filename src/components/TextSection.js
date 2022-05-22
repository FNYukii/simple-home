function TextSection(props) {

  return (
    <div className="section">
      <div >
        <img src={props.photo} className="trigger-to-popup-modal" alt=''/>
      </div>
      <div className="small-container">
        <h2>Hello</h2>
        <p style={{whiteSpace: 'pre-line'}}>{props.text}</p>
      </div>
    </div>
  )
}

export default TextSection