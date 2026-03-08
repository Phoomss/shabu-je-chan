import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/admin/Navbar';

const AdminLayout = () => {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fdfdfd' }}>
      <Navbar />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;