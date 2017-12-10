import React from 'react'
import { mount } from 'enzyme'
import { Button, Header } from 'semantic-ui-react'

import BoardResult from './BoardResult'

describe('BoardResult', () => {
  let component
  let onNewGame

  beforeEach(() => {
    onNewGame = jest.fn()
    component = mount(
      <BoardResult
        onNewGame={onNewGame}
        result={{
          description: 'Scissors cuts paper',
        }}
      />
    )
  })

  afterEach(() => {
    onNewGame.mockReset()
  })

  it('should inform result', () => {
    expect(component.find(Header).text()).toBe('Scissors cuts paper')
  })

  it('should trigger onNewGame', () => {
    expect(onNewGame).not.toHaveBeenCalled()
    component.find(Button).simulate('click')
    expect(onNewGame).toHaveBeenCalled()
  })
})
