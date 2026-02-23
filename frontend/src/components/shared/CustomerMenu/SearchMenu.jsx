import React from 'react';
import { Search } from 'lucide-react';

const SearchMenu = ({ searchTerm, setSearchTerm, activeCategory, setActiveCategory }) => {
    const categories = ['ทั้งหมด', 'ชุดซิกเนเจอร์', 'เนื้อพรีเมียม', 'หมูนุ่ม', 'อาหารทะเล', 'ของว่าง', 'ซุป', 'น้ำจิ้ม', 'เครื่องดื่ม', 'ของหวาน'];

    return (
        <>
            <style>
                {`
                    .custom-scrollbar::-webkit-scrollbar {
                        height: 6px; 
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: transparent; 
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: #dcdcdc; 
                        border-radius: 10px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: #a8a8a8;
                    }
                    .custom-scrollbar {
                        scrollbar-width: thin;
                        scrollbar-color: #dcdcdc transparent;
                    }
                    .custom-search-input:focus {
                        outline: none;
                    }
                `}
            </style>

            <div 
                className="p-3" 
                style={{ backgroundColor: '#f8f9fa' }}
            >
                <div 
                    className="d-flex align-items-center bg-white mb-3" 
                    style={{
                        borderRadius: '8px',
                        padding: '10px 15px',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
                        border: '1px solid #e0e0e0'
                    }}
                >
                    <Search size={20} color="#888" style={{ marginRight: '10px' }} />
                    <input
                        type="text"
                        placeholder="ค้นหาเมนูอร่อย..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="custom-search-input w-100 border-0"
                        style={{
                            fontSize: '16px',
                            fontFamily: '"Kanit", sans-serif',
                            backgroundColor: 'transparent'
                        }}
                    />
                </div>

                <div 
                    className="d-flex w-100 custom-scrollbar"
                    style={{
                        gap: '10px',
                        overflowX: 'auto',
                        paddingBottom: '10px',
                        WebkitOverflowScrolling: 'touch' 
                    }}
                >
                    {categories.map((category, index) => {
                        const isActive = activeCategory === category;
                        
                        return (
                            <button
                                key={index}
                                onClick={() => setActiveCategory(category)}
                                style={{
                                    whiteSpace: 'nowrap',
                                    flexShrink: 0,
                                    padding: '8px 16px',
                                    borderRadius: '20px',
                                    fontSize: '14px',
                                    fontFamily: '"Kanit", sans-serif',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    
                                    backgroundColor: isActive ? '#ff0000' : 'white',
                                    color: isActive ? 'white' : '#555',
                                    border: `1px solid ${isActive ? '#ff0000' : '#ddd'}`
                                }}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>

            </div>
        </>
    );
}

export default SearchMenu;