// @flow
import React from 'react'
import { Badge, Col, notification, Row } from 'antd'
import { BellTwoTone } from '@ant-design/icons'
import { Layout } from 'antd'
import type { BookingT } from '../../store/booking/types'
import { useDispatch, useSelector } from 'react-redux'
import { getBookings } from '../../store/booking/selectors'
import useFetchFlights from '../../hooks/useFetchFlights'
import { errorFetchFlights, fetchFlights, loadingFetchFlights } from '../../store/flights/actions'

const Header = () => {
  const dispatch = useDispatch()
  const bookings: Array<BookingT> = useSelector(getBookings)
  const [fetchingFlights] = useFetchFlights()

  const openNotification = () => {
    notification.info({
      message: 'Booking Info',
      description: `You have ${bookings.length} pre-bookings, go to My trips section to get more details`
    })
  }

  React.useEffect(() => {
    dispatch(loadingFetchFlights())

    fetchingFlights().then(result => {
      if (result.hasError) {
        return dispatch(errorFetchFlights())
      }

      return dispatch(fetchFlights(result))
    })
  }, []) //eslint-disable-line

  return (
    <Layout.Header className='header'>
      <Row className='w-100'>
        <Col xs={{ span: 24 }} xl={{ span: 20, offset: 2 }} className='header__container'>
          <div className='header__branding'>
            <a href='/' className='header__branding-link'>
              AeroTrip
            </a>
          </div>
          <div className='header__bell-wrapper'>
            <Badge count={bookings.length} dot onClick={openNotification}>
              <BellTwoTone twoToneColor='#FFFFFF' />
            </Badge>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
