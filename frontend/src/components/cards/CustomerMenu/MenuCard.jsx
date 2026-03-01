import React from 'react';
import { Lock, Plus } from 'lucide-react';

// 1. เพิ่ม onAddToCart เข้าไปใน Props เพื่อรับฟังก์ชันเพิ่มของเข้าตะกร้า
const MenuCard = ({ item, categoryName, onAddToCart }) => {
    const isAvailable = item.isAvailable;

    return (
        <div 
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
                        src={item.image || 'https://via.placeholder.com/150'} // เพิ่ม Fallback image เผื่อรูปเสีย
                        alt={item.name} 
                        className="w-100 h-100 object-fit-cover rounded-3" 
                        style={{ opacity: isAvailable ? 1 : 0.6 }} 
                    />
                    
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

                    <p 
                        className="m-0 text-muted" 
                        style={{ 
                            fontSize: '12px', 
                            display: '-webkit-box', 
                            WebkitLineClamp: 2, 
                            WebkitBoxOrient: 'vertical', 
                            overflow: 'hidden' 
                        }}
                    >
                        {item.description || 'ไม่มีคำอธิบาย'}
                    </p>
                    
                    <div className="mt-2 d-flex justify-content-between align-items-end">
                        <span 
                            style={{ 
                                fontSize: '12px', 
                                color: isAvailable ? '#cc0000' : '#aaa', 
                                fontWeight: isAvailable ? '500' : 'normal' 
                            }}
                        >
                            {/* ปรับให้แสดงราคาจริงถ้ามีใน JSON หรือแสดงข้อความบุฟเฟ่ต์ */}
                            {isAvailable 
                                ? (item.price && item.price > 0 ? `${item.price}.-` : 'รวมในบุฟเฟ่ต์') 
                                : 'Premium, Luxury ขึ้นไป'
                            }
                        </span>
                        
                        {isAvailable && (
                            <button 
                                className="btn rounded-circle p-0 d-flex justify-content-center align-items-center border-0" 
                                style={{ backgroundColor: '#cc0000', color: 'white', width: '26px', height: '26px' }}
                                // 2. เปลี่ยนจาก alert เป็นการเรียกใช้ฟังก์ชันเพิ่มของเข้าตะกร้าจริงๆ
                                onClick={() => onAddToCart(item)}
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