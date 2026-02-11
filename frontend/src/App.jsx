// src/App.jsx
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/web/Home'
import WebLayout from './components/layouts/WebLayout'
import CustomerMenu from './pages/web/CustomerMenu'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/CustomerMenu' element={<CustomerMenu />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App