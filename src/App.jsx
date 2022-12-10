import React from 'react'
import { Route, Routes } from 'react-router-dom'

import WebcamCapture from './components/WebcamCapture'

const App = () => {
  return <>
    <Routes>
      <Route path='/' element={<WebcamCapture />} />
    </Routes>
  </>
}

export default App