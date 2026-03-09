import React from 'react'
import Header from '../shared/employe/Header'
import TabBar from '../shared/employe/TabBar'
import { Outlet } from 'react-router';

const EmployeLayout = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      {/* <TabBar /> */}
      <div className="flex-grow-1">
        <Outlet />
      </div>
    </div>
  )
}

export default EmployeLayout