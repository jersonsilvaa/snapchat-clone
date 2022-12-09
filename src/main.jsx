import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import { $ } from './utils/dom'
import { store } from './app/store'

import App from './App'

import './index.css'

ReactDOM.createRoot($('#root')).render (
  <Provider store={store}>
    <App />
  </Provider>
)