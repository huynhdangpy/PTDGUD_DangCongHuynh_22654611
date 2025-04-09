import React from "react";
import {
  LayoutDashboard,
  Folder,
  Users,
  PieChart,
  MessageSquare,
  Code,
} from "lucide-react";

const menuItems = [
  { label: "Dashboard", icon: <LayoutDashboard />, active: true },
  { label: "Projects", icon: <Folder /> },
  { label: "Teams", icon: <Users /> },
  { label: "Analytics", icon: <PieChart /> },
  { label: "Messages", icon: <MessageSquare /> },
  { label: "Integrations", icon: <Code /> },
];

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-white border-r p-4 flex flex-col">
      {/* Logo */}
      <div className="flex items-center gap-2 px-2 py-4">
        <img src="/Image1858.png" alt="" />
      </div>

      {/* Menu */}
      <nav className="mt-6 flex flex-col gap-2">
        {menuItems.map((item, idx) => (
          <button
            key={idx}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg text-sm text-gray-700
              ${item.active ? "bg-pink-500 text-white font-semibold" : "hover:bg-gray-100"}`}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
