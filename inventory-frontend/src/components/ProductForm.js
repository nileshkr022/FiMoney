import React, { useState } from "react";
import axios from "axios";

export default function ProductForm({ token }) {
  const [fields, setFields] = useState({
    name: "", type: "", sku: "", image_url: "",
    description: "", quantity: "", price: ""
  });
  const [msg, setMsg] = useState("");

  const handleChange = e => setFields({...fields, [e.target.name]: e.target.value});

  const addProduct = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await axios.post("http://localhost:8080/products", {
        ...fields,
        quantity: parseInt(fields.quantity), price: Number(fields.price)
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMsg(`Product added: ${res.data.product_id}`);
    } catch (err) {
      setMsg(err.response?.data?.error || "Error");
    }
  };

  return (
    <form className="space-y-2" onSubmit={addProduct}>
      <h2 className="font-semibold">Add Product</h2>
      <input className="input" name="name" placeholder="Name" value={fields.name} onChange={handleChange} required/>
      <input className="input" name="type" placeholder="Type" value={fields.type} onChange={handleChange} required/>
      <input className="input" name="sku" placeholder="SKU" value={fields.sku} onChange={handleChange} required/>
      <input className="input" name="image_url" placeholder="Image URL" value={fields.image_url} onChange={handleChange} required/>
      <input className="input" name="description" placeholder="Description" value={fields.description} onChange={handleChange} required/>
      <input className="input" name="quantity" placeholder="Quantity" type="number" value={fields.quantity} onChange={handleChange} required/>
      <input className="input" name="price" placeholder="Price" type="number" value={fields.price} onChange={handleChange} required/>
      <button className="btn" type="submit">Add</button>
      {msg && <div className="text-green-600">{msg}</div>}
    </form>
  );
}
