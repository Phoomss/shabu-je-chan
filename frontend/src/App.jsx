import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import WebLayout from './components/layouts/WebLayout';
import CustomerLayout from './components/layouts/CustomerLayout';
import AdminLayout from './components/layouts/AdminLayout';
import EmployeLayout from './components/layouts/EmployeLayout';
import HomePage from './pages/web/HomePage';
import Login from './pages/auth/login';

//customer menu
import Menu from './pages/customer/Menu';
import CartPage from './pages/customer/CartPage';
import TimePage from './pages/customer/TimePage';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        
        <Route element={<WebLayout />}>
          <Route path='/' element={<HomePage />} />
        </Route>

        <Route element={<CustomerLayout />}>
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/time' element={<TimePage />} />
        </Route>

        <Route element={<AdminLayout />}>

        </Route>

        <Route element={<EmployeLayout />}>

        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App