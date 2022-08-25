import React, { useState } from "react";
import { useAuth } from "../provider/auth";

function login() {
  
  const { setUser, user } = useAuth();

  return (
    <>
      <h1>Login</h1>
      <h1>{user}</h1>
      <input
        type="text"
        placeholder="user "
        onChange={(e) => setUser({ name: e.target.value })}
      />
      <br />
      <button className="bg-cyan-400"> entrar</button>
    </>
  );
}

export default login;
