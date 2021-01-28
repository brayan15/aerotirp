import { getBookings } from '../selectors'

describe('Booking Selectors', () => {
  const mockState = {
    bookings: [
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
  }

  const expectedSelector = [
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

  test('getBookings Selector', () => {
    expect(getBookings(mockState)).toEqual(expectedSelector)
  })
})
