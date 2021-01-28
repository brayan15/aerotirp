// @flow
import type { BookingT } from './types'

export const FETCH_BOOKINGS = 'FETCH_BOOKINGS'
export const SET_BOOKING = 'SET_BOOKING'
export const DELETE_BOOKING = 'DELETE_BOOKING'

export const setBooking = (booking: BookingT) => ({
  type: SET_BOOKING,
  payload: booking
})

export const fetchBookings = (bookings: Array<BookingT>) => ({
  type: FETCH_BOOKINGS,
  payload: bookings
})

export const deleteBooking = (bookingId: string) => ({
  type: DELETE_BOOKING,
  payload: bookingId
})
