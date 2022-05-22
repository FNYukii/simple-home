import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Top from './screens/Top'
import Gallery from './screens/Gallery'
import Contact from './screens/Contact'
import NotFound from './screens/NotFound'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Top/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)