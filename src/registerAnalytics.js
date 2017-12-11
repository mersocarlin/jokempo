import ReactGA from 'react-ga'

export default function() {
  if (process.env.NODE_ENV === 'development') {
    return
  }

  ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)
}
