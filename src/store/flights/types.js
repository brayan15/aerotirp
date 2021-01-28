// @flow

export type ActionT = {
  type: string,
  payload: any
}

export type SlotsT = {
  time: string,
  price: string
}

export type FlightT = {
  id: string,
  description: string,
  country: string,
  city: string,
  slots: Array<SlotsT>
}

export type FlightStateT = {
  isLoading: boolean,
  data: {
    [city: string]: FlightT
  }
}
