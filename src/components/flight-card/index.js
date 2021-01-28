import React from 'react'
import { useSelector } from 'react-redux'
import { Card, Col, Row, Empty, Spin } from 'antd'
import { getFlights, isFlightLoading } from '../../store/flights/selectors'

const FlightCard = () => {
  const flights = useSelector(getFlights)
  const isLoading = useSelector(isFlightLoading)

  if (isLoading) {
    return <Spin size='large' className='empty-list' />
  }

  return (
    <Row gutter={[16, 16]} className='flight-card'>
      {flights.length ? (
        flights.map(flight => (
          <Col
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
            xl={{ span: 6 }}
            key={flight.id}
          >
            <Card
              className='flight-card__card'
              title={`${flight.country}, ${flight.city}`}
              cover={<img alt='example' src='https://picsum.photos/seed/picsum/1000/1000' />}
            >
              <p>{flight.description}</p>
            </Card>
          </Col>
        ))
      ) : (
        <Empty className='flight-card__empty' />
      )}
    </Row>
  )
}

export default FlightCard
