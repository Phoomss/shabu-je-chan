import React from 'react';
import { UtensilsCrossed, ShoppingCart, Clock } from 'lucide-react';
import { NavLink, useParams } from 'react-router';
import { useCart } from '../../../contexts/CartContext';

const TabBar = () => {
  // ดึง totalItems มาจาก Context (ตัวเลขรวมจำนวนจานทั้งหมด)
  const { totalItems } = useCart();
  const { tableNumber } = useParams()

  return (
    <div
      className="fixed-bottom w-100 bg-white d-flex justify-content-around align-items-center"
      style={{
        boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.05)',
        padding: '10px 0',
        zIndex: 100,
        fontFamily: '"Kanit", sans-serif',
        borderTop: '1px solid #eee'
      }}
    >
      {/* ปุ่มเมนู */}
      <NavLink
        to={`/order/${tableNumber}`}
        className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
        style={({ isActive }) => ({
          color: isActive ? '#c82333' : '#666666',
          fontSize: '12px',
          flex: 1
        })}
      >
        <UtensilsCrossed size={20} />
        <p className="m-0 mt-1">เมนู</p>
      </NavLink>

      {/* ปุ่มตะกร้า + Badge */}
      <NavLink
        to={`/cart/${tableNumber}`}
        className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
        style={({ isActive }) => ({
          color: isActive ? '#c82333' : '#666666',
          fontSize: '12px',
          flex: 1
        })}
      >
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ShoppingCart size={20} />

          {/* แสดง Badge เฉพาะเมื่อมีของในตะกร้าเท่านั้น */}
          {totalItems > 0 && (
            <span style={{
              position: 'absolute',
              top: '-8px',
              right: '-22px',
              backgroundColor: 'hsl(48 96% 50%)',
              color: 'black',
              borderRadius: '50%',
              minWidth: '18px',
              height: '18px',
              padding: '0 4px',
              fontSize: '10px',
              fontWeight: 'bold',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
            }}>
              {totalItems > 99 ? '99+' : totalItems}
            </span>
          )}
        </div>
        <p className="m-0 mt-1">ตะกร้า</p>
      </NavLink>

      {/* ปุ่มเวลา */}
      <NavLink
        to={`/time/${tableNumber}`}
        className="text-decoration-none d-flex flex-column align-items-center justify-content-center"
        style={({ isActive }) => ({
          color: isActive ? '#c82333' : '#666666',
          fontSize: '12px',
          flex: 1
        })}
      >
        <Clock size={20} />
        <p className="m-0 mt-1">เวลา</p>
      </NavLink>
    </div>
  )
}

export default TabBar;