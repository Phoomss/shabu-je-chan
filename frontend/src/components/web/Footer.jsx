import React from 'react'

const Footer = () => {
    return (
        <footer className="bg-black text-white py-4 mt-auto">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="d-flex align-items-center">
                            <span style={{ fontSize: '1.5rem', marginRight: '0.5rem' }}>🍜</span>
                            <span className="fw-bold fs-5">ชาบูเจ๊จันทร์</span>
                        </div>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <small className="text-white-50">© 2026 ชาบูเจ๊จันทร์. All rights reserved.</small>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer