// @flow
import type { FlightT } from './types'

export const FETCH_FLIGHTS = 'FETCH_FLIGHTS'
export const LOADING_FETCH_FLIGHTS = 'LOADING_FETCH_FLIGHTS'
export const ERROR_FETCH_FLIGHTS = 'ERROR_FETCH_FLIGHTS'

export const fetchFlights = (results: { [city: string]: FlightT }) => ({
  type: FETCH_FLIGHTS,
  payload: results
})

export const loadingFetchFlights = () => ({
  type: LOADING_FETCH_FLIGHTS
})

export const errorFetchFlights = () => ({
  type: ERROR_FETCH_FLIGHTS
})
