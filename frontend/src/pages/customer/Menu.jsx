import React, { useState, useMemo } from 'react';
import Tier from '../../components/shared/CustomerMenu/Tier';
import SearchMenu from '../../components/shared/CustomerMenu/SearchMenu';

// 1. นำเข้า MenuCard และไฟล์ JSON
import MenuCard from '../../components/cards/CustomerMenu/MenuCard'; // เช็ค Path ให้ตรงด้วยนะครับ
import menuDataJson from '../../data/restaurantMenu.json'; 

const CustomerMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');

  // 2. แปลงข้อมูล JSON ให้เป็น Array ก้อนเดียว และจับคู่ชื่อหมวดหมู่ภาษาไทย
  // ใช้ useMemo เพื่อให้มันคำนวณแค่ครั้งแรกครั้งเดียว ไม่ต้องทำใหม่ทุกครั้งที่พิมพ์ค้นหา
  const allMenuItems = useMemo(() => {
    const categoryMap = {
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
    for (const [key, items] of Object.entries(menuDataJson.data)) {
      const thaiCategoryName = categoryMap[key] || 'อื่นๆ';
      const itemsWithCategory = items.map(item => ({
        ...item,
        categoryName: thaiCategoryName
      }));
      flatList = [...flatList, ...itemsWithCategory];
    }
    return flatList;
  }, []);

  // 3. กรองข้อมูล (Filter) ตามหมวดหมู่ที่กด และ คำที่พิมพ์ค้นหา
  const filteredMenu = allMenuItems.filter((item) => {
    // เช็คว่าหมวดหมู่ตรงไหม (ถ้าเลือก 'ทั้งหมด' ก็ให้ผ่านเลย)
    const matchCategory = activeCategory === 'ทั้งหมด' || item.categoryName === activeCategory;
    // เช็คว่าชื่อเมนูมีคำที่ค้นหาไหม
    const matchSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchCategory && matchSearch;
  });

  return (
    <>
      <Tier />
      <div 
        className="customer-menu-page" 
        style={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: '80px' }} // เผื่อที่ว่างด้านล่างให้ Footer
      >
        <SearchMenu 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        
        {/* 4. โซนแสดงผล Card รายการอาหาร */}
        <div className="p-3">
          {filteredMenu.length > 0 ? (
            // ถ้ามีข้อมูล ให้เอามา map แสดงเป็น MenuCard ทีละอัน
            filteredMenu.map((item) => (
              <MenuCard 
                key={item.id} 
                item={item} 
                categoryName={item.categoryName} 
              />
            ))
          ) : (
            // ถ้าค้นหาแล้วไม่เจออะไรเลย ให้แสดงข้อความนี้
            <div 
              className="text-center text-muted mt-4" 
              style={{ fontFamily: '"Kanit", sans-serif', fontSize: '14px' }}
            >
              ไม่พบเมนูที่ค้นหา
            </div>
          )}
        </div>

      </div>
    </>
  )
}

export default CustomerMenu;