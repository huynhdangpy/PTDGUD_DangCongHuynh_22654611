import React, { useEffect, useState } from "react";

const iconMap = {
  cart: "/Button 1509.png",
  dollar: "/Button 1529.png",
  user: "/Button 1530.png",
};

const Overview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchOverviewData = async () => {
      try {
        const res = await fetch("/data/overviewData.json");
        const json = await res.json();
        setData(json);
      } catch (err) {
        console.error("Failed to fetch overview data:", err);
      }
    };

    fetchOverviewData();
  }, []);

  return (
    <div className="px-6 py-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-4 flex items-center gap-2">
        <img src="/Squares four 1.png" alt="overview icon" className="w-5 h-5" />
        Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg shadow-sm border ${item.color} flex flex-col justify-between`}
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-gray-600">{item.title}</p>
                <p className="text-2xl font-bold text-gray-800">
                  ${item.value.toLocaleString()}
                </p>
              </div>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <img src={iconMap[item.icon]} alt={item.title} className="w-5 h-5" />
              </div>
            </div>
            <p className="mt-2 text-xs text-green-600 font-medium">
              ▲ {item.change}% period of change
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Overview;
