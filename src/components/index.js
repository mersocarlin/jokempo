import { Header } from 'semantic-ui-react'

import { withTransition } from '../higher-order'
import Option from './Option'

export const AnimatedHeader = withTransition(Header)
export const AnimatedOption = withTransition(Option)
