// @flow
import { createSelector } from 'reselect'
import type { BookingT } from './types'

const getBookingsData = state => state.bookings

export const getBookings = createSelector(
  getBookingsData,
  (bookings: Array<BookingT>) => bookings
)
