export type GameResultT = {
  description: string,
  message: string,
  tie?: boolean,
  loss?: boolean,
  win?: boolean,
}

export type OptionTypeT = 'paper' | 'rock' | 'scissors'
