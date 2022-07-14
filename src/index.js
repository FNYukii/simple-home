import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import './styles/index.css'

import Header from './components/Header'
import TopScreen from './screens/TopScreen'
import GalleryScreen from './screens/GalleryScreen'
import ContactScreen from './screens/ContactScreen'
import ThanksScreen from './screens/ThanksScreen'
import NotFoundScreen from './screens/NotFoundScreen'
import Footer from './components/Footer'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header/>

      <Routes>
        <Route path='/' element={<TopScreen/>}/>
        <Route path='/gallery' element={<GalleryScreen/>}/>
        <Route path='/contact' element={<ContactScreen/>}/>
        <Route path='/thanks' element={<ThanksScreen/>}/>
        <Route path='*' element={<NotFoundScreen/>}></Route>
      </Routes>

      <Footer/>
      
    </BrowserRouter>
  </React.StrictMode>
)