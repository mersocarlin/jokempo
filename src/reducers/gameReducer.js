import ActionCreators from '../actions'

export const INITIAL_STATE = {
  computerOption: null,
  stage: 'init',
  result: {},
  score: {
    computer: 0,
    user: 0,
  },
  userOption: null,
}

export default function gameReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state
    case ActionCreators.Game.USER_CHOSE_OPTION:
      return {
        ...state,
        userOption: action.option,
        stage: 'started',
      }
    case ActionCreators.Game.COMPUTER_CHOSE_OPTION:
      return {
        ...state,
        computerOption: action.option,
      }
    case ActionCreators.Game.SET_RESULT:
      return {
        ...state,
        result: action.result,
        score: {
          computer: action.result.loss
            ? state.score.computer + 1
            : state.score.computer,
          user: action.result.win ? state.score.user + 1 : state.score.user,
        },
      }
    case ActionCreators.Game.START_NEW_GAME:
      return {
        ...INITIAL_STATE,
        score: {
          ...state.score,
        },
      }
  }
}
