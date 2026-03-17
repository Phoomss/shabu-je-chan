import React, { useState, useEffect } from 'react';
import { Clock, Loader2, Clock3 } from 'lucide-react';
import { useLocation } from 'react-router';

const TimePage = () => {
    // 105 นาที = 6300 วินาที
    const TOTAL_TIME = 6300; 
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const location = useLocation();
    
    // --- จุดที่แก้ไข: ย้าย Logic มารวมตอนตั้งค่าเริ่มต้น (Lazy Initialization) ---
const [orders] = useState(() => {        // 1. ดึงข้อมูลเก่าจาก LocalStorage
        const savedOrders = localStorage.getItem('shabuJeChanOrders');
        let currentOrders = savedOrders     ? JSON.parse(savedOrders) : [
            {
                id: 'ORD-MOCK-1',
                timestamp: '15:32',
                status: 'preparing', 
                items: [
                    { id: 'p1', name: 'คุโรบูตะหน้ามน', quantity: 2, price: null },
                    { id: 'p2', name: 'สามชั้นชั้นเลิศ', quantity: 1, price: null },
                    { id: 'p3', name: 'ลูกชิ้นปลาภูเก็ต', quantity: 1, price: null }
                ]
            }
        ];

        // 2. ถ้ารับออเดอร์ใหม่มาจาก CartPage (ผ่าน location.state)
        if (location.state && location.state.newOrder) {
            const newOrder = location.state.newOrder;
            
            // เช็คว่ายังไม่มีออเดอร์นี้ (ป้องกันการแอดซ้ำ)
            if (!currentOrders.some(o => o.id === newOrder.id)) {
                currentOrders = [...currentOrders, newOrder];
                // บันทึกลง LocalStorage ทันที
                localStorage.setItem('shabuJeChanOrders', JSON.stringify(currentOrders));
            }
        }

        // คืนค่ากลับไปเป็น State เริ่มต้น (ทำแค่ครั้งเดียวตอนโหลดหน้า)
        return currentOrders;
    });

    // --- เคลียร์ location.state ทิ้ง เพื่อป้องกันการแอดซ้ำเวลากดปุ่ม Refresh หน้าเว็บ ---
    useEffect(() => {
        if (location.state && location.state.newOrder) {
            window.history.replaceState({}, document.title);
        }
    }, [location.state]); // ไม่มีการใช้ setOrders ใน useEffect อีกต่อไป!


    // ระบบนับถอยหลัง
    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    // แปลงเวลาให้เป็น นาที:วินาที (เช่น 74:50)
    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    };

    // คำนวณเปอร์เซ็นต์ของเวลาที่ผ่านไป
const progressPercent = (timeLeft / TOTAL_TIME) * 100;
    // ฟังก์ชันสำหรับแสดง Badge สถานะ
    const renderStatusBadge = (status) => {
        switch(status) {
            case 'preparing':
                return (
                    <div style={{ backgroundColor: '#FCE8E8', color: '#dc3545', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Loader2 size={14} className="spinner-border-sm" style={{ animation: 'spin 2s linear infinite' }} /> กำลังเตรียม
                    </div>
                );
            case 'pending':
                return (
                    <div style={{ backgroundColor: '#FFF4CE', color: '#D4A017', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock3 size={14} /> รอรับออเดอร์
                    </div>
                );
            case 'served':
                return (
                    <div style={{ backgroundColor: '#E8F5E9', color: '#28A745', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: '500' }}>
                        เสิร์ฟแล้ว
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div
            className="time-page"
            style={{ backgroundColor: '#ffffff', minHeight: '100vh', paddingBottom: '120px', fontFamily: '"Kanit", sans-serif' }}
        >
            <div className="p-3">
                {/* 1. การ์ดเวลา (Timer Card) */}
                <div 
                    className="text-center rounded-4 p-4 mb-4 shadow-sm"
                    style={{ backgroundColor: '#FDF8F8', border: '1px solid #faecec' }}
                >
                    <div className="d-flex justify-content-center align-items-center mb-2">
                        <div className="bg-danger rounded-circle d-flex justify-content-center align-items-center" style={{ width: '40px', height: '40px' }}>
                            <Clock color="white" size={24} />
                        </div>
                    </div>
                    <h6 className="text-muted fw-bold mb-1" style={{ fontSize: '14px' }}>เวลาที่เหลือ</h6>
                    <h1 className="fw-bold text-danger m-0 mb-2" style={{ fontSize: '64px', letterSpacing: '1px' }}>
                        {formatTime(timeLeft)}
                    </h1>
                    <p className="text-muted mb-3" style={{ fontSize: '14px' }}>ระยะเวลาบุฟเฟต์ 105 นาที</p>
                    
                    {/* Progress Bar */}
                    <div className="progress" style={{ height: '8px', borderRadius: '10px', backgroundColor: '#F0F0F0' }}>
                        <div 
                            className="progress-bar bg-danger" 
                            role="progressbar" 
                            style={{ width: `${progressPercent}%`, borderRadius: '10px' }} 
                            aria-valuenow={progressPercent} 
                            aria-valuemin="0" 
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>

                {/* 2. สถานะรายการสั่ง (Order Status Section) */}
                <div className="mb-3">
                    <h5 className="fw-bold m-0" style={{ fontSize: '18px' }}>สถานะรายการสั่ง</h5>
                </div>

                {/* แสดงรายการ Order จากใหม่ไปเก่า (Reverse) */}
                {[...orders].reverse().map((order) => (
                    <div key={order.id} className="card border p-3 mb-3 rounded-4 shadow-sm" style={{ borderColor: '#EAEAEA' }}>
                        {/* Header ของแต่ละออเดอร์ */}
                        <div className="d-flex justify-content-between align-items-center mb-3 pb-2 border-bottom">
                            <span className="text-muted" style={{ fontSize: '13px' }}>{order.timestamp}</span>
                            {renderStatusBadge(order.status)}
                        </div>

                        {/* รายการอาหารในออเดอร์ */}
                        <div>
                            {order.items.map((item, index) => (
                                <div key={index} className="d-flex justify-content-between align-items-center mb-2">
                                    <div style={{ fontSize: '15px' }}>
                                        {item.name} <span className="text-muted mx-1">x{item.quantity}</span>
                                    </div>
                                    <div className="text-muted" style={{ fontSize: '14px' }}>
                                        {item.price ? `${(item.price * item.quantity).toLocaleString()} .-` : 'NaN .-'}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            
            {/* CSS สำหรับ Animation หมุนของ Loader */}
            <style>
                {`
                    @keyframes spin { 100% { transform: rotate(360deg); } }
                `}
            </style>
        </div>
    );
};

export default TimePage;