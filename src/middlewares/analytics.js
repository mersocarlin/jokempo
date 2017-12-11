import ReactGA from 'react-ga'

import ActionCreators from '../actions'

const handleAction = (store, next, action) => {
  if (process.env.NODE_ENV === 'development') {
    return next(action)
  }

  if (action.analytics) {
    ReactGA.event(action.analytics)

    return next(action)
  }

  if (action.type === ActionCreators.Analytics.GA_TRACK_PAGE_VIEW) {
    ReactGA.pageview(action.location)
  }

  return next(action)
}

export default function analytics() {
  return store => next => action => handleAction(store, next, action)
}
