import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store'
import App from './components/app.jsx'
require('../server/public/styles/loader.scss')

fetch('/authorize')

render(
  <Provider store={Store}>
    <App/>
  </Provider>,
  document.querySelector('#main')
)