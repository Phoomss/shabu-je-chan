import React from 'react';
import { Search } from 'lucide-react';
import './SearchMenu.css'; // เดี๋ยวเราสร้างไฟล์นี้ในขั้นตอนต่อไป

const SearchMenu = ({ searchTerm, setSearchTerm, activeCategory, setActiveCategory }) => {
    const categories = ['ทั้งหมด', 'ชุดซิกเนเจอร์', 'เนื้อพรีเมียม', 'หมูนุ่ม', 'อาหารทะเล', 'ของว่าง', 'ซุป', 'น้ำจิ้ม', 'เครื่องดื่ม', 'ของหวาน'];

    return (
        <div className="search-menu-container">

            {/* 1. ส่วนค้นหา */}
            <div className="search-input-wrapper">
                <Search className="search-icon" />
                <input
                    type="text"
                    placeholder="ค้นหาเมนูอร่อย..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {/* 2. ส่วนปุ่มหมวดหมู่ */}
            <div className="category-scroll-container">
                {categories.map((category, index) => (
                    <button
                        key={index}
                        className={`category-btn ${activeCategory === category ? 'active' : ''}`}
                        onClick={() => setActiveCategory(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

        </div>
    );
}

export default SearchMenu;