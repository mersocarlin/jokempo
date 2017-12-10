export type GameResultT = {
  description: string,
  message: string,
  tie?: boolean,
  loss?: boolean,
  win?: boolean,
}

export type OptionTypeT = 'paper' | 'rock' | 'scissors'

export type GameReducerT = {
  computerOption?: OptionTypeT,
  stage: string,
  result: GameResultT,
  score: {
    computer: number,
    user: number,
  },
  userOption?: OptionTypeT,
}
