// @flow
import type { FlightStateT } from './types'
import { ERROR_FETCH_FLIGHTS, FETCH_FLIGHTS, LOADING_FETCH_FLIGHTS } from './actions'
import type { ActionT } from '../types'

const initialState = {
  isLoading: false,
  data: {}
}

const reducer = (state: FlightStateT = initialState, { type, payload }: ActionT) => {
  switch (type) {
    case FETCH_FLIGHTS:
      return { ...state, data: { ...payload }, isLoading: false }
    case LOADING_FETCH_FLIGHTS:
      return { ...state, isLoading: true }
    case ERROR_FETCH_FLIGHTS:
      return { ...state, isLoading: false }
    default:
      return state
  }
}

export default reducer
