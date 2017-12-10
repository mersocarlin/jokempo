import type { OptionTypeT } from '../types'

const result = {
  paper: {
    action: 'covers',
    wins: 'rock',
  },
  rock: {
    action: 'blunts',
    wins: 'scissors',
  },
  scissors: {
    action: 'cuts',
    wins: 'paper',
  },
}

const capitalizeMe = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1)

export default function getGameResult(
  userOption: OptionTypeT,
  computerOption: OptionTypeT
): GameResultT {
  if (userOption === computerOption) {
    return {
      description: 'Maybe next time',
      message: 'You tie!',
      tie: true,
    }
  }

  if (result[userOption].wins === computerOption) {
    return {
      description: `${capitalizeMe(userOption)} ${
        result[userOption].action
      } ${computerOption}`,
      message: 'You win!',
      win: true,
    }
  }

  return {
    description: `${capitalizeMe(computerOption)} ${
      result[computerOption].action
    } ${userOption}`,
    message: 'You lose!',
    loss: true,
  }
}
