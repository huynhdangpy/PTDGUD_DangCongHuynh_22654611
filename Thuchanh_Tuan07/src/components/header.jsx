import React from 'react';

const Header=()=>{
    return (
        <div className="flex justify-between items-center p-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold text-pink-500">Dashboard</h1>
        <div className="flex items-center space-x-4">
          <input type="text" className="border rounded p-2 w-64" placeholder="Search..." />
          <img src="./Bell 1.png" alt="Notification" className="w-6 h-6" />
          <img src="./Question 1.png" alt="Help" className="w-6 h-6" />
          <img src="./Avatar.png" alt="User" className="w-8 h-8 rounded-full" />
        </div>
      </div>
      );
}
export default Header;