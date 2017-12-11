import { createStore, applyMiddleware, compose } from 'redux'

import { analytics } from '../middlewares'
import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  const middlewares = [analytics()]

  return createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(...middlewares))
  )
}
