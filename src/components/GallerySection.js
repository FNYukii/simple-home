function GallerySection(props) {
  return (
    <div className='section idea-section'>
      <h2>{props.title}</h2>
      <div className='idea-container'>
        {props.items}
      </div>
    </div>
  )
}

export default GallerySection