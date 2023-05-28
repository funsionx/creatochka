// Dependencies
import React from "react";
// Styles
// user name - insert provided name
import "./tailwind.output.css";
import User from "./user";

const OwnerAcc = () => {
  return (
    <div className="flex flex-col bg-gray-300 md:flex-row h-screen">
      <div className="w-full md:w-64 bg-indigo-100 p-4">
        <div className="flex items-center mb-4">
          <icon className="text-xl mr-2" />
          <h3 className="text-xl">User Name</h3>
        </div>
        <ul className="space-y-3">
          <li className="text-black hover:bg-indigo-300 w-full p-2 rounded-r-lg">
            Профиль
          </li>
          <li className="text-black hover:bg-indigo-300 w-full p-2 rounded-r-lg">
            Бронирование
          </li>
          <li className="text-black hover:bg-indigo-300 w-full p-2">
            Избранное
          </li>
          <li className="text-black hover:bg-indigo-300 w-full p-2 rounded-r-lg">
            Тех.поддержка
          </li>
        </ul>
        <div className="overflow-hidden">
          <button className="mt-3 text-black hover:bg-indigo-300 w-full p-2 rounded-r-lg">
            <p className="flex justify-start">Выход</p>
          </button>
        </div>
      </div>
      <div className="w-full p-4 bg-white rounded-lg shadow md:ml-4 mt-4 md:mt-0">
        <h2 className="text-2xl mb-4">Учетная запись</h2>
        <User />
        {/* Add your profile page content here */}
      </div>
    </div>
  );
};

export default OwnerAcc;
