import React from "react";
import { useLocation } from "react-router-dom"; // Thêm hook useLocation
import { Bell, HelpCircle } from "lucide-react";

const Header = () => {
  const location = useLocation(); // Lấy thông tin đường dẫn của trang hiện tại
  const pageTitle =
    location.pathname === "/"
      ? "Dashboard"
      : location.pathname.split("/")[1].charAt(0).toUpperCase() +
        location.pathname.split("/")[1].slice(1);

  return (
    <div className="flex justify-between items-center px-6 py-4 bg-white shadow border-b">
      {/* Hiển thị tên trang hiện tại */}
      <h1 className="text-2xl font-bold text-pink-600">{pageTitle}</h1>

      {/* Search bar và icons */}
      <div className="flex items-center gap-4">
        {/* Search bar */}
        <input
          type="text"
          placeholder="Search..."
          className="pl-3 pr-10 w-64 text-sm border rounded-lg h-9 focus:outline-none focus:ring-2 focus:ring-pink-300"
        />

        {/* Notification bell */}
        <Bell
          className="text-gray-500 w-5 h-5 cursor-pointer"
          aria-label="Notifications"
        />

        {/* Help icon */}
        <HelpCircle
          className="text-gray-500 w-5 h-5 cursor-pointer"
          aria-label="Help"
        />

        {/* Avatar */}
        <img
          src="/Avatar (1).png"
          alt="User avatar"
          className="w-9 h-9 rounded-full"
          aria-label="User avatar"
        />
      </div>
    </div>
  );
};

export default Header;
