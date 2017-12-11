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

  it('should link github repo', () => {
    expect(
      component
        .find(Menu.Item)
        .at(0)
        .prop('href')
    ).toContain('github.com/mersocarlin')
  })

  it('should link icons8', () => {
    expect(
      component
        .find(Menu.Item)
        .at(1)
        .text()
    ).toBe('Icons8')
  })
})
