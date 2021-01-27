import Flights from '../reducer'
import mockData from '../mock-data'

describe('Reducer', () => {
  const initialState = { ...mockData }  //eslint-disable-line

  test('Should return INITIAL_STATE', () => {
    const INITIAL_STATE = {}

    expect(Flights({}, {})).toEqual(INITIAL_STATE)
  })
})
