// @flow
import restClient from '../modules/rest-client'

const useFetchFlights= () => {
  const fetchingFlights = async () => {
    try {
      return await restClient.getFlights()
    } catch (error) {

      return { hasError: true }
    }
  }

  return [fetchingFlights]
}

export default useFetchFlights
