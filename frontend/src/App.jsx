import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import WebLayout from './components/layouts/WebLayout';
import CustomerLayout from './components/layouts/CustomerLayout';
import AdminLayout from './components/layouts/AdminLayout';
import EmployeLayout from './components/layouts/EmployeLayout';
import HomePage from './pages/web/HomePage';
import Login from './pages/auth/login';
import AdminDashborad from './pages/admin/AdminDashborad';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        
        <Route element={<WebLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>

        <Route element={<CustomerLayout />}>

        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashborad />} />
        </Route>

        <Route element={<EmployeLayout />}>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App