import React from 'react';
const Header = () => {
    return (
        <div className="flex items-center justify-between p-4 bg-white shadow-md w-full">
            <div className="flex items-center gap-4">
                <img src="../src/assets/logo.PNG" alt="Logo" className="h-10" />
                <input 
                    type="text" 
                    placeholder="What would you like to cook?" 
                    className="px-4 py-2 border border-gray-300 rounded-full w-96 focus:outline-none focus:ring-2 focus:ring-pink-400"
                />
            </div>
            <div className="flex items-center gap-4">
                <nav className="hidden md:flex gap-4">
                    <a href="#" className="text-gray-700 hover:text-pink-500">What to cook</a>
                    <a href="#" className="text-gray-700 hover:text-pink-500">Recipes</a>
                    <a href="#" className="text-gray-700 hover:text-pink-500">Ingredients</a>
                    <a href="#" className="text-gray-700 hover:text-pink-500">Occasions</a>
                    <a href="#" className="text-gray-700 hover:text-pink-500">About Us</a>
                </nav>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full">
                    Your Recipe Box
                </button>
                <img src="../src/assets/logo_user.PNG" alt="" />
            </div>
        </div>
    );
};

export default Header;
