// @flow
import React from 'react'
import { Grid } from 'semantic-ui-react'

import BoardHeader from './BoardHeader'
import BoardContent from './BoardContent'
import BoardResult from './BoardResult'

import type { GameResultT, OptionTypeT } from '../types'

type ApiPropsT = {
  computerOption: OptionTypeT,
  onNewGame: () => void,
  result: GameResultT,
  userOption: OptionTypeT,
}

export default function Board({
  computerOption,
  onNewGame,
  result,
  userOption,
}: ApiPropsT) {
  return (
    <Grid centered style={{ marginTop: 0 }}>
      <BoardHeader userOption={userOption} message={result.message} />
      <BoardContent computerOption={computerOption} userOption={userOption} />
      {result.description && (
        <BoardResult onNewGame={onNewGame} result={result} />
      )}
    </Grid>
  )
}
