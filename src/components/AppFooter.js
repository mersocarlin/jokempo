// @flow
import React from 'react'
import { Menu } from 'semantic-ui-react'

type ApiPropsT = {
  color: string,
}

export default function AppFooter({ color }: ApiPropsT) {
  return (
    <Menu borderless color={color} fixed="bottom" inverted widths={1}>
      <Menu.Item name="Hemerson Carlin" />
    </Menu>
  )
}
