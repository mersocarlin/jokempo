import React from 'react'
import { Transition } from 'semantic-ui-react'

export default function withTransitionHOC(WrappedComponent) {
  const withTransition = ({
    animation = 'fade',
    duration = 500,
    transitionOnMount,
    visible,
    ...rest
  }) => (
    <Transition
      animation={animation}
      duration={duration}
      transitionOnMount={transitionOnMount}
      visible={visible}
    >
      <div>
        <WrappedComponent {...rest} />
      </div>
    </Transition>
  )

  return withTransition
}
