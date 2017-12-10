import ActionCreators from '../actions'

import gameReducer, { INITIAL_STATE } from './gameReducer'
import getGameResult from '../utils/getGameResult'

describe('gameReducer', () => {
  it('should handle initialState', () => {
    expect(gameReducer(undefined, {})).toEqual(INITIAL_STATE)
  })

  describe('Players choose option', () => {
    let userChoseOptionState

    beforeEach(() => {
      userChoseOptionState = gameReducer(
        undefined,
        ActionCreators.Game.userChoseOption('paper')
      )
    })

    it('should handle USER_CHOSE_OPTION', () => {
      expect(userChoseOptionState).toHaveProperty('userOption', 'paper')
      expect(userChoseOptionState).toHaveProperty('stage', 'started')
    })

    it('should handle COMPUTER_CHOSE_OPTION', () => {
      const computerChoseOptionState = gameReducer(
        userChoseOptionState,
        ActionCreators.Game.computerChoseOption('rock')
      )

      expect(computerChoseOptionState).toHaveProperty('userOption', 'paper')
      expect(computerChoseOptionState).toHaveProperty('computerOption', 'rock')
    })
  })

  describe('Result and game score', () => {
    let userWinResult
    let userWinState
    let computerWinResult
    let computerWinState

    beforeEach(() => {
      userWinResult = getGameResult('paper', 'rock')
      userWinState = gameReducer(
        undefined,
        ActionCreators.Game.setResult(userWinResult)
      )

      computerWinResult = getGameResult('rock', 'paper')
      computerWinState = gameReducer(
        userWinState,
        ActionCreators.Game.setResult(computerWinResult)
      )
    })

    it('should handle SET_RESULT (user wins)', () => {
      expect(userWinState).toHaveProperty('result', userWinResult)
      expect(userWinState).toHaveProperty('score', {
        computer: 0,
        user: 1,
      })
    })

    it('should handle SET_RESULT (computer wins)', () => {
      expect(computerWinState).toHaveProperty('result', computerWinResult)
      expect(computerWinState).toHaveProperty('score', {
        computer: 1,
        user: 1,
      })
    })

    it('should handle SET_RESULT (tie)', () => {
      const tieResult = getGameResult('paper', 'paper')
      const tieState = gameReducer(
        computerWinState,
        ActionCreators.Game.setResult(tieResult)
      )
      expect(tieState).toHaveProperty('result', tieResult)
      expect(tieState).toHaveProperty('score', {
        computer: 1,
        user: 1,
      })
    })
  })

  it('should handle START_NEW_GAME', () => {
    const gameResult = getGameResult('paper', 'rock')
    const currentState = {
      ...INITIAL_STATE,
      computerOption: 'rock',
      result: gameResult,
      score: {
        computer: 0,
        user: 1,
      },
      stage: 'started',
      userOption: 'paper',
    }

    expect(
      gameReducer(currentState, ActionCreators.Game.startNewGame())
    ).toEqual({
      ...INITIAL_STATE,
      score: {
        computer: 0,
        user: 1,
      },
    })
  })
})
