import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'
import Home from './pages/web/Home'
import WebLayout from './components/layouts/WebLayout'
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<WebLayout />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App