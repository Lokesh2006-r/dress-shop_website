import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductDetail from "./ProductDetail";


import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Products from './Products'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'
import Cart from './Cart'

function App() {
  const [cartItems, setCartItems] = useState([])
  const [showCart, setShowCart] = useState(false)  // cart visibility state

  function addToCart(product) {
    setCartItems(prev => {
      const found = prev.find(p => p.id === product.id)
      if (found) {
        return prev.map(p =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        )
      }
      return [...prev, { ...product, qty: 1 }]
    })
  }

  function removeFromCart(id) {
    setCartItems(prev => prev.filter(p => p.id !== id))
  }

  return (
    <div>
      <Header
        cartCount={cartItems.reduce((s, p) => s + p.qty, 0)}
        onCartClick={() => setShowCart(true)} // open cart
      />

      <Hero />
      <main className="container my-5">
        <Products addToCart={addToCart} />
        <About />
        <Contact />
      </main>

      <Footer />

      {/* Overlay (click to close) */}
      {showCart && (
        <div
          className="overlay"
          onClick={() => setShowCart(false)}
        />
      )}

      {/* Cart Sidebar */}
      <Cart
        items={cartItems}
        removeFromCart={removeFromCart}
        visible={showCart}
        onClose={() => setShowCart(false)}
      />
    </div>
  )
}

export default App
