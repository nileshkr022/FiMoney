import React, { useState } from "react";
import axios from "axios";

export default function Register({ setView }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const register = async (e) => {
    e.preventDefault();
    setMsg("");
    try {
      await axios.post("http://localhost:8080/register", { username, password });
      setMsg("Registration successful, now log in");
      setView("login");
    } catch (err) {
      setMsg(err.response?.data?.error || "Error");
    }
  };

  return (
    <form className="space-y-2" onSubmit={register}>
      <h2 className="font-semibold">Register</h2>
      <input className="input" value={username} onChange={e=>setUsername(e.target.value)} placeholder="Username" required/>
      <input className="input" value={password} onChange={e=>setPassword(e.target.value)} type="password" placeholder="Password" required/>
      <button className="btn" type="submit">Register</button>
      {msg && <div className="text-red-500">{msg}</div>}
    </form>
  );
}
