import {
  setBooking,
  SET_BOOKING,
  fetchBookings,
  deleteBooking,
  DELETE_BOOKING,
  FETCH_BOOKINGS
} from '../actions'

describe('Actions tests with empty state', () => {
  test('setBooking action', () => {
    const EXPECTED_ACTION = { payload: { name: 'test' }, type: SET_BOOKING }

    expect(setBooking({ name: 'test' })).toEqual(EXPECTED_ACTION)
  })

  test('fetchBookings action', () => {
    const EXPECTED_ACTION = { payload: { name: 'test' }, type: FETCH_BOOKINGS }

    expect(fetchBookings({ name: 'test' })).toEqual(EXPECTED_ACTION)
  })

  test('deleteBooking action', () => {
    const EXPECTED_ACTION = { payload: { name: 'test' }, type: DELETE_BOOKING }

    expect(deleteBooking({ name: 'test' })).toEqual(EXPECTED_ACTION)
  })
})
