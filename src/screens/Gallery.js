import header05 from '../images/header05.jpg'
import idea01 from '../images/idea01.jpg'
import idea02 from '../images/idea02.jpg'
import idea03 from '../images/idea03.jpg'
import idea04 from '../images/idea04.jpg'
import idea05 from '../images/idea05.jpg'
import idea06 from '../images/idea06.jpg'
import idea07 from '../images/idea07.jpg'
import idea08 from '../images/idea08.jpg'
import idea09 from '../images/idea09.jpg'
import idea10 from '../images/idea10.jpg'
import idea11 from '../images/idea11.jpg'
import idea12 from '../images/idea12.jpg'

import TextSection from '../components/TextSection'
import GalleryItem from '../components/GalleryItem'

import '../styles/gallery.css'
import '../styles/section.css'

function Gallery() {

  document.title = 'Gallery - Simple Home'

  return (
    <main>
      <TextSection containerClassName='large-container' photo={header05} title='Gallery' text={`Debitis ipsum blanditiis aliquid obcaecati voluptatem quis, cupiditate beatae quae ipsa.\nEautem delectus tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quae vel sequi quidem suscipit blanditiis perspiciatis quas atque corporis nam? Reprehenderit.`}/>

      <div className='section idea-section'>
        <h2>Furniture</h2>
        <div className='idea-container'>
          <GalleryItem title='Ilisum dolor alinuid obcaecati' href='' photo={idea01}/>
          <GalleryItem title='Delectus temsiora voluptatem' href='' photo={idea02}/>
          <GalleryItem title='Volumtatem temra ipsum' href='' photo={idea03}/>
          <GalleryItem title='Blanditiis reprehenderit' href='' photo={idea04}/>
          <GalleryItem title='Beatae aut suscipit' href='' photo={idea05}/>
          <GalleryItem title='Corporis nam amet consectetur' href='' photo={idea06}/>
        </div>
      </div>

      <div className='section idea-section last-section'>
        <h2>Interior</h2>
        <div className='idea-container'>
          <GalleryItem title='Amet quis ilisum adicisicing' href='' photo={idea07}/>
          <GalleryItem title='Consectetur elit' href='' photo={idea08}/>
          <GalleryItem title='Suidem sedui vel quae ant' href='' photo={idea09}/>
          <GalleryItem title='Aliquid amet ruis' href='' photo={idea10}/>
          <GalleryItem title='Consectetur quis elit' href='' photo={idea11}/>
          <GalleryItem title='Temtariza quis' href='' photo={idea12}/>
        </div>
      </div>

    </main>
  )
}

export default Gallery