import { createStore, applyMiddleware, compose } from 'redux'

import { analytics } from '../middlewares'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const middlewares = [analytics()]

  return createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(applyMiddleware(...middlewares))
  )
}
