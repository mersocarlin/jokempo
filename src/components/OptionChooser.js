// @flow
import React from 'react'
import { Grid } from 'semantic-ui-react'

import { AnimatedHeader, AnimatedOption } from './index'
import options from '../utils/options'

type ApiPropsT = {
  onOptionClick: (type: string) => void,
}

export default function OptionChooser({ onOptionClick }: ApiPropsT) {
  return (
    <Grid>
      <Grid.Row columns={1} textAlign="center">
        <Grid.Column>
          <AnimatedHeader as="h2" animation="swing up" transitionOnMount>
            Take your pick
          </AnimatedHeader>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row columns={3}>
        {options.map(option => (
          <Grid.Column key={option}>
            <AnimatedOption
              animation="swing up"
              onClick={onOptionClick}
              type={option}
              transitionOnMount
            />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  )
}
