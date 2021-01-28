import { combineReducers } from 'redux'
import flights from './flights/reducer'
import bookings from './booking/reducer'

const rootReducer = combineReducers({ flights, bookings })

export default rootReducer
