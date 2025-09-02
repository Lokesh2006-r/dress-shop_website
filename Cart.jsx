
import React from 'react'

export default function Cart({ items, removeFromCart, visible, onClose }) {
  const total = items.reduce((s, it) => s + it.price * it.qty, 0)

  return (
    <aside 
      id="cart"
      className={`cart-sidebar bg-white shadow-lg border rounded-start position-fixed top-0 end-0 h-100 
        ${visible ? 'show' : ''}`} 
      style={{ width: 350, zIndex: 2000, transition: "transform 0.3s ease" }}
    >
      <div className="d-flex flex-column h-100">
        <div className="p-3 border-bottom bg-primary text-white d-flex justify-content-between align-items-center rounded-top">
          <strong className="fs-5">🛒 Your Cart</strong>
          <button className="btn-close btn-close-white" onClick={onClose}></button>
        </div>
        <div className="flex-grow-1 overflow-auto p-3">
          {items.length === 0 ? (
            <div className="text-center text-muted mt-5">
              <img src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png" alt="Empty cart" style={{ width: 64, opacity: 0.4 }} />
              <div className="mt-2">Your cart is empty</div>
            </div>
          ) : (
            items.map(it => (
              <div key={it.id} className="d-flex align-items-center mb-3 border-bottom pb-2">
                <img src={it.img} alt={it.title} className="rounded me-2" style={{ width: 48, height: 48, objectFit: 'cover' }} />
                <div className="flex-grow-1">
                  <div className="fw-semibold">{it.title}</div>
                  <div className="small text-muted">₹{it.price} x {it.qty}</div>
                </div>
                <button className="btn btn-sm btn-outline-danger ms-2" title="Remove" onClick={() => removeFromCart(it.id)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ))
          )}
        </div>
        <div className="p-3 border-top bg-light">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span className="fw-bold">Total</span>
            <span className="fw-bold text-primary">₹{total}</span>
          </div>
          <button className="btn btn-success w-100" disabled={items.length === 0}>Checkout</button>
        </div>
      </div>
    </aside>
  )
}
