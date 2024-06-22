import { useState } from "react";
import emailjs from "emailjs-com";

export const ContactUs = () => {
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
        alert(
          "შეტყობინება გაიგზავნა, ვეცდებით მალე დაგიკავშირდეთ მითითებულ საკონტაქტო ინფორმაციის საშუალებით"
        );
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      })
      .catch(() => {
        alert("ცადეთ ხელახლა");
      });
  };

  return (
    <div className="flex-grow">
      <div className="flex items-center justify-center min-h-screen bg-beige">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6 -mt-14">
          <h1 className="text-4xl font-bold text-brown mb-6 text-center">
            დაგვიკავშირდით
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="name"
              >
                სახელი
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="შენი სახელი"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="email"
              >
                ელფოსტა
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="შენი ელფოსტა"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="phone"
              >
                ტელეფონის ნომერი
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="შენი ტელეფონის ნომერი"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="subject"
              >
                სათაური
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="შენი შეტყობინების სათაური"
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-brown text-sm font-bold mb-2"
                htmlFor="message"
              >
                მესიჯი
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                placeholder="დეტალები"
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-brown hover:bg-dark-brown text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
              >
                გაგზავნეთ შეტყობინება
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
