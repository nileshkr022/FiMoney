import React, { useState } from "react";
import axios from "axios";

export default function Login({ setToken, setView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const login = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      const res = await axios.post("http://localhost:8080/login", { username, password });
      setToken(res.data.access_token);
      setMsg("Logged in!");
      setView("add");
    } catch (err) {
      setMsg(err.response?.data?.error || "Error");
    }
  };

  return (
    <form className="space-y-2" onSubmit={login}>
      <h2 className="font-semibold">Login</h2>
      <input className="input" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" required/>
      <input className="input" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" required/>
      <button className="btn" type="submit">Login</button>
      {msg && <div className="text-red-500">{msg}</div>}
    </form>
  );
}
