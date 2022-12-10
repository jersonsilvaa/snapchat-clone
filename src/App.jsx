import React from 'react'
import { Route, Routes } from 'react-router-dom'

import WebcamCapture from './components/WebcamCapture'

import { Preview } from './utils/import'

const App = () => {
  return <>
    <div className="app">
      <div className="app__body">
        <Routes>
          <Route path='/' element={<WebcamCapture />} />
          <Route path='/preview' element={<Preview />} />
          <Route path='*' element={<h1>Error 404</h1>} />
        </Routes>
      </div>
    </div>
  </>
}

export default App