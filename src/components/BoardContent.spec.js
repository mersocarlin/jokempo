import React from 'react'
import { mount } from 'enzyme'

import BoardContent from './BoardContent'
import Option from './Option'

describe('BoardContent', () => {
  let component

  beforeEach(() => {
    component = mount(<BoardContent userOption="paper" />)
  })

  it('should initially render user option', () => {
    expect(component.find(Option)).toHaveLength(1)
  })

  it('should render computer option', () => {
    expect(component.find(Option)).toHaveLength(1)

    component.setProps({ computerOption: 'paper' })

    expect(component.find(Option)).toHaveLength(2)
  })
})
