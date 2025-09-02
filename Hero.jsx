
import React from 'react'

export default function Hero() {
  return (
    <header className="bg-light py-5 hero">
      <div className="container d-flex flex-column flex-md-row align-items-center gap-4">
        <div className="flex-fill">
          <h1 className="display-6 fw-bold">Trending Outfits & Accessories</h1>
          <p className="lead text-muted">Curated collections for Men, Women, and Kids — latest styles, top quality.</p>
          <a href="#products" className="btn btn-primary btn-lg">Shop Collections</a>
        </div>
        <div className="flex-fill text-center">
          <img src="./images/background1.jpg" alt="hero" className="img-fluid rounded shadow" />
        </div>
      </div>
    </header>
  )
}