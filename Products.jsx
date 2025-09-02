

//new 21.08.2025


import React, { useState } from "react";
import productsData from "./product";
import "./style.css";   // <-- import css

function Products({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  // Get unique categories
  const categories = ["All", ...new Set(productsData.map((p) => p.category))];

  // Filter by category
  const filteredProducts =
    selectedCategory === "All"
      ? productsData
      : productsData.filter((p) => p.category === selectedCategory);
  return (
    <div style={{ padding: "20px" }}>
      {/* Category Buttons */}
      <div className="category-buttons" style={{ marginBottom: "20px" }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setSelectedSubcategory(null);
            }}
            className={selectedCategory === cat ? "active" : ""}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Subcategory cards */}
{!selectedSubcategory ? (
  <div className="subcategory-container">
    {filteredProducts.map((product) => (
      <div
        key={product.id}
        onClick={() => setSelectedSubcategory(product.subcategory)}
        className="subcategory-card"
      >
        <img src={product.variants[0].img} alt={product.title} />
        <h3>{product.title}</h3>
      </div>
    ))}
  </div>
) : (
  <div>
    <button
      onClick={() => setSelectedSubcategory(null)}
      className="add-to-cart"
      style={{ marginBottom: "15px" }}
    >
      🔙 Back
    </button>

    <div className="variant-container">
      {filteredProducts
        .find((p) => p.subcategory === selectedSubcategory)
        ?.variants.map((variant) => (
          <div key={variant.id} className="variant-card">
            <img src={variant.img} alt={variant.name} />
            <h4>{variant.name}</h4>
            <p>₹{variant.price}</p>
            <button onClick={() => addToCart(variant)} className="add-to-cart">
              Add to Cart
            </button>
          </div>
        ))}
    </div>
  </div>
)}
    </div>
  );
}
export default Products;