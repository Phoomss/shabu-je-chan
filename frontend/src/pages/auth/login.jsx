import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import {useNavigate} from 'react-router'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const toastConfig = {
        style: {
            background: '#1e1e2e',
            color: '#fff',
            borderRadius: '16px',
            fontSize: '0.9rem',
            boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        },
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!username || !password) {
            toast.error('กรุณากรอกชื่อผู้ใช้และรหัสผ่าน', { ...toastConfig, icon: '⚠️' })
            return
        }

        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            if (username === 'admin' && password === '1234') {
                toast.success('เข้าสู่ระบบสำเร็จ ยินดีต้อนรับ!', { ...toastConfig, icon: '✅' })
                navigate('/admin')
            } else {
                toast.error('ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง', { ...toastConfig, icon: '🔐' })
            }
        }, 800)
    }

    return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light">
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar
                newestOnTop
                closeOnClick
                pauseOnHover
                draggable
            />

            <div className="card border-0 shadow rounded-4 p-5" style={{ width: '100%', maxWidth: 460 }}>

                {/* Logo */}
                <div className="text-center mb-4">
                    <div
                        className="bg-danger bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                        style={{ width: 120, height: 120 }}
                    >
                        <img src="./logo.png" alt="" style={{ width: 80, height: 80 }} />
                    </div>
                    <h4 className="fw-bold mb-1">ชาบูเจ๊จันทร์</h4>
                    <p className="text-muted small mb-0">เข้าสู่ระบบสำหรับแอดมิน / เจ้าของร้าน</p>
                </div>

                <hr className="mb-4" />

                {/* Username */}
                <div className="mb-3">
                    <label className="form-label fw-semibold small">ชื่อผู้ใช้</label>
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0 text-muted">
                            <i className="bi bi-person" />
                        </span>
                        <input
                            type="text"
                            className="form-control border-start-0 ps-0"
                            placeholder="กรอกชื่อผู้ใช้"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label className="form-label fw-semibold small">รหัสผ่าน</label>
                    <div className="input-group">
                        <span className="input-group-text bg-white border-end-0 text-muted">
                            <i className="bi bi-lock" />
                        </span>
                        <input
                            type="password"
                            className="form-control border-start-0 ps-0"
                            placeholder="กรอกรหัสผ่าน"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSubmit(e)}
                        />
                    </div>
                </div>

                {/* Submit */}
                <button
                    onClick={handleSubmit}
                    className="btn btn-danger w-100 py-2 fw-semibold rounded-3"
                    disabled={loading}
                >
                    {loading
                        ? <><span className="spinner-border spinner-border-sm me-2" />กำลังเข้าสู่ระบบ...</>
                        : 'เข้าสู่ระบบ'
                    }
                </button>

                <p className="text-center text-muted small mt-3 mb-0">
                    Demo: ใช้ <span className="fw-semibold text-dark">admin</span> / <span className="fw-semibold text-dark">1234</span>
                </p>

            </div>
        </div>
    )
}

export default Login