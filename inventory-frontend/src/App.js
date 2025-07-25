import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";


function App() {
  const [token, setToken] = useState("");
  const [view, setView] = useState("login");

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Inventory Management</h1>
      <div className="mb-4 space-x-4">
        <button className="btn" onClick={() => setView("register")}>Register</button>
        <button className="btn" onClick={() => setView("login")}>Login</button>
        {token && (
          <>
            <button className="btn" onClick={() => setView("add")}>Add Product</button>
            <button className="btn" onClick={() => setView("list")}>List Products</button>
            <button className="btn" onClick={() => { setToken(""); setView("login"); }}>Logout</button>
          </>
        )}
      </div>
      {view === "register" && <Register setView={setView}/>}
      {view === "login" && <Login setToken={setToken} setView={setView}/>}
      {token && view === "add" && <ProductForm token={token}/>}
      {token && view === "list" && <ProductList token={token}/>}
    </div>
  );
}
export default App;
