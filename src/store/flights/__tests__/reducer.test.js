import Flights from '../reducer'
import mockData from '../mock-data'
import { ERROR_FETCH_FLIGHTS, FETCH_FLIGHTS, LOADING_FETCH_FLIGHTS } from '../actions'

describe('Reducer', () => {
  const initialState = {
    isLoading: false,
    data: {}
  }

  test('Should return INITIAL_STATE', () => {
    const INITIAL_STATE = {}

    expect(Flights({}, {})).toEqual(INITIAL_STATE)
  })

  test('FETCH_FLIGHT case', () => {
    const EXPECTED_STATE = {
      isLoading: false,
      data: { ...mockData }
    }
    const DISPATCHED_ACTION = { type: FETCH_FLIGHTS, payload: { ...mockData } }

    expect(Flights(initialState, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('LOADING_FETCH_FLIGHTS case', () => {
    const EXPECTED_STATE = {
      isLoading: true,
      data: {}
    }
    const DISPATCHED_ACTION = { type: LOADING_FETCH_FLIGHTS, payload: {} }

    expect(Flights(initialState, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('ERROR_FETCH_FLIGHTS case', () => {
    const EXPECTED_STATE = {
      isLoading: false,
      data: {}
    }
    const DISPATCHED_ACTION = { type: ERROR_FETCH_FLIGHTS, payload: {} }

    expect(Flights(initialState, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })
})
