import '../styles/galleryItem.css'

function GalleryItem(props) {
  return (
    <div className='idea-item'>
      <a href={props.href}><img src={props.photo} alt={props.alt}/></a>

      <a href={props.href}>{props.title}</a>
      
    </div>
  )
}

export default GalleryItem