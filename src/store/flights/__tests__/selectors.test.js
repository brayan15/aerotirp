import mockData from '../mock-data'
import { getCities, getCountries, getFlights, getTimeSlots, isFlightLoading } from '../selectors'

describe('Flight selector', () => {
  const mockState = {
    flights: {
      isLoading: false,
      data: { ...mockData }
    }
  }

  const slotMocked = [
    { time: '9 AM', price: '5000' },
    { time: '11 AM', price: '4000' },
    { time: '1 PM', price: '3000' },
    { time: '3 AM', price: '4500' },
    { time: '9 PM', price: '7000' }
  ]

  test('getFlights', () => {
    expect(getFlights(mockState)).toEqual(Object.values(mockData))
  })

  test('isFlightLoading', () => {
    expect(isFlightLoading(mockState)).toBeFalsy()
  })

  test('getTimeSlots', () => {
    const timeSlots = getTimeSlots()

    expect(timeSlots(mockState, 'cali')).toEqual(slotMocked)
  })

  test('getCities', () => {
    expect(getCities(mockState)).toEqual(['bogota', 'florida', 'milan', 'madrid', 'roma', 'cali'])
  })

  test('getCountries', () => {
    const countries = getCountries()

    expect(countries(mockState, 'cali')).toEqual('colombia')
  })
})
