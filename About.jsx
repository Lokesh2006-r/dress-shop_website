
import React from 'react'

export default function About() {
  return (
    <section id="about" className="my-5">
      <div className="row align-items-center">
        <div className="col-md-6">
          <h3>About TrendHive</h3>
          <p className="text-muted">We bring the latest fashion trends to your doorstep — for men, women, and kids. Quality materials, affordable prices, and a user-friendly shopping experience.</p>
          <ul>
            <li>Curated collections</li>
            <li>Fast delivery</li>
            <li>Easy returns</li>
          </ul>
        </div>
        <div className="col-md-6 text-center">
          <img src="./images/delivery.jpg" alt="about" className="img-fluid rounded shadow" />
        </div>
      </div>
    </section>
  )
}
