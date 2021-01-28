import store from '../index'

const expectedState = {
  bookings: [],
  flights: {
    isLoading: false,
    data: {}
  }
}

describe('Store', () => {
  it('Should have call store and assigned a default state', () => {
    expect(store).toBeInstanceOf(Object)
    expect(store.getState()).toEqual(expectedState)
  })
})
