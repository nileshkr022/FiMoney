import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ProductList({ token }) {
  const [products, setProducts] = useState([]);
  const [msg, setMsg] = useState("");
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`http://localhost:8080/products?page=${page}&limit=10`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
    .then(res => setProducts(res.data))
    .catch(e => setMsg(e.response?.data?.error||"Failed to load products"));
  }, [token, page]);

  return (
    <div className="w-full max-w-xl">
      <h2 className="font-semibold mb-2">Products</h2>
      <button onClick={()=>setPage(page-1)} disabled={page<=1} className="btn mr-2">Prev</button>
      <button onClick={()=>setPage(page+1)} className="btn">Next</button>
      {msg && <div className="text-red-500">{msg}</div>}
      <ul className="mt-2">
        {products.map(p => (
          <li key={p._id} className="bg-white p-2 rounded mb-2 shadow">
            <div className="font-bold">{p.name}</div>
            <div>Quantity: {p.quantity}</div>
            <div>Price: {p.price}</div>
            <div>Type: {p.type}</div>
            <div>SKU: {p.sku}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
