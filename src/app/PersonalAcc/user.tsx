// Dependencies
import React, { useState } from "react";
// тут импорт иконок и других зависимостей
// Styles
import "./tailwind.output.css"; 

const Owner = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [inn, setInn] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
  };

  return (
    <div className="flex h-screen grid grid-cols-2">
      <div className="w-64 bg-white p-4">
        <div className="flex items-center mb-4">
          {/* <icon className="text-xl mr-2" /> */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block mb-1 text-sm font-medium"
            >
              Фамилия
            </label>
            <input
              type="text"
              id="lastName"
              className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded"
              value={lastName}
              placeholder="Ввод"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block mb-1 text-sm font-medium"
            >
              Имя
            </label>
            <input
              type="text"
              id="firstName"
              className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded"
              value={firstName}
              placeholder="Ввод"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="inn" className="block mb-1 text-sm font-medium">
              ИНН
            </label>
            <input
              type="text"
              id="inn"
              className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded"
              value={inn}
              placeholder="Ввод"
              onChange={(e) => setInn(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block mb-1 text-sm font-medium"
            >
              Телефон
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded"
              value={phoneNumber}
              placeholder="Ввод"
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 bg-gray-200 border border-gray-300 rounded"
              value={email}
              placeholder="Ввод"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Редактирование данных
          </button>
        </form>
      </div>
    </div>
  );
};

export default Owner;
