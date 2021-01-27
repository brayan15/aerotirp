import store from '../index'
import mockData from '../flights/mock-data'

const expectedState = {
  flights: {
    ...mockData
  }
}

describe('Store', () => {
  it('Should have call store and assigned a default state', () => {
    expect(store).toBeInstanceOf(Object)
    expect(store.getState()).toEqual(expectedState)
  })
})
