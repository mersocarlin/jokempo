import React from 'react'
import { mount } from 'enzyme'
import { Image } from 'semantic-ui-react'

import Option from './Option'

describe('Option', () => {
  let component

  beforeEach(() => {
    component = mount(<Option />)
  })

  it('should render paper by default', () => {
    expect(component.find(Image).props()).toHaveProperty('src', 'paper.png')
  })

  it('should render paper', () => {
    component.setProps({ type: 'paper' })
    expect(component.find(Image).props()).toHaveProperty('src', 'paper.png')
  })

  it('should render rock', () => {
    component.setProps({ type: 'rock' })
    expect(component.find(Image).props()).toHaveProperty('src', 'rock.png')
  })

  it('should render scissors', () => {
    component.setProps({ type: 'scissors' })
    expect(component.find(Image).props()).toHaveProperty('src', 'scissors.png')
  })

  it('should handle onClick', () => {
    const onClick = jest.fn()

    component.setProps({ onClick, type: 'rock' })

    expect(onClick).toHaveBeenCalledTimes(0)

    component.simulate('click')

    expect(onClick).toHaveBeenCalledTimes(1)
    expect(onClick).toHaveBeenCalledWith('rock')
  })
})
