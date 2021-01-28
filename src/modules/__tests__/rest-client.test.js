import restClient from '../rest-client'

jest.mock('../rest-client')

describe('Service tests', () => {
  const mockUser = {
    bogota: {
      id: '1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab beatae, consectetur culpa',
      country: 'colombia',
      city: 'bogota',
      slots: [
        { time: '9 AM', price: '5000' },
        { time: '11 AM', price: '4000' },
      ]
    }
  }

  const mockError = {
    error: {
      status: 400
    }
  }

  it('restClient should respond ok', () => {
    restClient.getFlights.mockImplementation(() => Promise.resolve(mockUser))
    restClient.getFlights().then(response => {
      expect(response).toEqual(mockUser)
    })
  })

  it('restClient should fail', () => {
    restClient.getFlights.mockImplementation(() => Promise.reject(mockError))
    restClient.getFlights().catch(error => {
      expect(error).toEqual(mockError)
    })
  })
})
