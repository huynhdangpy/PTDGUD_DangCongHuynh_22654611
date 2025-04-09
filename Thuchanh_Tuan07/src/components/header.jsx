import React from "react";
import { Bell, HelpCircle } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow border-b">

      <h1 className="text-2xl font-bold text-pink-600">Dashboard</h1>
      <div className="flex items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="pl-3 pr-10 w-64 text-sm border rounded-lg h-9 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />
        <Bell className="text-gray-500 w-5 h-5 cursor-pointer" />
        <HelpCircle className="text-gray-500 w-5 h-5 cursor-pointer" />
        <img
          src="/Avatar (1).png"
          alt="avatar"
          className="w-9 h-9 rounded-full"
        />
      </div>
    </div>
  );
};

export default Header;
