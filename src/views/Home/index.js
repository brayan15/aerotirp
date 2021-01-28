import React from 'react'
import { Row, Col, Divider, Typography } from 'antd'
import BookingTabs from '../../components/booking-tabs'
import FlightCard from '../../components/flight-card'

const { Title, Paragraph } = Typography

const Home = () => (
  <Row className='w-100'>
    <Col xs={{ span: 24 }} xl={{ span: 20, offset: 2 }}>
      <Typography className='main-title'>
        <Title>Aerotrip Airline</Title>
        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci asperiores, aut
          consectetur debitis dolorem eligendi, esse facilis laboriosam officia perspiciatis quasi
          qui? Doloremque eligendi esse facilis, fugit impedit in velit?
        </Paragraph>
      </Typography>
      <BookingTabs />
      <Divider orientation='left'>Available Flights</Divider>
      <FlightCard />
    </Col>
  </Row>
)

export default Home
