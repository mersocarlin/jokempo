// @flow
import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

type ApiPropsT = {
  color: string,
}

export default function AppFooter({ color }: ApiPropsT) {
  return (
    <Menu borderless color={color} fixed="bottom" inverted size="tiny">
      <Menu.Item href="https://github.com/mersocarlin/jokempo" target="_blank">
        <Icon name="github" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item href="https://icons8.com" target="_blank">
          Icons8
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  )
}
