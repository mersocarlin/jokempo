import GameActionCreators from './gameActions'

import getGameResult from '../utils/getGameResult'

describe('gameActions', () => {
  it('should create userChoseOption action', () => {
    expect(GameActionCreators.userChoseOption('paper')).toEqual({
      type: GameActionCreators.USER_CHOSE_OPTION,
      option: 'paper',
    })
  })

  it('should create computerChoseOption action', () => {
    expect(GameActionCreators.computerChoseOption('paper')).toEqual({
      type: GameActionCreators.COMPUTER_CHOSE_OPTION,
      option: 'paper',
    })
  })

  it('should create setResult action', () => {
    const result = getGameResult('paper', 'paper')
    expect(GameActionCreators.setResult(result)).toEqual({
      type: GameActionCreators.SET_RESULT,
      result,
    })
  })

  it('should create startNewGame action', () => {
    expect(GameActionCreators.startNewGame()).toEqual({
      type: GameActionCreators.START_NEW_GAME,
    })
  })
})
