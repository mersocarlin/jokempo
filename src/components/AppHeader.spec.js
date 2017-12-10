import React from 'react'
import { mount } from 'enzyme'
import { Menu } from 'semantic-ui-react'

import AppHeader from './AppHeader'

describe('AppHeader', () => {
  let component

  beforeEach(() => {
    component = mount(<AppHeader color="teal" />)
  })

  it('should render app name', () => {
    expect(component.text()).toBe('Jokempô')
    expect(component.find(Menu).prop('color')).toBe('teal')
  })

  it('should change color', () => {
    component.setProps({ color: 'red' })
    expect(component.find(Menu).prop('color')).toBe('red')

    component.setProps({ color: 'green' })
    expect(component.find(Menu).prop('color')).toBe('green')
  })
})
