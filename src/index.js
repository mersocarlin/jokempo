import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'
import Jokempo from './containers/Jokempo'

import 'semantic-ui-css/semantic.min.css'

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <Jokempo />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
