import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Img } from "/src/components";

export const Register = () => {
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const navigate = useNavigate();

  const { t } = useTranslation();

  const handleEmailChange = (e) => {
    setNewEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setNewPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate("/login", { state: { email: newEmail, password: newPassword } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-beige ">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center text-brown">
          {t("sign_up")}
        </h1>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              {t("email")}:
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              value={newEmail}
              onChange={handleEmailChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-gray-700 font-semibold mb-2"
            >
              {t("password")}:
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={newPassword}
              onChange={handlePasswordChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
            >
              {t("sign_up")}
            </button>
            <button
              type="button"
              className="bg-blue-700 text-white px-4 py-2 rounded-md flex items-center hover:bg-blue-800 transition duration-300"
            >
              <Img className="w-6 h-6 mr-2" name="fb" alt="Facebook logo" />
              {t("Sign_fb")}
            </button>
          </div>
        </form>
        <p className="text-center text-gray-600">
          {t("Already_have_acc")}{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            {t("login")}
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
