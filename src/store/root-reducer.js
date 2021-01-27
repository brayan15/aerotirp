import { combineReducers } from 'redux'
import flights from './flights/reducer'

const rootReducer = combineReducers({ flights })

export default rootReducer
