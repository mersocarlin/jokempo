import React from 'react'
import { mount } from 'enzyme'
import { Header } from 'semantic-ui-react'

import BoardHeader from './BoardHeader'

describe('BoardHeader', () => {
  let component

  beforeEach(() => {
    component = mount(<BoardHeader userOption="paper" />)
  })

  it('should inform user choice', () => {
    expect(component.find(Header).text()).toBe('You chose paper')
  })

  it('should inform game result', () => {
    component.setProps({ message: 'You win' })
    expect(component.find(Header).text()).toBe('You win')
  })
})
