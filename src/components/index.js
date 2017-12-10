import React from 'react'
import { Button, Header } from 'semantic-ui-react'

import { withTransition } from '../higher-order'
import Loader from './Loader'
import Option from './Option'
import OptionChooser from './OptionChooser'

export const AnimatedButton = withTransition(Button)
export const AnimatedHeader = withTransition(props => (
  <Header {...props} style={{ color: 'white' }} />
))
export const AnimatedLoader = withTransition(Loader)
export const AnimatedOption = withTransition(Option)
export const AnimatedOptionChooser = withTransition(OptionChooser)

export { default as Board } from './Board'
export { default as GameScore } from './GameScore'
