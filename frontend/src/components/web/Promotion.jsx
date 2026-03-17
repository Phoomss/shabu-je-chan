import React from 'react'

const Promotion = ({ name, description, condition, image, discountPercent, isAvailable }) => {
    return (
        <div className="card border-0 shadow-sm rounded-4 overflow-hidden h-100">
            <img
                src={image}
                alt={name}
                className="card-img-top"
                style={{ height: '180px', objectFit: 'cover' }}
                onError={e => { e.target.src = 'https://images.unsplash.com/photo-1553621042-f6e147245754' }}
            />
            <div className="card-body p-3">
                <div className="d-flex justify-content-between align-items-start mb-1">
                    <h6 className="fw-bold mb-0">{name}</h6>
                    {discountPercent && (
                        <span className="badge bg-danger rounded-pill px-2">-{discountPercent}%</span>
                    )}
                </div>
                <p className="text-muted small mb-2">{description}</p>
                {condition && (
                    <span className="badge bg-light text-dark border small fw-normal">{condition}</span>
                )}
                {!isAvailable && (
                    <span className="badge bg-secondary ms-1 small">หมดแล้ว</span>
                )}
            </div>
        </div>
    )
}

export default Promotion