import React from "react";

const SignupForm = () => {
  return (
    <div className="bg-white p-10 rounded-2xl shadow-xl w-96">
      <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">Sign Up</h2>
      <form className="flex flex-col">
        <input
          type="email"
          placeholder="Email"
          className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white p-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;

