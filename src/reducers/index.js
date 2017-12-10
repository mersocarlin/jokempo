import { combineReducers } from 'redux'
import gameReducer from './gameReducer'

const jokempo = combineReducers({ game: gameReducer })

export default jokempo
