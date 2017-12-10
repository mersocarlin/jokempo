// @flow
import React from 'react'
import { connect } from 'react-redux'
import { withHandlers } from 'recompose'
import { Grid } from 'semantic-ui-react'

import ActionCreators from '../actions'

import {
  AnimatedOptionChooser,
  AppFooter,
  AppHeader,
  Board,
  GameScore,
} from '../components'
import options from '../utils/options'
import getGameResult from '../utils/getGameResult'

import './Jokempo.css'

import type { GameReducerT, OptionTypeT } from '../types'

type PropsT = {
  game: GameReducerT,
  onNewGame: () => void,
  onOptionClick: (option: OptionTypeT) => void,
}

function Jokempo({ game, onNewGame, onOptionClick }: PropsT) {
  const backgroundColor = game.result.win
    ? 'green'
    : game.result.loss ? 'red' : game.result.tie ? 'grey' : 'teal'

  return (
    <div style={{ height: '100%' }}>
      <AppHeader color={backgroundColor} header name="Jokempô" position="top" />

      <Grid style={{ height: '100%' }} verticalAlign="middle">
        <Grid.Row color={backgroundColor}>
          <Grid.Column>
            <GameScore color={backgroundColor} {...game.score} />
            {game.stage === 'init' && (
              <AnimatedOptionChooser
                animation="scale"
                onOptionClick={onOptionClick}
                visible={!game.userOption}
              />
            )}
            {game.stage === 'started' && (
              <Board
                computerOption={game.computerOption}
                onNewGame={onNewGame}
                {...game}
              />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <AppFooter color={backgroundColor} />
    </div>
  )
}

export const EnhancedJokempo = withHandlers({
  onOptionClick: ({ computerChoseOption, userChoseOption, setResult }) => (
    userOption: OptionTypeT
  ) => {
    userChoseOption(userOption)

    setTimeout(() => {
      const computerOption = options[Math.floor(Math.random() * 3)]
      computerChoseOption(computerOption)
      setResult(getGameResult(userOption, computerOption))
    }, 2 * 1000)
  },
  onNewGame: ({ startNewGame }) => () => startNewGame(),
})(Jokempo)

const ConnectedJokempo = connect(
  state => ({
    game: state.game,
  }),
  {
    computerChoseOption: ActionCreators.Game.computerChoseOption,
    userChoseOption: ActionCreators.Game.userChoseOption,
    setResult: ActionCreators.Game.setResult,
    startNewGame: ActionCreators.Game.startNewGame,
  }
)(EnhancedJokempo)

export default ConnectedJokempo
