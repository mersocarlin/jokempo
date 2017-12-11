import React from 'react'
import { mount } from 'enzyme'
import { Button, Grid } from 'semantic-ui-react'

import { EnhancedJokempo } from './Jokempo'
import Board from '../components/Board'
import OptionChooser from '../components/OptionChooser'
import Option from '../components/Option'

import getGameResult from '../utils/getGameResult'
import { INITIAL_STATE } from '../reducers/gameReducer'

describe('Jokempo', () => {
  let component
  let onUserChoseOption
  let onComputerChoseOption
  let onSetResult
  let onStartNewGame
  let onTrackPageView

  beforeEach(() => {
    onComputerChoseOption = jest.fn()
    onUserChoseOption = jest.fn()
    onSetResult = jest.fn()
    onStartNewGame = jest.fn()
    onTrackPageView = jest.fn()

    component = mount(
      <EnhancedJokempo
        game={INITIAL_STATE}
        userChoseOption={onUserChoseOption}
        computerChoseOption={onComputerChoseOption}
        setResult={onSetResult}
        startNewGame={onStartNewGame}
        trackPageView={onTrackPageView}
      />
    )
  })

  afterEach(() => {
    onComputerChoseOption.mockReset()
    onUserChoseOption.mockReset()
    onSetResult.mockReset()
    onStartNewGame.mockReset()
  })

  it('should track page view on mount', () => {
    expect(onTrackPageView).toHaveBeenCalled()
  })

  it('should render OptionChooser initially', () => {
    expect(component.find(OptionChooser)).toHaveLength(1)
    expect(component.find(Board)).toHaveLength(0)
    expect(
      component
        .find(Grid.Row)
        .first()
        .props()
    ).toHaveProperty('color', 'teal')
  })

  it('should be able to chose an option', () => {
    expect(onUserChoseOption).not.toHaveBeenCalled()
    component
      .find(OptionChooser)
      .find(Option)
      .first()
      .simulate('click')

    expect(onUserChoseOption).toHaveBeenCalledTimes(1)
    expect(onUserChoseOption).toHaveBeenCalledWith('paper')
  })

  it('should trigger computerChoseOption after 2 seconds', done => {
    expect(onComputerChoseOption).not.toHaveBeenCalled()
    expect(onSetResult).not.toHaveBeenCalled()

    component
      .find(OptionChooser)
      .find(Option)
      .first()
      .simulate('click')

    setTimeout(() => {
      expect(onComputerChoseOption).toHaveBeenCalledTimes(1)
      expect(onSetResult).toHaveBeenCalledTimes(1)
      done()
    }, 2 * 1000)
  })

  it('should be able to start a new game', () => {
    expect(onStartNewGame).not.toHaveBeenCalled()

    component.setProps({
      game: {
        ...component.prop('game'),
        computerOption: 'paper',
        result: getGameResult('paper', 'paper'),
        userOption: 'paper',
        stage: 'started',
      },
    })

    component.find(Button).simulate('click')
    expect(onStartNewGame).toHaveBeenCalledTimes(1)
    expect(
      component
        .find(Grid.Row)
        .first()
        .props()
    ).toHaveProperty('color', 'grey')
  })

  it('computer wins', () => {
    component.setProps({
      game: {
        ...component.prop('game'),
        computerOption: 'paper',
        result: getGameResult('rock', 'paper'),
        userOption: 'rock',
        stage: 'started',
      },
    })

    expect(
      component
        .find(Grid.Row)
        .first()
        .props()
    ).toHaveProperty('color', 'red')
  })

  it('user wins', () => {
    component.setProps({
      game: {
        ...component.prop('game'),
        computerOption: 'rock',
        result: getGameResult('paper', 'rock'),
        userOption: 'paper',
        stage: 'started',
      },
    })

    expect(
      component
        .find(Grid.Row)
        .first()
        .props()
    ).toHaveProperty('color', 'green')
  })
})
