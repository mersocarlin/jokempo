import { Button, Header } from 'semantic-ui-react'

import { withTransition } from '../higher-order'
import Loader from './Loader'
import Option from './Option'
import OptionChooser from './OptionChooser'

export const AnimatedButton = withTransition(Button)
export const AnimatedHeader = withTransition(Header)
export const AnimatedLoader = withTransition(Loader)
export const AnimatedOption = withTransition(Option)
export const AnimatedOptionChooser = withTransition(OptionChooser)
