import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="p-5 border-r border-r-gray-300">
      {/* Logo */}
      <img src="/Image1858.png" alt="Logo" />

      {/* Menu */}
      <div className="mt-5 flex flex-col gap-5 text-gray-500">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex gap-3 px-3 py-1.5 rounded items-center ${
              isActive
                ? "bg-pink-500 text-white font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <img src="/Squares four 1.png" alt="Dashboard" />
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `flex gap-3 px-3 py-1.5 rounded items-center ${
              isActive
                ? "bg-pink-500 text-white font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <img src="/Folder.png" alt="Projects" />
          <p>Projects</p>
        </NavLink>

        <NavLink
          to="/teams"
          className={({ isActive }) =>
            `flex gap-3 px-3 py-1.5 rounded items-center ${
              isActive
                ? "bg-pink-500 text-white font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <img src="/Groups.png" alt="Teams" />
          <p>Teams</p>
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `flex gap-3 px-3 py-1.5 rounded items-center ${
              isActive
                ? "bg-pink-500 text-white font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <img src="/Pie chart.png" alt="Analytics" />
          <p>Analytics</p>
        </NavLink>

        <NavLink
          to="/messages"
          className={({ isActive }) =>
            `flex gap-3 px-3 py-1.5 rounded items-center ${
              isActive
                ? "bg-pink-500 text-white font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <img src="/Chat.png" alt="Messages" />
          <p>Messages</p>
        </NavLink>

        <NavLink
          to="/integrations"
          className={({ isActive }) =>
            `flex gap-3 px-3 py-1.5 rounded items-center ${
              isActive
                ? "bg-pink-500 text-white font-semibold"
                : "hover:bg-gray-100"
            }`
          }
        >
          <img src="/Code.png" alt="Integrations" />
          <p>Integrations</p>
        </NavLink>
      </div>

      {/* Banner/Bottom section */}
      <div className="mt-20 bg-[#EFF6FF] p-5 flex flex-col gap-5 items-center">
        <img src="/Group.png" alt="Group" />
      </div>
    </div>
  );
};

export default SideBar;
