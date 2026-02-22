import React, { useState } from 'react';
import Tier from '../../components/shared/CustomerMenu/Tier'
import SearchMenu from '../../components/shared/CustomerMenu/SearchMenu'

const CustomerMenu = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ทั้งหมด');
  return (
    <>
      <Tier/>
      <div className="customer-menu-page">
      <SearchMenu 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        activeCategory={activeCategory} 
        setActiveCategory={setActiveCategory} 
      />
      </div>
    </>
  )
}

export default CustomerMenu
