import React from 'react'
import { mount } from 'enzyme'
import { Transition } from 'semantic-ui-react'

import options from '../utils/options'

import Option from './Option'
import OptionChooser from './OptionChooser'

describe('OptionChooser', () => {
  let component
  let onOptionClick

  const clickOptionAt = index =>
    component
      .find(Option)
      .at(index)
      .simulate('click')

  const getOptionProps = index =>
    component
      .find(Option)
      .at(index)
      .props()

  beforeEach(() => {
    onOptionClick = jest.fn()

    component = mount(<OptionChooser onOptionClick={onOptionClick} />)
  })

  afterEach(() => {
    onOptionClick.mockReset()
  })

  it('should render 3 options ', () => {
    expect(component.find(Option)).toHaveLength(3)
  })

  describe('select options', () => {
    beforeEach(() => expect(onOptionClick).not.toHaveBeenCalled())

    it('should notify paper click', () => {
      clickOptionAt(0)
      expect(onOptionClick).toHaveBeenCalledWith('paper')
    })

    it('should notify rock click', () => {
      clickOptionAt(1)
      expect(onOptionClick).toHaveBeenCalledWith('rock')
    })

    it('should notify scissors click', () => {
      clickOptionAt(2)
      expect(onOptionClick).toHaveBeenCalledWith('scissors')
    })
  })
})
