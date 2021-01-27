import {
  fetchFlights,
  FETCH_FLIGHTS,
  errorFetchFlights,
  loadingFetchFlights,
  ERROR_FETCH_FLIGHTS,
  LOADING_FETCH_FLIGHTS
} from '../actions'

describe('Actions tests with empty state', () => {
  test('fetchFlights action', () => {
    const EXPECTED_ACTION = { payload: { name: 'test' }, type: FETCH_FLIGHTS }

    expect(fetchFlights({ name: 'test' })).toEqual(EXPECTED_ACTION)
  })

  test('loadingFetchFlights action', () => {
    const EXPECTED_ACTION = { type: LOADING_FETCH_FLIGHTS }

    expect(loadingFetchFlights()).toEqual(EXPECTED_ACTION)
  })

  test('errorFetchFlights action', () => {
    const EXPECTED_ACTION = { type: ERROR_FETCH_FLIGHTS }

    expect(errorFetchFlights()).toEqual(EXPECTED_ACTION)
  })
})
