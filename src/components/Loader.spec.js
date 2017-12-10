import React from 'react'
import { mount } from 'enzyme'

import Loader from './Loader'

describe('Loader', () => {
  let component

  beforeEach(() => {
    component = mount(<Loader>Loading...</Loader>)
  })

  it('should render children', () => {
    expect(component.text()).toBe('Loading...')

    component.setProps({ children: 'Testing' })
    expect(component.text()).toBe('Testing')
  })
})
