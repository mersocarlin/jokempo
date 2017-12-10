import getGameResult from './getGameResult'

describe('getGameResult', () => {
  describe('Tie', () => {
    it('paper vs paper', () => {
      expect(getGameResult('paper', 'paper')).toEqual({
        description: 'Maybe next time',
        message: 'You tie!',
        tie: true,
      })
    })

    it('rock vs rock', () => {
      expect(getGameResult('rock', 'rock')).toEqual({
        description: 'Maybe next time',
        message: 'You tie!',
        tie: true,
      })
    })

    it('scissors vs scissors', () => {
      expect(getGameResult('scissors', 'scissors')).toEqual({
        description: 'Maybe next time',
        message: 'You tie!',
        tie: true,
      })
    })
  })

  describe('User wins', () => {
    it('paper vs rock', () => {
      expect(getGameResult('paper', 'rock')).toEqual({
        description: 'Paper covers rock',
        message: 'You win!',
        win: true,
      })
    })

    it('rock vs scissors', () => {
      expect(getGameResult('rock', 'scissors')).toEqual({
        description: 'Rock blunts scissors',
        message: 'You win!',
        win: true,
      })
    })

    it('scissors vs paper', () => {
      expect(getGameResult('scissors', 'paper')).toEqual({
        description: 'Scissors cuts paper',
        message: 'You win!',
        win: true,
      })
    })
  })

  describe('User loses', () => {
    it('scissors vs rock', () => {
      expect(getGameResult('scissors', 'rock')).toEqual({
        description: 'Rock blunts scissors',
        message: 'You lose!',
        loss: true,
      })
    })

    it('rock vs paper', () => {
      expect(getGameResult('rock', 'paper')).toEqual({
        description: 'Paper covers rock',
        message: 'You lose!',
        loss: true,
      })
    })

    it('paper vs scissors', () => {
      expect(getGameResult('paper', 'scissors')).toEqual({
        description: 'Scissors cuts paper',
        message: 'You lose!',
        loss: true,
      })
    })
  })
})
