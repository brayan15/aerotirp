// @flow
import { createSelector } from 'reselect'

const getFlightsData = state => state.flights.data

export const getFlights = createSelector(getFlightsData, flights => Object.values(flights))

export const isFlightLoading = createSelector(
  state => state.flights.isLoading,
  (isLoading: boolean) => isLoading
)

export const getTimeSlots = () =>
  createSelector(
    getFlightsData,
    (_, city) => city,
    (flights, city) => flights[city]?.slots || []
  )

export const getCities = createSelector(getFlightsData, flights => Object.keys(flights))
