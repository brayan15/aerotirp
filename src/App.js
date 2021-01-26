import React from 'react'
import { Layout } from 'antd'
import Footer from './components/footer'
import './styles/main.scss'

function App() {
  return (
    <div className='app'>
      <Layout className='app__layout'>
        <Layout.Content className='container'>
          <p>AeroTrip</p>
        </Layout.Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
