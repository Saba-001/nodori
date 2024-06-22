import { useState } from "react";
import emailjs from "emailjs-com";
import { useTranslation } from "react-i18next";

export const ContactUs = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("gmail", "template_4y6dglk", formData, "user_youruserid")
      .then(() => {
        alert(t("message_send"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        alert(t("message_not_send"));
      });
  };

  return (
    <div className="flex-grow">
      <div className="flex items-center justify-center min-h-screen bg-beige">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 -mt-14">
          <h1 className="text-4xl font-bold text-brown mb-6 text-center">
            {t("common_contact_us")}
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="name"
              >
                {t("common_name")}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t("common_name_placeholder")}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="email"
              >
                {t("common_email")}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t("common_email_placeholder")}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="phone"
              >
                {t("common_phone")}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t("common_phone_placeholder")}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="subject"
              >
                {t("common_subject")}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder={t("common_subject_placeholder")}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="message"
              >
                {t("common_message")}
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder={t("common_message_placeholder")}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-brown hover:bg-dark-brown text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                {t("common_send_message")}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
