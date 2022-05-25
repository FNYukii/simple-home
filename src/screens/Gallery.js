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
import GallerySection from '../components/GallerySection'

import '../styles/gallery.css'
import '../styles/section.css'

function Gallery() {

  document.title = 'Gallery - Simple Home'

  const furnitures = [
    <GalleryItem key='01' title='Ilisum dolor alinuid obcaecati' href='/84910531' photo={idea01}/>,
    <GalleryItem key='02' title='Delectus temsiora voluptatem' href='/43114533' photo={idea02}/>,
    <GalleryItem key='03' title='Volumtatem temra ipsum' href='/7412098' photo={idea03}/>,
    <GalleryItem key='04' title='Blanditiis reprehenderit' href='/18571210' photo={idea04}/>,
    <GalleryItem key='05' title='Beatae aut suscipit' href='/87328112' photo={idea05}/>,
    <GalleryItem key='06' title='Corporis nam amet consectetur' href='/67981041' photo={idea06}/>
  ]

  const interiors = [
    <GalleryItem key='07' title='Amet quis ilisum adicisicing' href='/35641209' photo={idea07}/>,
    <GalleryItem key='08' title='Consectetur elit' href='/67346987' photo={idea08}/>,
    <GalleryItem key='09' title='Suidem sedui vel quae ant' href='/90940125' photo={idea09}/>,
    <GalleryItem key='10' title='Aliquid amet ruis' href='/38123098' photo={idea10}/>,
    <GalleryItem key='11' title='Consectetur quis elit' href='/36120943' photo={idea11}/>,
    <GalleryItem key='12' title='Temtariza quis' href='/10947652' photo={idea12}/>
  ]

  return (
    <main>
      <TextSection containerClassName='large-container' photo={header05} title='Gallery' text={`Debitis ipsum blanditiis aliquid obcaecati voluptatem quis, cupiditate beatae quae ipsa.\nEautem delectus tempora.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut quae vel sequi quidem suscipit blanditiis perspiciatis quas atque corporis nam? Reprehenderit.`}/>

      <GallerySection title='Furniture' items={furnitures}/>
      <GallerySection title='Interior' items={interiors}/>

    </main>
  )
}

export default Gallery