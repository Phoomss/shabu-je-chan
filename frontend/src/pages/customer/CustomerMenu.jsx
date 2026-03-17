import React, { useState, useMemo } from 'react';
import Tier from '../../components/shared/CustomerMenu/Tier';
import SearchMenu from '../../components/shared/CustomerMenu/SearchMenu';
import { useCart } from '../../contexts/CartContext';

import MenuCard from '../../components/cards/CustomerMenu/MenuCard';

// 1. นำเข้าข้อมูลจากทั้ง 3 ไฟล์
import menuDataJson from '../../data/restaurantMenu.json';
import hotDealsJson from '../../data/restaurantHotDeals.json';
import setMenuJson from '../../data/restauranSetMenu.json';

const CustomerMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');
  const { addToCart } = useCart();

  // 2. รวมข้อมูลและจัดหมวดหมู่ด้วย useMemo
  const allMenuItems = useMemo(() => {
    const categoryMap = {
      // จาก restaurantHotDeals.json
      hotDeals: 'โปรโมชั่นเด็ด',
      // จาก restauranSetMenu.json
      signatureSets: 'ชุดเซตสุดคุ้ม',
      // จาก restaurantMenu.json
      premiumBeef: 'เนื้อพรีเมียม',
      porkSelection: 'หมูนุ่ม',
      seafood: 'อาหารทะเล',
      appetizers: 'ของว่าง',
      soups: 'ซุป',
      dips: 'น้ำจิ้ม',
      drinks: 'เครื่องดื่ม',
      desserts: 'ของหวาน'
    };

    let flatList = [];

    // ฟังก์ชันช่วยในการดึงข้อมูลจาก JSON ก้อนต่างๆ
    const processData = (jsonSource) => {
      for (const [key, items] of Object.entries(jsonSource.data)) {
        const thaiCategoryName = categoryMap[key] || 'อื่นๆ';
        const itemsWithCategory = items.map(item => ({
          ...item,
          categoryName: thaiCategoryName,
          // เพิ่ม flag เพื่อระบุประเภทข้อมูล (เผื่อใช้แยก Logic ใน MenuCard)
          sourceType: key === 'hotDeals' ? 'deal' : (key === 'signatureSets' ? 'set' : 'menu')
        }));
        flatList = [...flatList, ...itemsWithCategory];
      }
    };

    // เรียกใช้กับทั้ง 3 แหล่งข้อมูล
    processData(hotDealsJson);
    processData(setMenuJson);
    processData(menuDataJson);

    return flatList;
  }, []);

  // 3. กรองข้อมูลตามหมวดหมู่, คำค้นหา และสถานะการขาย (isAvailable)
  const filteredMenu = allMenuItems.filter((item) => {
    const matchCategory = activeCategory === 'ทั้งหมด' || item.categoryName === activeCategory;
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        (item.description && item.description.toLowerCase().includes(searchTerm.toLowerCase()));
    
    // แสดงเฉพาะรายการที่พร้อมขาย (Optional: ถ้าต้องการให้แสดงตัวที่หมดแต่กดไม่ได้ ให้ลบเงื่อนไขนี้)
    // const matchAvailable = item.isAvailable === true;

    return matchCategory && matchSearch;
  });

  return (
    <>
      <Tier />
      <div 
        className="customer-menu-page" 
        style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: '80px', fontFamily: '"Kanit", sans-serif' }} 
      >
        <SearchMenu 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        <div className="p-3">
          {/* ส่วนแสดงจำนวนรายการที่พบ */}
          <div className="mb-3 ps-1" style={{ fontSize: '12px', color: '#6c757d' }}>
            พบทั้งหมด {filteredMenu.length} รายการ
          </div>

          {filteredMenu.length > 0 ? (
            <div className="row g-3"> 
              {filteredMenu.map((item) => (
                <div key={item.id} className="col-12 col-md-6 col-lg-4">
                  <MenuCard 
                    item={item} 
                    categoryName={item.categoryName} 
                    onAddToCart={item.isAvailable ? addToCart : null} // ถ้าของหมดจะกดเพิ่มไม่ได้
                  />
                </div>
              ))}
            </div>
          ) : (
            <div 
              className="text-center text-muted mt-5" 
              style={{ fontFamily: '"Kanit", sans-serif', fontSize: '16px' }}
            >
              <i className="bi bi-search mb-2" style={{ fontSize: '2rem' }}></i>
              <br />
              ไม่พบเมนูหรือโปรโมชั่นที่ค้นหา
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default CustomerMenu;