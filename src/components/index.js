import { Header } from 'semantic-ui-react'

import { withTransition } from '../higher-order'
import Option from './Option'
import OptionChooser from './OptionChooser'

export const AnimatedHeader = withTransition(Header)
export const AnimatedOption = withTransition(Option)
export const AnimatedOptionChooser = withTransition(OptionChooser)
