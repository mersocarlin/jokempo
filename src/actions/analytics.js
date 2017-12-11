const GA_TRACK_PAGE_VIEW = 'GA_TRACK_PAGE_VIEW'

const trackPageView = location => ({
  type: GA_TRACK_PAGE_VIEW,
  location,
})

export default {
  GA_TRACK_PAGE_VIEW,

  trackPageView,
}
