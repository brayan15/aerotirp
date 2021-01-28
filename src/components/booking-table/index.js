// @flow
import React from 'react'
import { Table, Empty } from 'antd'
import type { BookingT } from '../../store/booking/types'

type PropsT = {
  bookings: Array<BookingT>
}

const columns = [
  {
    title: 'City',
    dataIndex: 'city',
    key: 'city',
    render: (city: string) => <span className='booking-table__span'>{city}</span>
  },
  {
    title: 'Who is Traveling',
    dataIndex: 'traveling',
    key: 'traveling',
    render: (traveling: string) => <span className='booking-table__span'>{traveling}</span>
  },
  {
    title: 'Country',
    dataIndex: 'country',
    key: 'country',
    render: (country: string) => <span className='booking-table__span'>{country}</span>
  },
  {
    title: 'Time',
    dataIndex: 'time',
    key: 'time',
    render: (time: string) => <span className='booking-table__span'>{time}</span>
  }
]

const BookingTable = ({ bookings }: PropsT) => {
  return (
    <>
      {bookings.length ? (
        <Table
          columns={columns}
          dataSource={bookings}
          className='booking-table'
          pagination={{ pageSize: 5 }}
        />
      ) : (
        <Empty className='tabs__empty' />
      )}
    </>
  )
}

export default BookingTable
