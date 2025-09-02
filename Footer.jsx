
import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container d-md-flex justify-content-between align-items-center">
        <div>
          <strong>TrendHive</strong>
          <div className="small text-muted">© {new Date().getFullYear()} TrendHive — All rights reserved.</div>
        </div>
        <div className="mt-2 mt-md-0 small">
          <a className="text-white text-decoration-none me-3" href="#">Privacy</a>
          <a className="text-white text-decoration-none" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

