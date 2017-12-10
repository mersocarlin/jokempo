// @flow
import React from 'react'
import { Grid } from 'semantic-ui-react'

import { AnimatedHeader, AnimatedLoader, AnimatedOption } from './index'

import type { OptionTypeT } from '../types'

type ApiPropsT = {
  computerOption: OptionTypeT,
  userOption: OptionTypeT,
}
export default function BoardContent({
  computerOption,
  userOption,
}: ApiPropsT) {
  return (
    <Grid.Row columns={3}>
      <Grid.Column>
        <AnimatedOption
          animation="fly right"
          type={userOption}
          transitionOnMount
        />
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <AnimatedHeader as="h2" animation="swing up" transitionOnMount>
          VS
        </AnimatedHeader>
      </Grid.Column>
      <Grid.Column textAlign="center" verticalAlign="middle">
        <AnimatedLoader
          animation="fade"
          transitionOnMount
          visible={!computerOption}
        >
          Waiting for opponent...
        </AnimatedLoader>
        {computerOption && (
          <AnimatedOption
            animation="fly left"
            type={computerOption}
            transitionOnMount
          />
        )}
      </Grid.Column>
    </Grid.Row>
  )
}
