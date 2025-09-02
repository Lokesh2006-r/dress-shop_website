import { useParams } from "react-router-dom";
import productsData from "./product";

function ProductDetail() {
  const { id } = useParams();
  const product = productsData.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found!</h2>;

  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      {/* Images */}
      <div>
        <img src={product.img} alt={product.title} style={{ width: "400px", borderRadius: "10px" }} />
        {/* Example thumbnails (repeat same image for now) */}
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          {[1,2,3,4].map(n => (
            <img key={n} src={product.img} alt="thumb" style={{ width: "60px", border: "1px solid #ccc" }} />
          ))}
        </div>
      </div>

      {/* Info */}
      <div>
        <h2>{product.title}</h2>
        <p style={{ fontSize: "20px", fontWeight: "bold" }}>₹{product.price}</p>

        {/* Sizes */}
        <div style={{ margin: "20px 0" }}>
          {["S","M","L","XL","XXL"].map(size => (
            <button key={size} style={{ marginRight: "10px", padding: "10px 15px", border: "1px solid #ccc" }}>
              {size}
            </button>
          ))}
        </div>

        {/* Description */}
        <h4>Description</h4>
        <ul>
          <li>Material: 100% Cotton</li>
          <li>Type: T-Shirt</li>
          <li>Sleeves: Short</li>
          <li>Neck: Crew Neck</li>
          <li>Imported</li>
        </ul>

        {/* Add to Cart */}
        <button style={{ marginTop: "20px", padding: "12px 20px", background: "black", color: "white", border: "none", borderRadius: "6px" }}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetail;
