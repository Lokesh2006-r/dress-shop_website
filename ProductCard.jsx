
import React from 'react'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="card h-100 product-card">
      <img src={product.img} className="card-img-top" alt={product.title} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.title}</h5>
        <p className="text-muted small mb-2">{product.category}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <strong>₹{product.price}</strong>
          <button className="btn btn-sm btn-outline-secondary" onClick={() => onAdd(product)}>Add</button>
        </div>
      </div>
    </div>
  )
}
