// @flow
import React from 'react'
import { Grid } from 'semantic-ui-react'

import { AnimatedButton, AnimatedHeader } from './index'

import type { GameResultT } from '../types'

type ApiPropsT = {
  onNewGame: () => void,
  result: GameResultT,
}

export default function BoardResult({ onNewGame, result }: ApiPropsT) {
  return (
    <div>
      <Grid.Row columns={1}>
        <AnimatedHeader as="h4" animation="swing up" transitionOnMount>
          {result.description}
        </AnimatedHeader>
      </Grid.Row>
      <div style={{ marginTop: 20 }}>
        <Grid.Row columns={1}>
          <AnimatedButton
            animation="fade"
            color={result.win ? 'red' : result.loss ? 'green' : 'black'}
            content="Start new Game"
            icon="play"
            labelPosition="left"
            onClick={onNewGame}
            transitionOnMount
          />
        </Grid.Row>
      </div>
    </div>
  )
}
