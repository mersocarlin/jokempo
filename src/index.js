import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import registerAnalytics from './registerAnalytics'
import registerServiceWorker from './registerServiceWorker'
import Jokempo from './containers/Jokempo'
import configureStore from './store/configureStore'

import 'semantic-ui-css/semantic.min.css'

const store = configureStore()

registerAnalytics()

ReactDOM.render(
  <Provider store={store}>
    <Jokempo />
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
