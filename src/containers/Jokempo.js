import React from 'react'
import { connect } from 'react-redux'

import ActionCreators from '../actions'

function Jokempo({ game }) {
  return <div className="jokempo">Jokempo</div>
}

export default connect(
  state => ({
    game: state.game,
  }),
  {
    computerChoseOption: ActionCreators.Game.computerChoseOption,
    userChoseOption: ActionCreators.Game.userChoseOption,
    setResult: ActionCreators.Game.setResult,
    startNewGame: ActionCreators.Game.startNewGame,
  }
)(Jokempo)
