import React from 'react'
import { Tabs, Row, Col, Button, Input, InputNumber } from 'antd'

const { TabPane } = Tabs

const BookingTabs = () => (
  <Tabs defaultActiveKey='1' className='tabs'>
    <TabPane tab='Book your flight' key='1'>
      <Row className='tabs__container tabs__flight-container' gutter={16} wrap>
        <Col xs={{ span: 24 }} lg={{ span: 8 }} className='tabs__flight-where-container'>
          <h3 className='tabs__flight-title'>Where are you flying?</h3>
          <div className='tabs__flight-location'>
            <div className='tabs__flight-from'>
              <p className='tabs__flight-from-text'>From</p>
              <Input value='Mexico' disabled className='tabs__flight-from-input' />
            </div>
            <div className='tabs__flight-to'>
              <p className='tabs__flight-to-text'>To</p>
              <Input className='tabs__flight-to-input' />
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
          <Input className='tabs__flight-time-input' />
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 6 }}
          lg={{ span: 4 }}
          className='tabs__flight-traveling-container'
        >
          <h3 className='w-100'>Who is traveling?</h3>
          <InputNumber min={1} className='tabs__flight-traveling-input w-100' />
        </Col>
        <Col
          xs={{ span: 24 }}
          md={{ span: 6 }}
          lg={{ span: 5 }}
          className='tabs__flight-cta-container'
        >
          <Button type='primary' className='tabs__flight-cta-button w-100'>
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

export default BookingTabs
