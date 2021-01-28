import axios from 'axios'

class RestClient {
  constructor() {
    this._authApi = axios.create({
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

  /**
   * Get flights from api
   * @return {Promise}
   */

  getFlights = () => {
    return this._authApi.get().then(({ data }) => data)
  }
}

const restClient = new RestClient()

export default restClient
