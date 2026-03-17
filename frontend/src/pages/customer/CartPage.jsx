import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag, Send, CircleCheck } from 'lucide-react';
import { useNavigate } from 'react-router';

const CartPage = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, cartTotal, totalItems } = useCart();
    const navigate = useNavigate();

    // --- State สำหรับควบคุม Custom Alert ---
    const [showAlert, setShowAlert] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    // ฟังก์ชันจัดการการยืนยันการสั่งซื้อ (รองรับ Backend ในอนาคต)
    const handleConfirmOrder = async () => {
        if (cartItems.length === 0) return;

        // 1. สร้างก้อนข้อมูล (Payload) รูปแบบมาตรฐานสำหรับ Backend
        const newOrderPayload = {
            id: `ORD-${Date.now()}`,
            timestamp: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
            status: 'pending', // สถานะเริ่มต้น
            items: cartItems,
            totalPrice: cartTotal,
            tableNumber: "1" 
        };

        // 2. [เตรียมพร้อมสำหรับ Backend] 
        try {
            /* // โค้ดสำหรับยิง API เมื่อมี Backend
            const response = await fetch('https://your-api.com/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newOrderPayload)
            });
            if (!response.ok) throw new Error('API Error');
            */
            console.log("ข้อมูลที่พร้อมส่งไป Backend/Admin:", newOrderPayload);
        } catch (error) {
            console.error("เกิดข้อผิดพลาด:", error);
            // กรณีอยากให้แสดง Error Alert ก็ทำเพิ่มตรงนี้ได้
        }

        // 3. แสดง Alert แจ้งลูกค้า
        setShowAlert(true);
        setIsClosing(false);

        // 4. ควบคุม Animation และการเปลี่ยนหน้า
        setTimeout(() => {
            setIsClosing(true);

            setTimeout(() => {
                setShowAlert(false);
                clearCart(); // ล้างตะกร้า
                // ส่งข้อมูล Payload ไปหน้า TimePage ทันทีเพื่อให้แสดงผลโดยไม่ต้องรอรีเฟรช
                navigate('/time', { state: { newOrder: newOrderPayload } }); 
            }, 500); // รอจังหวะให้ Alert เลื่อนขึ้นเสร็จ
        }, 2000); // โชว์ Alert ค้างไว้ 2 วินาที
    };

    return (
        <div
            className="cart-page"
            style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                paddingBottom: '120px',
                fontFamily: '"Kanit", sans-serif',
                position: 'relative'
            }}
        >
            {/* --- CSS Animation Block --- */}
            <style>
                {`
                    @keyframes slideDownAni {
                        from { top: -100px; opacity: 0; }
                        to { top: 20px; opacity: 1; }
                    }
                    @keyframes slideUpAni {
                        from { top: 20px; opacity: 1; }
                        to { top: -100px; opacity: 0; }
                    }
                `}
            </style>

            {/* --- Custom Alert Design --- */}
            {showAlert && (
                <div
                    className="position-fixed start-50 translate-middle-x d-flex align-items-center shadow"
                    style={{
                        top: '20px',
                        minWidth: '316px',
                        backgroundColor: 'hsl(107, 48%, 87%)',
                        color: '#008A2E',
                        padding: '15px 30px',
                        borderRadius: '15px',
                        zIndex: 9999,
                        fontSize: '12px',
                        fontFamily: '"Kanit", sans-serif',
                        animation: isClosing ? 'slideUpAni 0.5s ease-in forwards' : 'slideDownAni 0.5s ease-out forwards'
                    }}
                >
                    <CircleCheck size={16} />&nbsp; ส่งรายการอาหารไปที่ครัวเรียบร้อยแล้ว!
                </div>
            )}

            <div className="p-3">
                {cartItems.length === 0 ? (
                    /* --- กรณีตะกร้าว่างเปล่า --- */
                    <div className="text-center py-5 mt-5">
                        <ShoppingBag size={80} className="text-muted mb-3" style={{ opacity: 0.3 }} />
                        <h5 className="text-muted text-[18px] font-semibold">ตะกร้าว่าง</h5>
                        <p className="text-muted small">เลือกเมนูที่ชอบแล้วเพิ่มลงตะกร้าได้เลย</p>
                        <button onClick={() => navigate('/menu')} className="btn btn-outline-danger mt-3 px-4" style={{ borderRadius: '25px' }}>
                            กลับไปเลือกเมนู
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="mb-4 mt-2 d-flex justify-content-between align-items-center">
                            <h4 className="fw-bold m-0" style={{ fontSize: '20px' }}>
                                ตะกร้าของคุณ <span className="text-dark">({totalItems} รายการ)</span>
                            </h4>
                        </div>

                        {/* --- รายการอาหาร --- */}
                        {cartItems.map((item) => (
                            <div 
                                key={item.id} 
                                className="bg-white p-3 mb-3 rounded-4 shadow-sm border-0 position-relative"
                            >
                                {/* ปุ่มลบรายการ (ถังขยะ) */}
                                <button
                                    onClick={() => removeFromCart(item.id)} // หรือเปลี่ยนเป็น deleteItem ถ้ามีใน Context
                                    className="btn p-0 position-absolute"
                                    style={{ 
                                        top: '15px', right: '15px', color: '#dc3545', border: 'none', background: 'none' 
                                    }}
                                >
                                    <Trash2 size={20} />
                                </button>

                                <div className="mb-2">
                                    <h5 className="mb-0 pe-4" style={{ fontSize: '18px', fontWeight: '600' }}>
                                        {item.name}
                                    </h5>
                                    <span className="text-muted" style={{ fontSize: '13px' }}>
                                        {item.price > 0 ? `${item.price.toLocaleString()}.-` : '.-'} / ชิ้น
                                    </span>
                                </div>

                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <button 
                                            onClick={() => removeFromCart(item.id)} 
                                            className="btn btn-light rounded-circle border p-0 d-flex align-items-center justify-content-center" 
                                            style={{ width: '32px', height: '32px' }}
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="mx-3 fw-bold">{item.quantity}</span>
                                        <button 
                                            onClick={() => addToCart(item)} 
                                            className="btn btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center" 
                                            style={{ width: '32px', height: '32px', backgroundColor: '#c82333' }}
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                    <div className="text-danger fw-bold" style={{ fontSize: '18px' }}>
                                        {item.price > 0 ? (item.price * item.quantity).toLocaleString() : 'NaN'} .-
                                    </div>
                                </div>

                                <input
                                    type="text"
                                    placeholder="หมายเหตุ (เช่น ไม่ใส่ผัก)"
                                    className="form-control border-0 mt-3"
                                    style={{ backgroundColor: '#f1f3f5', borderRadius: '10px', fontSize: '13px' }}
                                />
                            </div>
                        ))}

                        {/* --- สรุปยอดรวม --- */}
                        <div className='bg-white shadow-sm p-4 rounded-4'>
                            <div className="p-2 mb-3 d-flex justify-content-between align-items-center">
                                <span className="fw-bold" style={{ fontSize: '18px' }}>รวมทั้งหมด</span>
                                <span className="fw-bold text-danger" style={{ fontSize: '24px' }}>
                                    {cartTotal > 0 ? cartTotal.toLocaleString() : 'NaN'} .-
                                </span>
                            </div>
                            <div className="d-flex justify-content-center">
                                <button
                                    onClick={handleConfirmOrder}
                                    className="btn btn-danger w-100 py-3 d-flex align-items-center justify-content-center gap-2 shadow-sm"
                                    style={{
                                        maxWidth: '500px', // จำกัดความกว้างปุ่มไม่ให้ยาวเกินไปในแนวนอน
                                        borderRadius: '16px',
                                        fontSize: '18px',
                                        fontWeight: '600',
                                        backgroundColor: '#c82333',
                                        border: 'none',
                                        transition: 'transform 0.1s active'
                                    }}
                                >
                                    <Send size={20} /> ยืนยันสั่งอาหาร
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;