import Booking from '../reducer'
import { DELETE_BOOKING, FETCH_BOOKINGS, SET_BOOKING } from '../actions'

const mockData = [
  {
    city: 'bogota',
    country: 'colombia',
    id: 'slug-4',
    price: '7000',
    status: 'DRAFT',
    time: '9 PM',
    traveling: 2
  }
]

describe('Reducer', () => {
  const initialState = []
  const EXPECTED_STATE = [
    {
      city: 'bogota',
      country: 'colombia',
      id: 'slug-4',
      price: '7000',
      status: 'DRAFT',
      time: '9 PM',
      traveling: 2
    }
  ]

  test('Should return INITIAL_STATE', () => {
    const INITIAL_STATE = []

    expect(Booking(initialState, {})).toEqual(INITIAL_STATE)
  })

  test('FETCH_BOOKING case', () => {
    const EXPECTED_STATE = [
      {
        city: 'bogota',
        country: 'colombia',
        id: 'slug-4',
        price: '7000',
        status: 'DRAFT',
        time: '9 PM',
        traveling: 2
      }
    ]
    const DISPATCHED_ACTION = { type: FETCH_BOOKINGS, payload: mockData }

    expect(Booking(initialState, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('SET_BOOKING case', () => {
    const DISPATCHED_ACTION = { type: SET_BOOKING, payload: mockData[0] }

    expect(Booking(initialState, DISPATCHED_ACTION)).toEqual(EXPECTED_STATE)
  })

  test('SET_BOOKING case', () => {
    const DISPATCHED_ACTION = { type: DELETE_BOOKING, payload: 'slug-4' }

    expect(Booking(initialState, DISPATCHED_ACTION)).toEqual(initialState)
  })
})
