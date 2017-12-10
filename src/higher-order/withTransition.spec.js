import React from 'react'
import { mount } from 'enzyme'
import { Transition } from 'semantic-ui-react'

import withTransition from './withTransition'

const Button = props => <button {...props}>Cick-me</button>
const EnhancedComponent = withTransition(Button)

describe('withTransition', () => {
  let component

  beforeEach(() => {
    component = mount(<EnhancedComponent />)
  })

  it('should wrap component with TransitionComponent', () => {
    expect(component.find(Button)).toBeDefined()
    expect(component.find(Transition)).toHaveLength(1)
    expect(component.find(Transition).props()).toHaveProperty(
      'animation',
      'fade'
    )
    expect(component.find(Transition).props()).toHaveProperty('duration', 500)
    expect(component.find(Transition).props()).toHaveProperty(
      'transitionOnMount',
      false
    )
    expect(component.find(Transition).props()).toHaveProperty('visible', true)
  })

  it('should accept transition props', () => {
    component.setProps({ animation: 'swing up', duration: 1000 })
    expect(component.find(Transition).props()).toHaveProperty(
      'animation',
      'swing up'
    )
    expect(component.find(Transition).props()).toHaveProperty('duration', 1000)
  })

  it('should propagate WrappedComponent props', () => {
    expect(component.find(Button).prop('onClick')).not.toBeDefined()

    component = mount(<EnhancedComponent onClick={() => undefined} />)

    expect(component.find(Button).prop('onClick')).toBeDefined()
  })
})
