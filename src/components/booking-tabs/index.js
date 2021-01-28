// @flow
import React from 'react'
import { Tabs } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { fetchBookings } from '../../store/booking/actions'
import type { BookingT } from '../../store/booking/types'
import { getBookings } from '../../store/booking/selectors'
import BookingTable from '../booking-table'
import BookingForm from '../booking-form'

const { TabPane } = Tabs

const BookingTabs = () => {
  const bookings: Array<BookingT> = useSelector(getBookings)
  const dispatch = useDispatch()

  React.useEffect(() => {
    //$FlowFixMe
    const localBookings = JSON.parse(localStorage.getItem('bookings')) || []

    dispatch(fetchBookings(localBookings))
  }, []) //eslint-disable-line

  return (
    <Tabs defaultActiveKey='1' className='tabs'>
      <TabPane tab='Book your flight' key='1'>
        <BookingForm />
      </TabPane>
      <TabPane tab='My trips' key='2'>
        <BookingTable bookings={bookings} />
      </TabPane>
    </Tabs>
  )
}

export default BookingTabs
