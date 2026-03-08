import React from 'react';

const StatCard = ({ title, total, unit, footer, iconClass, iconBg, iconColor }) => {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100">
      <div className="card-body p-3 d-flex justify-content-between align-items-start">
        <div>
          <p className="text-secondary mb-1" style={{ fontSize: '0.85rem' }}>{title}</p>  
          <h3 className="fw-bold mb-1">
            {total} <span style={{ fontSize: '1.1rem' }}>{unit}</span>
          </h3> 
          <small className="text-muted" style={{ fontSize: '0.75rem' }}>{footer}</small>
        </div>
        <div 
          className={`rounded-3 d-flex align-items-center justify-content-center ${iconBg}`}
          style={{ width: '42px', height: '42px' }}
        >
          <i className={`bi ${iconClass} fs-5 ${iconColor}`}></i>
        </div>
      </div>
    </div>
  );
};

export default StatCard;