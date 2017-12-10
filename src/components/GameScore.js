// @flow
import React from 'react'
import { Grid } from 'semantic-ui-react'

import { AnimatedHeader } from './index'

type ApiPropsT = {
  computer: number,
  user: number,
}

const Score = ({ children }) => (
  <AnimatedHeader as="h2" textAlign="center">
    {children}
  </AnimatedHeader>
)

export default function GameScore({ computer, user }: ApiPropsT) {
  return (
    <Grid style={{ minHeight: 90 }}>
      <Grid.Row columns={3}>
        <Grid.Column textAlign="left">
          <Score>
            You <br />
            {user}
          </Score>
        </Grid.Column>
        <Grid.Column textAlign="left" />
        <Grid.Column textAlign="right">
          <Score>
            Them <br />
            {computer}
          </Score>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
