// @flow
import React from 'react'
import { Button, Col, Input, InputNumber, notification, Row, Select } from 'antd'
import type { SlotsT } from '../../store/flights/types'
import { useDispatch, useSelector } from 'react-redux'
import { getCities, getCountries, getTimeSlots } from '../../store/flights/selectors'
import { setBooking } from '../../store/booking/actions'
import getUniqueId from '../../utlis/unique-id'

const { Option } = Select

const notificationMessage = {
  success: {
    message: 'Booking Successful',
    description: 'Your reservation has been saved successfully'
  },
  error: { message: 'Booking Failed', description: 'Please check booking fields and try again' }
}

const BookingForm = () => {
  const [city, setCity] = React.useState()
  const [time, setTime] = React.useState()
  const [traveling, setTraveling] = React.useState()
  const cities: Array<string> = useSelector(getCities)
  const getTime = getTimeSlots()
  const countries = getCountries()
  const timeSlot: Array<SlotsT> = useSelector(state => getTime(state, city))
  const country: string = useSelector(state => countries(state, city))
  const dispatch = useDispatch()

  const onCityChange = (cityValue: string) => {
    setCity(cityValue)
    setTime()
  }
  const onTimeChange = (timeSlot: string) => setTime(timeSlot)

  const onTravelingChange = (travelingValue: string | number) => setTraveling(travelingValue)

  const openNotification = (type: string) => {
    notification[type]({
      message: notificationMessage[type].message,
      description: notificationMessage[type].description
    })
  }

  const onBookingClick = () => {
    if (!city || !time || !traveling) {
      return openNotification('error')
    }

    const getPrice = timeSlot.filter((slot: SlotsT) => slot.time === time)

    setCity()
    setTime()
    dispatch(
      //$FlowFixMe
      setBooking({ city, traveling, status: 'DRAFT', country, ...getPrice[0], id: getUniqueId() })
    )

    return openNotification('success')
  }

  return (
    <Row className='tabs__container tabs__flight-container' gutter={16} wrap='true'>
      <Col xs={{ span: 24 }} lg={{ span: 8 }} className='tabs__flight-where-container'>
        <h3 className='tabs__flight-title'>Where are you flying?</h3>
        <div className='tabs__flight-location'>
          <div className='tabs__flight-from'>
            <p className='tabs__flight-from-text'>From</p>
            <Input value='Guadalajara' disabled className='tabs__flight-from-input' />
          </div>
          <div className='tabs__flight-to'>
            <p className='tabs__flight-to-text'>To</p>
            <Select
              showSearch
              allowClear
              value={city}
              onChange={onCityChange}
              placeholder='Select city'
              optionFilterProp='children'
              className='tabs__flight-to-input w-100'
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {cities.length
                ? cities.map((city: string) => (
                    <Option value={city} key={city} className='tabs__flight-to-option'>
                      {city}
                    </Option>
                  ))
                : null}
            </Select>
          </div>
        </div>
      </Col>
      <Col
        xs={{ span: 24 }}
        md={{ span: 12 }}
        lg={{ span: 7 }}
        className='tabs__flight-time-container'
      >
        <h3 className='w-100'>When are you flying?</h3>
        <Select
          showSearch
          allowClear
          value={time}
          onChange={onTimeChange}
          placeholder='Select time'
          optionFilterProp='children'
          className='tabs__flight-time-input w-100'
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {timeSlot.length
            ? timeSlot.map(({ time }: SlotsT) => (
                <Option value={time} key={time} className='tabs__flight-to-option'>
                  {time}
                </Option>
              ))
            : null}
        </Select>
      </Col>
      <Col
        xs={{ span: 24 }}
        md={{ span: 6 }}
        lg={{ span: 4 }}
        className='tabs__flight-traveling-container'
      >
        <h3 className='w-100'>Who is traveling?</h3>
        <InputNumber
          min={1}
          className='tabs__flight-traveling-input w-100'
          onChange={onTravelingChange}
        />
      </Col>
      <Col
        xs={{ span: 24 }}
        md={{ span: 6 }}
        lg={{ span: 5 }}
        className='tabs__flight-cta-container'
      >
        <Button type='primary' className='tabs__flight-cta-button w-100' onClick={onBookingClick}>
          Pre-Booking
        </Button>
      </Col>
    </Row>
  )
}

export default BookingForm
