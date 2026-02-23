import React from 'react';
import { Lock, Plus } from 'lucide-react'; // นำเข้าไอคอนแม่กุญแจ และ เครื่องหมายบวก

// รับค่า item (ข้อมูลอาหาร 1 ชิ้น) และ categoryName (ชื่อหมวดหมู่ภาษาไทย) มาจากตัวแม่
const MenuCard = ({ item, categoryName }) => {
    // เช็คสถานะว่าเมนูนี้สั่งได้ไหม (ตามภาพคือถ้าไม่ได้ จะเป็นแม่กุญแจ)
    const isAvailable = item.isAvailable;

    return (
        <div 
            // ใช้ Bootstrap: พื้นหลังขาว, ไม่มีเส้นขอบ, ขอบมน, มีเงาบางๆ, ระยะห่างด้านล่าง 3
            className="bg-white border-0 rounded-3 shadow-sm mb-3 w-100"
            style={{ overflow: 'hidden' }}
        >
            <div className="d-flex p-2">
                
                {/* --- 1. ส่วนรูปภาพด้านซ้าย --- */}
                <div 
                    className="position-relative flex-shrink-0" 
                    style={{ width: '100px', height: '100px' }}
                >
                    <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-100 h-100 object-fit-cover rounded-3" 
                        style={{ opacity: isAvailable ? 1 : 0.6 }} // ถ้าสั่งไม่ได้ให้รูปจางลง
                    />
                    
                    {/* ถ้าสั่งไม่ได้ (isAvailable = false) ให้แสดง Layer แม่กุญแจทับรูป */}
                    {!isAvailable && (
                        <div 
                            className="position-absolute top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center rounded-3" 
                            style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}
                        >
                            <Lock color="white" size={24} />
                        </div>
                    )}
                </div>

                {/* --- 2. ส่วนข้อมูลด้านขวา --- */}
                <div className="ms-3 d-flex flex-column justify-content-center flex-grow-1">
                    
                    {/* บรรทัดแรก: ชื่ออาหาร + ป้ายหมวดหมู่ */}
                    <div className="d-flex align-items-center mb-1">
                        <h6 className="m-0 fw-bold" style={{ fontSize: '15px', color: '#333' }}>
                            {item.name}
                        </h6>
                        <span 
                            className="ms-2 px-2 py-1 rounded-pill" 
                            style={{ 
                                backgroundColor: '#f8f9fa', 
                                color: '#888', 
                                border: '1px solid #eee', 
                                fontSize: '10px', 
                                whiteSpace: 'nowrap' 
                            }}
                        >
                            {categoryName}
                        </span>
                    </div>

                    {/* บรรทัดสอง: คำอธิบาย */}
                    <p 
                        className="m-0 text-muted" 
                        style={{ 
                            fontSize: '12px', 
                            display: '-webkit-box', 
                            WebkitLineClamp: 2, // ตัดคำถ้าเกิน 2 บรรทัด
                            WebkitBoxOrient: 'vertical', 
                            overflow: 'hidden' 
                        }}
                    >
                        {item.description || 'ไม่มีคำอธิบาย'}
                    </p>
                    
                    {/* บรรทัดสาม: สถานะ/ราคา และ ปุ่มบวก */}
                    <div className="mt-2 d-flex justify-content-between align-items-end">
                        <span 
                            style={{ 
                                fontSize: '12px', 
                                color: isAvailable ? '#cc0000' : '#aaa', // สั่งได้เป็นสีแดง สั่งไม่ได้เป็นสีเทา
                                fontWeight: isAvailable ? '500' : 'normal' 
                            }}
                        >
                            {isAvailable ? 'รวมในบุฟเฟ่ต์' : 'Premium, Luxury ขึ้นไป'}
                        </span>
                        
                        {/* ถ้าสั่งได้ ถึงจะแสดงปุ่ม + สีแดง */}
                        {isAvailable && (
                            <button 
                                className="btn rounded-circle p-0 d-flex justify-content-center align-items-center border-0" 
                                style={{ backgroundColor: '#cc0000', color: 'white', width: '26px', height: '26px' }}
                                onClick={() => alert(`เพิ่ม ${item.name} ลงตะกร้าแล้ว`)}
                            >
                                <Plus size={16} />
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MenuCard;