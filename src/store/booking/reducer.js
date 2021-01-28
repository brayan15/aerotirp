import type { BookingStateT } from './types'
import type { ActionT } from '../types'
import { DELETE_BOOKING, FETCH_BOOKINGS, SET_BOOKING } from './actions'
import normalizeBookings from './helpers'

const initialState = []

const reducer = (state: BookingStateT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case FETCH_BOOKINGS:
      return [...state, ...payload]
    case SET_BOOKING:
      return normalizeBookings(state, payload)
    case DELETE_BOOKING:
      return state
    default:
      return state
  }
}

export default reducer
