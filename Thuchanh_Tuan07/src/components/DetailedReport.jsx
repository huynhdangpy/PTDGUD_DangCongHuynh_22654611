import React, { useEffect, useState } from "react";

const statusColors = {
  "New": "text-blue-500 bg-blue-100",
  "In-progress": "text-yellow-600 bg-yellow-100",
  "Completed": "text-green-600 bg-green-100",
};

const DetailedReport = () => {
  const [customers, setCustomers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const fetchCustomerData = async () => {
      try {
        const res = await fetch("/data/customerData.json");
        const json = await res.json();
        setCustomers(json.customer);
      } catch (err) {
        console.error("Failed to fetch customer data:", err);
      }
    };

    fetchCustomerData();
  }, []);

  const totalPages = Math.ceil(customers.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = customers.slice(indexOfFirstItem, indexOfLastItem);

  const goToPage = (pageNum) => {
    if (pageNum >= 1 && pageNum <= totalPages) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-md font-semibold text-gray-700 flex items-center gap-2">
          <img src="/File text 1.png" alt="icon" /> Detailed report
        </h2>
        <div className="flex gap-2">
          <button className="px-4 py-1 border border-pink-500 text-pink-500 rounded-md text-sm hover:bg-pink-50">
            Import
          </button>
          <button className="px-4 py-1 bg-pink-500 text-white rounded-md text-sm hover:bg-pink-600">
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto shadow-sm border rounded-lg">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-100 text-gray-600 font-medium">
            <tr>
              <th className="p-3"><input type="checkbox" /></th>
              <th className="p-3">Customer Name</th>
              <th className="p-3">Company</th>
              <th className="p-3">Order Value</th>
              <th className="p-3">Order Date</th>
              <th className="p-3">Status</th>
              <th className="p-3"></th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50">
                <td className="p-3"><input type="checkbox" /></td>
                <td className="p-3 flex items-center gap-2">
                  <img
                    src={`/${item.image}`}
                    alt={item.name}
                    className="w-8 h-8 rounded-full"
                  />
                  {item.name}
                </td>
                <td className="p-3">{item.company}</td>
                <td className="p-3">${item.orderValue}</td>
                <td className="p-3">{item.orderDate}</td>
                <td className="p-3">
                  <span className={`text-xs px-2 py-1 rounded-md font-medium ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="p-3 text-gray-400 hover:text-gray-700 cursor-pointer">
                  ✏️
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center text-sm text-gray-500 mt-4">
        <span>{customers.length} results</span>
        <div className="flex items-center gap-2">
          <button onClick={() => goToPage(currentPage - 1)} className="px-2 py-1 text-gray-400">&lt;</button>
          {[...Array(totalPages)].map((_, idx) => {
            const pageNum = idx + 1;
            return (
              <button
                key={pageNum}
                onClick={() => goToPage(pageNum)}
                className={`px-3 py-1 rounded-md ${
                  pageNum === currentPage ? "bg-pink-500 text-white" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {pageNum}
              </button>
            );
          })}
          <button onClick={() => goToPage(currentPage + 1)} className="px-2 py-1 text-gray-400">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default DetailedReport;
