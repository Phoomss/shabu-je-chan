import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import WebLayout from './components/layouts/WebLayout';
import CustomerLayout from './components/layouts/CustomerLayout';
import AdminLayout from './components/layouts/AdminLayout';
import EmployeLayout from './components/layouts/EmployeLayout';
import HomePage from './pages/web/HomePage';
import Login from './pages/auth/login';
import AdminDashborad from './pages/admin/AdminDashborad';
import HomeEmploye from './pages/employee/HomeEmploye';
import { ToastContainer } from 'react-toastify';

import Menu from './pages/customer/CustomerMenu';
import CartPage from './pages/customer/CartPage';
import TimePage from './pages/customer/TimePage';

const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
      />
      <Routes>
        <Route path='/login' element={<Login />} />

        <Route element={<WebLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>

        <Route element={<CustomerLayout />}>
          <Route path='/order/:tableNumber' element={<Menu />} />
          <Route path='/cart/:tableNumber' element={<CartPage />} />
          <Route path='/time/:tableNumber' element={<TimePage />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashborad />} />
        </Route>

        <Route element={<EmployeLayout />}>
          <Route path='/employes/home' element={<HomeEmploye />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App