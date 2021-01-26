import React from 'react'
import { Tabs, Row, Col } from 'antd'

const { TabPane } = Tabs

const Home = () => (
  <Row className='w-100' gutter={24}>
    <Col span={20} offset={2}>
      <Tabs defaultActiveKey='1' className='tabs'>
        <TabPane tab='Book your flight' key='1'>
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab='My trips' key='2'>
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </Col>
  </Row>
)

export default Home
