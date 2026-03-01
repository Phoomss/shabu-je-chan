import React from 'react';
import { useCart } from '../../contexts/CartContext';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
    const { cartItems, addToCart, removeFromCart, clearCart, cartTotal, totalItems } = useCart();
    const navigate = useNavigate();

    // ฟังก์ชันเมื่อกดยืนยันการสั่งซื้อ
    const handleConfirmOrder = () => {
        if (cartItems.length === 0) return;

        // จำลองการส่งข้อมูลไปที่ครัว
        console.log("ยืนยันรายการสั่งซื้อ:", cartItems);

        alert("ส่งรายการอาหารไปที่ครัวเรียบร้อยแล้ว! กรุณารออาหารสักครู่ค่ะ");

        // ล้างตะกร้าหลังจากสั่งเสร็จ
        clearCart();

        // สั่งเสร็จแล้วอาจจะพาไปหน้า 'เวลา' เพื่อดูว่าเหลือเวลาทานอีกกี่นาที
        navigate('/time');
    };

    return (
        <div
            className="cart-page"
            style={{
                backgroundColor: '#f8f9fa',
                minHeight: '100vh',
                paddingBottom: '100px', // เว้นที่ไว้ให้ปุ่มกดยืนยันด้านล่าง
                fontFamily: '"Kanit", sans-serif'
            }}
        >
            {/* ส่วนหัวหน้าจอ */}
            <div className="p-3 bg-white shadow-sm sticky-top">
                <h1 className="m-0 text-center" style={{ fontSize: '20px', fontWeight: 'bold', color: '#333' }}>
                    รายการอาหารที่เลือก
                </h1>
            </div>

            <div className="p-3">
                {cartItems.length === 0 ? (
                    /* --- กรณีตะกร้าว่างเปล่า --- */
                    <div className="text-center py-5 mt-5">
                        <ShoppingBag size={80} className="text-muted mb-3" style={{ opacity: 0.3 }} />
                        <h5 className="text-muted">ยังไม่ได้เลือกเมนูเลยค่ะ</h5>
                        <p className="text-muted small">ลองกลับไปดูเมนู "วากิวจันทร์กระจ่าง" หรือเมนูอื่นๆ ดูนะคะ</p>
                        <button
                            onClick={() => navigate('/menu')}
                            className="btn btn-outline-danger mt-3 px-4"
                            style={{ borderRadius: '25px' }}
                        >
                            กลับไปเลือกเมนู
                        </button>
                    </div>
                ) : (
                    /* --- รายการอาหารในตะกร้า --- */
                    <>
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">ทั้งหมด {totalItems} ถาด/รายการ</span>
                            <button
                                onClick={clearCart}
                                className="btn btn-sm text-danger d-flex align-items-center gap-1"
                                style={{ fontSize: '14px' }}
                            >
                                <Trash2 size={16} /> ล้างทั้งหมด
                            </button>
                        </div>

                        {cartItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white p-3 mb-3 rounded-4 shadow-sm d-flex justify-content-between align-items-center border-0"
                            >
                                <div style={{ flex: 1 }}>
                                    <h5 className="mb-1" style={{ fontSize: '16px', fontWeight: '500' }}>{item.name}</h5>
                                    <p className="m-0 text-danger fw-bold" style={{ fontSize: '14px' }}>
                                        {item.price && item.price > 0 ? `${item.price}.-` : 'รวมในบุฟเฟต์'}
                                    </p>
                                </div>

                                {/* ตัวปรับจำนวนอาหาร */}
                                <div className="d-flex align-items-center gap-3">
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="btn btn-sm btn-light rounded-circle p-0 d-flex align-items-center justify-content-center border"
                                        style={{ width: '32px', height: '32px' }}
                                    >
                                        <Minus size={18} />
                                    </button>

                                    <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 'bold', fontSize: '16px' }}>
                                        {item.quantity}
                                    </span>

                                    <button
                                        onClick={() => addToCart(item)}
                                        className="btn btn-sm btn-danger rounded-circle p-0 d-flex align-items-center justify-content-center"
                                        style={{ width: '32px', height: '32px' }}
                                    >
                                        <Plus size={18} />
                                    </button>
                                </div>
                            </div>
                        ))}

                        {/* ส่วนสรุปยอดและปุ่มสั่งซื้อ (Fixed Bottom) */}
                        <div
                            className="fixed-bottom bg-white p-3 border-top shadow-lg"
                            style={{ zIndex: 1050, marginBottom: '60px' }} // ให้อยู่เหนือ Footer หลัก
                        >
                            <div className="d-flex justify-content-between align-items-center mb-3 px-1">
                                <div>
                                    <span className="text-muted d-block small">ราคารวมทั้งตะกร้า</span>
                                    <span className="fw-bold text-danger" style={{ fontSize: '22px' }}>
                                        {cartTotal > 0 ? `${cartTotal.toLocaleString()}.-` : 'รวมในบุฟเฟต์แล้ว'}
                                    </span>
                                </div>
                                <div className="text-end">
                                    <span className="text-muted small">จำนวนถาดทั้งหมด</span>
                                    <h4 className="m-0 fw-bold">{totalItems}</h4>
                                </div>
                            </div>

                            <button
                                onClick={handleConfirmOrder}
                                className="btn btn-danger w-100 py-3 shadow-sm d-flex align-items-center justify-content-center gap-2"
                                style={{ borderRadius: '15px', fontSize: '18px', fontWeight: 'bold' }}
                            >
                                ยืนยันการสั่งอาหาร ({totalItems} รายการ)
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default CartPage;