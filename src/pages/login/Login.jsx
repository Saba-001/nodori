import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";  // Import useLocation and useNavigate

export const Login = ({ registeredUsers }) => {  // Pass registeredUsers as prop
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Check if there's an error message from the previous attempt
  const errorMessage = location.state ? location.state.error : "";

  // Handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Find matching email and password in registeredUsers
    const user = registeredUsers.find(user => user.email === email && user.password === password);
    if (user) {
      // Navigate to success page or dashboard
      navigate("/dashboard");
    } else {
      // Set error message if login fails
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-beige">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-brown">Log In</h1>
        {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
