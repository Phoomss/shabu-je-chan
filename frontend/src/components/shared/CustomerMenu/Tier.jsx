import React from 'react';

const Tier = ({ currentTier = 'Standard' }) => {
  
  const tierData = {
    Standard: { name: 'Standard', price: '499' },
    Premium: { name: 'Premium', price: '799' },
    Luxury: { name: 'Luxury', price: '1,299' }
  };

  const activeTier = tierData[currentTier] || tierData.Standard;

  return (
    <div 
      className="d-flex flex-column align-items-center justify-content-center"
      style={{ 
        fontFamily: '"Kanit", sans-serif', 
        fontSize: '12px' 
      }}
    >
      <div 
        className="p-2" 
        style={{ color: '#666666' }}
      >
        <span style={{ color: 'hsl(0 80% 44%)', fontWeight: 'bold' }}>
          {activeTier.name}
        </span> 
        
        &nbsp;| {activeTier.price}.-/ท่าน
      </div>
    </div>
  );
}

export default Tier;