// @flow
import React from 'react'
import { Badge } from 'antd'
import { BellTwoTone } from '@ant-design/icons'
import { Layout } from 'antd'

const Header = () => {
  return (
    <Layout.Header className='header'>
      <div className='header__branding'>
        <a href='/' className='header__branding-link'>
          AeroTrip
        </a>
      </div>
      <div className='header__search-wrapper'>
        <Badge dot>
          <BellTwoTone twoToneColor="#FFFFFF"	/>
        </Badge>
      </div>
    </Layout.Header>
  )
}

export default Header
