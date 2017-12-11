import AnalyticsActionCreators from './analytics'

describe('analytics', () => {
  it('should create trackPageView action', () => {
    expect(AnalyticsActionCreators.trackPageView('/')).toEqual({
      type: AnalyticsActionCreators.GA_TRACK_PAGE_VIEW,
      location: '/',
    })
  })
})
