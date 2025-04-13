import React, { useState, useEffect } from "react";
import { Pencil } from "lucide-react";

const statusStyles = {
  New: "text-blue-500 bg-blue-100",
  "In-progress": "text-yellow-600 bg-yellow-100",
  Completed: "text-green-600 bg-green-100",
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://67c865040acf98d070866108.mockapi.io/user"
        );
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch API:", err);
      }
    };

    fetchUsers();
  }, []);

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedItem(null);
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      {/* Table Header */}
      <div className="grid grid-cols-7 items-center text-xs font-semibold text-gray-500 px-4 py-2 border-b">
        <div>
          <input type="checkbox" />
        </div>
        <div className="col-span-2">CUSTOMER NAME</div>
        <div>COMPANY</div>
        <div>ORDER VALUE</div>
        <div>ORDER DATE</div>
        <div>STATUS</div>
      </div>

      {/* Table Body */}
      {data.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-7 items-center text-sm px-4 py-3 border-b hover:bg-gray-50"
        >
          <div>
            <input type="checkbox" />
          </div>

          <div className="flex items-center gap-2 col-span-2">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-8 h-8 rounded-full"
            />
            <span className="font-medium text-gray-700">{item.name}</span>
          </div>

          <div className="text-gray-600">{item.company}</div>
          <div className="text-gray-600">{item.ordervalue}</div>
          <div className="text-gray-600">{item.orderdate}</div>

          <div className="flex items-center justify-between gap-2">
            <span
              className={`text-xs px-2 py-1 rounded-md font-medium ${
                statusStyles[item.status] || ""
              }`}
            >
              {item.status}
            </span>
            <Pencil
              size={14}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
              onClick={() => handleOpenModal(item)}
            />
          </div>
        </div>
      ))}

      {showModal && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={handleCloseModal}
          />

          {/* Modal Content */}
          <div className="relative z-50 bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
            {/* Header */}
            <div className="flex items-center gap-4 mb-4">
              <img
                src={selectedItem.avatar}
                alt={selectedItem.name}
                className="w-14 h-14 rounded-full border"
              />
              <div>
                <h2 className="text-xl font-semibold">{selectedItem.name}</h2>
                <p className="text-gray-500 text-sm">{selectedItem.company}</p>
              </div>
            </div>

            <form className="space-y-4">
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  type="text"
                  defaultValue={selectedItem.name}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Company
                </label>
                <input
                  type="text"
                  defaultValue={selectedItem.company}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Email (giả định thêm) */}
              <div>
                <label className="block text-gray-700 font-medium">Email</label>
                <input
                  type="email"
                  defaultValue={selectedItem.email || ""}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
              </div>

              {/* Status Dropdown */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Status
                </label>
                <select
                  defaultValue={selectedItem.status}
                  className="w-full px-4 py-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  <option value="New">New</option>
                  <option value="In-progress">In-progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
