import React from 'react'
import { mount } from 'enzyme'
import { Header } from 'semantic-ui-react'

import GameScore from './GameScore'

describe('GameScore', () => {
  let component

  const getHeaderAt = pos => component.find(Header).at(pos)

  beforeEach(() => {
    component = mount(<GameScore computer={0} user={0} />)
  })

  it('should render game score', () => {
    expect(getHeaderAt(0).text()).toBe('You 0')
    expect(getHeaderAt(1).text()).toBe('Them 0')

    component.setProps({ computer: 1, user: 2 })
    expect(getHeaderAt(0).text()).toBe('You 2')
    expect(getHeaderAt(1).text()).toBe('Them 1')
  })
})
