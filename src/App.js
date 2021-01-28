import React from 'react'
import { Layout } from 'antd'
import Home from './views/Home'
import Footer from './components/footer'
import Header from './components/header'
import './styles/main.scss'

function App() {
  return (
    <div className='app'>
      <Layout className='app__layout'>
        <Header />
        <Layout.Content className='container'>
          <Home />
        </Layout.Content>
        <Footer />
      </Layout>
    </div>
  )
}

export default App
