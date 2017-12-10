import React from 'react'
import { mount } from 'enzyme'
import { Menu } from 'semantic-ui-react'

import AppFooter from './AppFooter'

describe('AppFooter', () => {
  let component

  beforeEach(() => {
    component = mount(<AppFooter color="teal" />)
  })
  it('should change color', () => {
    expect(component.find(Menu).prop('color')).toBe('teal')

    component.setProps({ color: 'red' })
    expect(component.find(Menu).prop('color')).toBe('red')

    component.setProps({ color: 'green' })
    expect(component.find(Menu).prop('color')).toBe('green')
  })
})
