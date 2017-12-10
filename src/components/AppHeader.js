// @flow
import React from 'react'
import { Menu } from 'semantic-ui-react'

type ApiPropsT = {
  color: string,
}

export default function AppHeader({ color }: ApiPropsT) {
  return (
    <Menu borderless color={color} fixed="top" inverted>
      <Menu.Item header>Jokempô</Menu.Item>
    </Menu>
  )
}
