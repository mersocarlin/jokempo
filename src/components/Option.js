// @flow
import React from 'react'
import { Image } from 'semantic-ui-react'

import paperImg from '../img/paper.png'
import rockImg from '../img/rock.png'
import scissorsImg from '../img/scissors.png'

import type { OptionTypeT } from '../types'

type ApiPropsT = {
  onClick?: (type: string) => void,
  type: OptionTypeT,
}

export default function Option({ onClick, type }: ApiPropsT) {
  return (
    <Image
      bordered
      centered
      circular
      className="option"
      onClick={() => onClick && onClick(type)}
      src={getType(type)}
      style={{
        border: '5px solid white',
        cursor: onClick ? 'pointer' : 'default',
      }}
    />
  )
}

const getType = (type: string): string => {
  return (
    (type === 'paper' && paperImg) ||
    (type === 'rock' && rockImg) ||
    (type === 'scissors' && scissorsImg) ||
    paperImg
  )
}
