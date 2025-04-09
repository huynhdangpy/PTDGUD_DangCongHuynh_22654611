import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react"; // icon edit

const statusStyles = {
  "New": "text-blue-500 bg-blue-100",
  "In-progress": "text-yellow-600 bg-yellow-100",
  "Completed": "text-green-600 bg-green-100",
};

const DetailedReport = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://67c865040acf98d070866108.mockapi.io/user");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch API:", err);
      }
    };

    fetchUsers();
  }, []);

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

          {/* Avatar + Name */}
          <div className="flex items-center gap-2 col-span-2">
            <img src={item.avatar} alt={item.name} className="w-8 h-8 rounded-full" />
            <span className="font-medium text-gray-700">{item.name}</span>
          </div>

          <div className="text-gray-600">{item.company}</div>
          <div className="text-gray-600">{item.ordervalue}</div>
          <div className="text-gray-600">{item.orderdate}</div>

          <div className="flex items-center justify-between gap-2">
            <span className={`text-xs px-2 py-1 rounded-md font-medium ${statusStyles[item.status] || ""}`}>
              {item.status}
            </span>
            <Pencil size={14} className="text-gray-400 hover:text-gray-600 cursor-pointer" />
          </div>
        </div>
      ))}

      {/* Pagination & Results Count */}
      <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-500">
        <span>{data.length} results</span>
        <div className="flex items-center gap-2">
          <button className="px-2 py-1 rounded hover:bg-gray-100">&lt;</button>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              className={`w-6 h-6 rounded-full text-sm ${
                num === 1 ? "bg-pink-500 text-white" : "hover:bg-gray-100"
              }`}
            >
              {num}
            </button>
          ))}
          <button className="px-2 py-1 rounded hover:bg-gray-100">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedReport;
