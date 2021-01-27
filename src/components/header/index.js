// @flow
import React from 'react'
import { Badge, Col, Row } from 'antd'
import { BellTwoTone } from '@ant-design/icons'
import { Layout } from 'antd'

const Header = () => {
  return (
    <Layout.Header className='header'>
      <Row className='w-100'>
        <Col xs={{ span: 24 }} xl={{ span: 20, offset: 2 }} className='header__container'>
          <div className='header__branding'>
            <a href='/' className='header__branding-link'>
              AeroTrip
            </a>
          </div>
          <div className='header__search-wrapper'>
            <Badge dot>
              <BellTwoTone twoToneColor='#FFFFFF' />
            </Badge>
          </div>
        </Col>
      </Row>
    </Layout.Header>
  )
}

export default Header
