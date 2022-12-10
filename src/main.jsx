import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import { $ } from './utils/dom'
import { store } from './app/store'

import App from './App'

import './index.css'

ReactDOM.createRoot($('#root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)