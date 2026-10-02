"use client";
import { useState } from "react";

const products = [
  { id: 1, name: "Sneakers", price: 25000 },
  { id: 2, name: "Backpack", price: 18000 },
  { id: 3, name: "Wrist Watch", price: 12000 },
];

export default function Home() {
  const [cart, setCart] = useState([]);
  const total = cart.reduce((sum, p) => sum + p.price, 0);

  return (
    <main style={{ maxWidth: 500, margin: "0 auto" }}>
      <h1>My Shop</h1>
      {products.map((p) => (
        <div key={p.id} style={{ border: "1px solid #ddd", borderRadius: 8, padding: 12, marginBottom: 10 }}>
          <h3>{p.name}</h3>
          <p>₦{p.price.toLocaleString()}</p>
          <button onClick={() => setCart([...cart, p])}>Add to cart</button>
        </div>
      ))}
      <h2>Cart ({cart.length})</h2>
      {cart.map((p, i) => (
        <p key={i}>{p.name} - ₦{p.price.toLocaleString()}</p>
      ))}
      <h3>Total: ₦{total.toLocaleString()}</h3>
    </main>
  );
}
