// @flow
import React from 'react'
import { Badge, Col, notification, Row } from 'antd'
import { BellTwoTone } from '@ant-design/icons'
import { Layout } from 'antd'
import type { BookingT } from '../../store/booking/types'
import { useSelector } from 'react-redux'
import { getBookings } from '../../store/booking/selectors'

const Header = () => {
  const bookings:Array<BookingT> = useSelector(getBookings)

  const openNotification = () => {
    notification.info({
      message: 'Booking Info',
      description: `You have ${bookings.length} pre-bookings, go to My trips section to get more details`
    })
  }

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
