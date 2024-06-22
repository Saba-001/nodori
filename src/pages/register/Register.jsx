import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate

export const Register = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();  // Initialize useNavigate

  // Handle email input change
  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  // Handle password input change
  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your logic for handling form submission
    console.log("Submitted:", newEmail, newPassword);
    // After successful registration, navigate to the login page and pass the email and password
    navigate("/login", { state: { email: newEmail, password: newPassword } });
  };

  // Handle Facebook login click
  const handleFacebookLogin = () => {
    window.FB.login(function(response) {
      if (response.authResponse) {
        console.log("Facebook login succeeded:", response);
        // You can now handle the response and integrate with your backend
      } else {
        console.log("Facebook login failed:", response);
      }
    }, { scope: 'email' }); // Specify additional permissions here if needed
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-beige ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-brown">შექმნა</h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              მეილი:
            </label>
            <input
              type="email"
              id="email"
              value={newEmail}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              პაროლი:
            </label>
            <input
              type="password"
              id="password"
              value={newPassword}
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
              შექმნა
            </button>
            <button
              type="button"
              onClick={handleFacebookLogin}
              className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-800 transition duration-300"
            >
              <img className="w-6 h-6 mr-2" src="/assets/images/fb.png" alt="Facebook logo" />
              ფეისბუქით შექმნა
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600">
          გაქვს უკვე ექაუნთი? <a href="/login" className="text-blue-600 hover:underline">შესვლა</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
