import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Login from './pages/auth/Login'
import Content from './components/Content'
import AdminLTE from './AdminLTE'
//pages
import Dashboard from './pages/Dashboard'
import IndexFrozen from './pages/frozens/index'
import IndexCategories from './pages/categories/index'

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/*' element={<AdminLTE />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Main