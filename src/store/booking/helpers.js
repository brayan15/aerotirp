// @flow
import type { BookingT } from './types'

const normalizeBookings = (state: Array<BookingT>, payload: BookingT) => {
  const bookings = [...state, { ...payload }]

  localStorage.setItem('bookings', JSON.stringify(bookings))

  return bookings
}

export const normalizeDeleteBooking = (state: Array<BookingT>, payload: string) => {
  //$FlowFixMe
  const bookings = state.filter((booking: BookingT) => booking.id !== payload)

  localStorage.setItem('bookings', JSON.stringify(bookings))

  return bookings
}

export default normalizeBookings
