import React, { useState } from "react";

const LoginForm = () => {
  const [email , setEmail] = useState()
  const [password , setPassword] = useState()

  const handleLogin = (e) => {
    e.preventDefault();
  }


  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Login</h2>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
