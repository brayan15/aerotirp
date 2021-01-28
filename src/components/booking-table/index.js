// @flow
import React from 'react'
import { Table, Empty, Popconfirm } from 'antd'
import type { BookingT } from '../../store/booking/types'
import { useDispatch } from 'react-redux'
import { deleteBooking } from '../../store/booking/actions'

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
  const dispatch = useDispatch()

  const onDeleteBooking = (id: string) => dispatch(deleteBooking(id))

  const actions = [
    ...columns,
    {
      title: 'Actions',
      key: 'action',
      render: (record: BookingT) => (
        <Popconfirm
          title='Are you sure to delete this pre-booking?'
          onConfirm={() => onDeleteBooking(record.id)}
          okText='Yes'
          cancelText='No'
        >
          <a href='#'>Delete</a> {/* eslint-disable-line */}
        </Popconfirm>
      )
    }
  ]

  return (
    <>
      {bookings.length ? (
        <Table
          columns={actions}
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
