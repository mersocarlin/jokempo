import { createStore, applyMiddleware, compose } from 'redux'

import rootReducer from '../reducers'

export default function configureStore(preloadedState) {
  const middlewares = []

  return createStore(
    rootReducer,
    preloadedState,
    compose(applyMiddleware(...middlewares))
  )
}
