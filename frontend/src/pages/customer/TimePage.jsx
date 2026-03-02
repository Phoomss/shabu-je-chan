import React, { useState, useEffect } from 'react';
import { Clock, AlertCircle, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const TimePage = () => {
    const navigate = useNavigate();

    // สมมติเวลาเริ่มต้นคือ 90 นาที (5400 วินาที)
    // ในอนาคตสามารถดึงค่านี้มาจาก Backend หรือ Context ได้
    const [timeLeft, setTimeLeft] = useState(5400);

    useEffect(() => {
        // ระบบนับถอยหลัง
        if (timeLeft <= 0) return;

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // ฟังก์ชันแปลงวินาทีเป็นรูปแบบ HH:MM:SS
    const formatTime = (seconds) => {
        const h = Math.floor(seconds / 3600);
        const m = Math.floor((seconds % 3600) / 60);
        const s = seconds % 60;
        return `${h > 0 ? h + ':' : ''}${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // คำนวณเปอร์เซ็นต์สำหรับ Progress Bar (สมมติเต็ม 90 นาที)
    const percentage = (timeLeft / 5400) * 100;

    return (
        <div
            className="time-page"
            style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                fontFamily: '"Kanit", sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '20px'
            }}
        >
            {/* ส่วนหัว */}
            <div className="text-center mt-4 mb-5">
                <h2 className="fw-bold" style={{ color: '#333' }}>เวลาในการทาน</h2>
                <p className="text-muted">โต๊ะของคุณเริ่มทานเมื่อ 18:30 น.</p>
            </div>

            {/* วงกลมแสดงเวลา */}
            <div
                className="position-relative d-flex justify-content-center align-items-center mb-5"
                style={{
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: `conic-gradient(${timeLeft < 600 ? '#ff3b30' : '#cc0000'} ${percentage}%, #eee 0)`,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                }}
            >
                <div
                    className="bg-white d-flex flex-column justify-content-center align-items-center"
                    style={{
                        width: '220px',
                        height: '220px',
                        borderRadius: '50%'
                    }}
                >
                    <Clock size={32} className="mb-2" style={{ color: timeLeft < 600 ? '#ff3b30' : '#cc0000' }} />
                    <h1
                        className="m-0 fw-bold"
                        style={{
                            fontSize: '48px',
                            color: timeLeft < 600 ? '#ff3b30' : '#333'
                        }}
                    >
                        {formatTime(timeLeft)}
                    </h1>
                    <p className="text-muted m-0">นาทีที่เหลือ</p>
                </div>
            </div>

            {/* การ์ดแจ้งเตือนสถานะ */}
            <div
                className="card border-0 shadow-sm p-4 w-100"
                style={{ borderRadius: '20px', maxWidth: '400px' }}
            >
                {timeLeft > 600 ? (
                    <div className="d-flex align-items-center gap-3 text-success">
                        <CheckCircle2 size={24} />
                        <div>
                            <p className="m-0 fw-bold">ทานได้ยาวๆ เลยค่ะ</p>
                            <small className="text-muted">ยังมีเวลาเหลือเฟือสำหรับการสั่งเพิ่ม</small>
                        </div>
                    </div>
                ) : timeLeft > 0 ? (
                    <div className="d-flex align-items-center gap-3 text-warning">
                        <AlertCircle size={24} />
                        <div>
                            <p className="m-0 fw-bold">ใกล้หมดเวลาแล้วนะคะ</p>
                            <small className="text-muted">เร่งมือหน่อยนะคะ เหลือไม่ถึง 10 นาทีแล้ว</small>
                        </div>
                    </div>
                ) : (
                    <div className="d-flex align-items-center gap-3 text-danger">
                        <AlertCircle size={24} />
                        <div>
                            <p className="m-0 fw-bold">หมดเวลาแล้วค่ะ</p>
                            <small className="text-muted">ขอบคุณที่มาใช้บริการร้านเจ๊จันทร์นะคะ</small>
                        </div>
                    </div>
                )}
            </div>

            {/* ปุ่มกดกลับไปสั่งอาหาร */}
            <button
                onClick={() => navigate('/menu')}
                className="btn btn-outline-dark mt-auto mb-5 px-5 py-2"
                style={{ borderRadius: '25px', fontWeight: 'bold' }}
            >
                กลับไปหน้าเมนู
            </button>
        </div>
    );
};

export default TimePage;