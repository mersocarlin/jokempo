const USER_CHOSE_OPTION = 'USER_CHOSE_OPTION'
const COMPUTER_CHOSE_OPTION = 'COMPUTER_CHOSE_OPTION'
const SET_RESULT = 'SET_RESULT'
const START_NEW_GAME = 'START_NEW_GAME'

const userChoseOption = option => ({
  type: USER_CHOSE_OPTION,
  option,
  analytics: {
    category: 'USER',
    action: `User chose ${option}`,
  },
})

const computerChoseOption = option => ({
  type: COMPUTER_CHOSE_OPTION,
  option,
  analytics: {
    category: 'COMPUTER',
    action: `Computer chose ${option}`,
  },
})

const setResult = result => ({
  type: SET_RESULT,
  result,
  analytics: {
    category: 'GAME',
    action: result.message,
  },
})

const startNewGame = () => ({
  type: START_NEW_GAME,
  analytics: {
    category: 'GAME',
    action: 'Start new game',
  },
})

export default {
  USER_CHOSE_OPTION,
  COMPUTER_CHOSE_OPTION,
  SET_RESULT,
  START_NEW_GAME,

  userChoseOption,
  computerChoseOption,
  setResult,
  startNewGame,
}
