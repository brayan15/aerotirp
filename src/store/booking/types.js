// @flow
export type BookingStatusT = 'TRASH' | 'DRAFT' | 'COMPLETED'

export type BookingT = {
  state: BookingStatusT,
  id: string,
  time: string,
  price: string,
  traveling: number,
  city: string,
  country?: string
}

export type BookingStateT = {
  bookings: Array<BookingT>
}

