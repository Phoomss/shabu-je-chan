/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useMemo } from 'react';

// 1. สร้าง Context สำหรับตะกร้าสินค้า
const CartContext = createContext();

// 2. Provider Component สำหรับหุ้มแอปพลิเคชัน
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // --- ฟังก์ชันเพิ่มสินค้าเข้าตะกร้า ---
    const addToCart = (product) => {
        setCartItems((prev) => {
            // ตรวจสอบว่ามีสินค้านี้ในตะกร้าหรือยัง (เช็คจาก id)
            const existingItem = prev.find((item) => item.id === product.id);
            
            if (existingItem) {
                // ถ้ามีแล้ว ให้บวกจำนวน (quantity) เพิ่มขึ้น 1
                return prev.map((item) =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            // ถ้ายังไม่มี ให้เพิ่มสินค้าใหม่เข้าไปและตั้งค่าจำนวนเริ่มต้นเป็น 1
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    // --- ฟังก์ชันลดจำนวนหรือลบสินค้าออกจากตะกร้า ---
    const removeFromCart = (productId) => {
        setCartItems((prev) => {
            const targetItem = prev.find((item) => item.id === productId);
            
            if (targetItem?.quantity === 1) {
                // ถ้าเหลือแค่ 1 ชิ้นแล้วกดลบ ให้เอาออกจากตะกร้าเลย
                return prev.filter((item) => item.id !== productId);
            }
            // ถ้ามีมากกว่า 1 ชิ้น ให้ลดจำนวนลง 1
            return prev.map((item) =>
                item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
            );
        });
    };

    // --- ฟังก์ชันล้างตะกร้า (ใช้หลังจากกดยืนยันการสั่งซื้อ) ---
    const clearCart = () => setCartItems([]);

    // --- คำนวณราคาทั้งหมด (Handle กรณีไม่มีราคาใน JSON) ---
    const cartTotal = useMemo(() => {
        return cartItems.reduce((total, item) => {
            // หากไม่มีราคา (item.price) ให้ถือว่าเป็น 0 (รวมในบุฟเฟต์)
            const price = item.price || 0;
            return total + (price * item.quantity);
        }, 0);
    }, [cartItems]);

    // --- คำนวณจำนวนจาน/ถาด ทั้งหมดที่สั่ง (สำหรับแสดงบน Badge) ---
    const totalItems = useMemo(() => {
        return cartItems.reduce((sum, item) => sum + item.quantity, 0);
    }, [cartItems]);

    // --- รวมค่าทั้งหมดที่จะส่งออกไปให้ Component อื่นใช้ ---
    const value = useMemo(() => ({
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        cartTotal,
        totalItems
    }), [cartItems, cartTotal, totalItems]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
};

// 3. Custom Hook สำหรับเรียกใช้ข้อมูลตะกร้าได้ง่ายๆ
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};