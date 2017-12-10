import React from 'react'
import { mount } from 'enzyme'
import { Button, Header } from 'semantic-ui-react'

import Board from './Board'
import BoardHeader from './BoardHeader'
import BoardContent from './BoardContent'
import BoardResult from './BoardResult'
import Option from './Option'

describe('Board', () => {
  let component
  let onNewGame

  beforeEach(() => {
    onNewGame = jest.fn()

    component = mount(
      <Board
        userOption="paper"
        onNewGame={onNewGame}
        result={{ description: '', message: '' }}
      />
    )
  })

  afterEach(() => {
    onNewGame.mockReset()
  })

  describe('BoardHeader', () => {
    const getHeaderText = () =>
      component
        .find(BoardHeader)
        .find(Header)
        .text()

    it('should inform which option user has chosen', () => {
      expect(getHeaderText()).toBe('You chose paper')

      component.setProps({ userOption: 'rock' })
      expect(getHeaderText()).toBe('You chose rock')

      component.setProps({ userOption: 'scissors' })
      expect(getHeaderText()).toBe('You chose scissors')
    })

    it('should inform game result', () => {
      component.setProps({
        result: {
          message: 'You tie!',
        },
        userOption: 'paper',
      })

      expect(getHeaderText()).toBe('You tie!')
    })
  })

  describe('BoardContent', () => {
    it('should initially render user option', () => {
      expect(component.find(BoardContent).find(Option)).toHaveLength(1)
    })

    it('should render computer option', () => {
      expect(component.find(BoardContent).find(Option)).toHaveLength(1)

      component.setProps({ computerOption: 'paper' })
      expect(component.find(BoardContent).find(Option)).toHaveLength(2)
    })
  })

  describe('BoardResult', () => {
    const getButton = () => component.find(BoardResult).find(Button)

    it('should render start new game button', () => {
      expect(getButton()).toHaveLength(0)

      component.setProps({ result: { description: 'Scissors cuts paper' } })

      expect(getButton()).toHaveLength(1)
    })

    it('should trigger onNewGame', () => {
      expect(onNewGame).not.toHaveBeenCalled()

      component.setProps({ result: { description: 'Scissors cuts paper' } })
      getButton().simulate('click')

      expect(onNewGame).toHaveBeenCalled()
    })
  })
})
