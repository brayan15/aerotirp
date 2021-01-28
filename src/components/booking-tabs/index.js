// @flow
import React from 'react'
import { Tabs, Row, Col, Button, Input, InputNumber, Select, notification } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { getCities, getTimeSlots } from '../../store/flights/selectors'
import type { SlotsT } from '../../store/flights/types'

const { TabPane } = Tabs
const { Option } = Select

const notificationMessage = {
  success: {
    message: 'Booking Successful',
    description: 'Your reservation has been saved successfully'
  },
  error: { message: 'Booking Failed', description: 'Please check booking fields and try again' }
}

const BookingTabs = () => {
  const [city, setCity] = React.useState()
  const [time, setTime] = React.useState()
  const [traveling, setTraveling] = React.useState()
  const cities: Array<string> = useSelector(getCities)
  const getTime = getTimeSlots()
  const timeSlot: Array<SlotsT> = useSelector(state => getTime(state, city))
  const dispatch = useDispatch() // eslint-disable-line

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
    // const getPrice = timeSlot.filter((slot: SlotsT) => slot.time === time)

    if (!city || !time || !traveling) {
      return openNotification('error')
    }

    setCity()
    setTime()
    setTraveling()
    //dispatch(setBooking({city, traveling, ...getPrice[0]}))

    return openNotification('success')
  }

  return (
    <Tabs defaultActiveKey='1' className='tabs'>
      <TabPane tab='Book your flight' key='1'>
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
            <Button
              type='primary'
              className='tabs__flight-cta-button w-100'
              onClick={onBookingClick}
            >
              Booking
            </Button>
          </Col>
        </Row>
      </TabPane>
      <TabPane tab='My trips' key='2'>
        List of bookings
      </TabPane>
    </Tabs>
  )
}

export default BookingTabs
