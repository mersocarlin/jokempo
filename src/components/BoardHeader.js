// @flow
import React from 'react'
import { Grid } from 'semantic-ui-react'

import { AnimatedHeader } from './index'

import type { OptionTypeT } from '../types'

type ApiPropsT = {
  message?: string,
  userOption: OptionTypeT,
}

export default function BoardHeader({ userOption, message }: ApiPropsT) {
  return (
    <Grid.Row columns={3}>
      <Grid.Column textAlign="center">
        {!message && (
          <AnimatedHeader as="h3" animation="swing up" transitionOnMount>
            {`You chose ${userOption}`}
          </AnimatedHeader>
        )}
      </Grid.Column>
      <Grid.Column textAlign="center">
        {message && (
          <AnimatedHeader as="h3" animation="swing up" transitionOnMount>
            {message}
          </AnimatedHeader>
        )}
      </Grid.Column>
      <Grid.Column />
    </Grid.Row>
  )
}
