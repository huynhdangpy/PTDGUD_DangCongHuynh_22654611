import React, { useState, useEffect } from "react";
import { Pencil, PlusCircle } from "lucide-react";

const statusStyles = {
  New: "text-blue-500 bg-blue-100",
  "In-progress": "text-yellow-600 bg-yellow-100",
  Completed: "text-green-600 bg-green-100",
};

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [successMessage, setSuccessMessage] = useState(""); // Thêm state cho thông báo
  const [newUser, setNewUser] = useState({
    name: "",
    company: "",
    ordervalue: "",
    orderdate: "",
    status: "New",
  }); // State cho user mới

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

  const handleAddUserModal = () => {
    setNewUser({
      name: "",
      company: "",
      ordervalue: "",
      orderdate: "",
      status: "New",
    });
    setShowModal(true);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmitAddUser = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "https://67c865040acf98d070866108.mockapi.io/user",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        }
      );
      const addedUser = await res.json();

      // Cập nhật danh sách người dùng
      setData((prevData) => [...prevData, addedUser]);
      setSuccessMessage("Thêm người dùng thành công!");
      setShowModal(false);
    } catch (err) {
      console.error("POST error:", err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-md shadow-sm">
      {/* Hiển thị thông báo thêm người dùng thành công */}
      {successMessage && (
        <div className="mb-4 p-3 text-green-700 bg-green-100 rounded-md">
          {successMessage}
        </div>
      )}

      {/* Nút thêm người dùng */}
      <button
        onClick={handleAddUserModal}
        className="px-6 py-3 mb-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
      >
        <PlusCircle size={20} className="mr-2" />
        Add New User
      </button>

      {/* Table Header */}
      <div className="grid grid-cols-8 items-center text-xs font-semibold text-gray-500 px-4 py-2 border-b">
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
          className="grid grid-cols-8 items-center text-sm px-4 py-3 border-b hover:bg-gray-50"
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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Overlay mờ */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm z-40"
            onClick={handleCloseModal}
          />

          {/* Nội dung Modal */}
          <div className="relative z-50 bg-white p-6 rounded-xl shadow-2xl w-full max-w-md">
            <h2 className="text-xl font-semibold mb-4">
              {selectedItem ? "Edit User" : "Add New User"}
            </h2>

            {/* Form */}
            <form
              onSubmit={
                selectedItem
                  ? async (e) => {
                      e.preventDefault();

                      const updatedUser = {
                        ...selectedItem,
                        name: e.target.name.value,
                        company: e.target.company.value,
                        ordervalue: e.target.ordervalue.value,
                        orderdate: e.target.orderdate.value,
                        status: e.target.status.value,
                      };

                      try {
                        await fetch(
                          `https://67c865040acf98d070866108.mockapi.io/user/${selectedItem.id}`,
                          {
                            method: "PUT",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify(updatedUser),
                          }
                        );

                        // Cập nhật state
                        setData((prevData) =>
                          prevData.map((item) =>
                            item.id === selectedItem.id ? updatedUser : item
                          )
                        );

                        setSuccessMessage("Cập nhật thành công!");
                        setShowModal(false);
                      } catch (err) {
                        console.error("PUT error:", err);
                      }
                    }
                  : handleSubmitAddUser
              }
              className="space-y-4"
            >
              {/* Name */}
              <div>
                <label className="block text-gray-700 font-medium">Name</label>
                <input
                  name="name"
                  type="text"
                  defaultValue={selectedItem ? selectedItem.name : newUser.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Company
                </label>
                <input
                  name="company"
                  type="text"
                  defaultValue={
                    selectedItem ? selectedItem.company : newUser.company
                  }
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {/* Order Value */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Order Value
                </label>
                <input
                  name="ordervalue"
                  type="text"
                  defaultValue={
                    selectedItem ? selectedItem.ordervalue : newUser.ordervalue
                  }
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {/* Order Date */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Order Date
                </label>
                <input
                  name="orderdate"
                  type="date"
                  defaultValue={
                    selectedItem ? selectedItem.orderdate : newUser.orderdate
                  }
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md"
                />
              </div>

              {/* Status Dropdown */}
              <div>
                <label className="block text-gray-700 font-medium">
                  Status
                </label>
                <select
                  name="status"
                  defaultValue={
                    selectedItem ? selectedItem.status : newUser.status
                  }
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md bg-white"
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
                  className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  {selectedItem ? "Save Changes" : "Add New User"}
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
