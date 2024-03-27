import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

//elements
import Header from '../js/components/elements/Header'
import Sidebar from '../js/components/elements/Sidebar'
import Footer from '../js/components/elements/Footer'
import Content from '../js/components/Content'

const Main = () => {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <Content />
      <Footer />
    </BrowserRouter>
  )
}

export default Main