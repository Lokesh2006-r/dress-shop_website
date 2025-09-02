
import React from 'react'

export default function Header({ cartCount, onCartClick }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="#">TrendHive</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navmenu">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item"><a className="nav-link" href="#products">Shop</a></li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-3">
              <button 
                className="btn btn-outline-primary position-relative" 
                onClick={onCartClick}   // <-- trigger parent state
              >
                Cart
                <span className="badge bg-danger rounded-pill position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
