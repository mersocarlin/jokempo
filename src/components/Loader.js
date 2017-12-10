// @flow
import React from 'react'
import { Dimmer, Loader as SemanticLoader } from 'semantic-ui-react'

type ApiPropsT = {
  children: string,
}

export default function Loader({ children }: ApiPropsT) {
  return (
    <Dimmer active style={{ backgroundColor: 'transparent' }}>
      <SemanticLoader>{children}</SemanticLoader>
    </Dimmer>
  )
}
