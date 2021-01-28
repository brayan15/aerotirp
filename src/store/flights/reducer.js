// @flow
import type { FlightStateT } from './types'
import { ERROR_FETCH_FLIGHTS, FETCH_FLIGHTS, LOADING_FETCH_FLIGHTS } from './actions'
import mockData from './mock-data'
import type { ActionT } from '../types'

const initialState = {
  isLoading: false,
  data: { ...mockData }
}

const reducer = (state: FlightStateT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case FETCH_FLIGHTS:
      return state
    case LOADING_FETCH_FLIGHTS:
      return state
    case ERROR_FETCH_FLIGHTS:
      return state
    default:
      return state
  }
}

export default reducer
