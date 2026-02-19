import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark py-3">
      <div className="container d-flex justify-content-between align-items-center">

        {/* Brand */}
        <a href="#" className="d-flex align-items-center gap-2 text-decoration-none">
          <img src="./logo.png" alt="" style={{ width: 64, height: 64 }} />
          <span className="fw-bold text-light">ชาบูเจ๊จันทร์</span>
        </a>

        {/* Copyright */}
        <small className="text-secondary">
          © 2026 ชาบูเจ๊จันทร์. All rights reserved.
        </small>

      </div>
    </footer>
  )
}

export default Footer