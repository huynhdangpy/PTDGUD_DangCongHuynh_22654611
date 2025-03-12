import React from 'react';

const Content = () => {
    const salads = [
        { name: "Cucumber salad, cherry tomatoes", tag: "Steamed" },
        { name: "Italian-style tomato salad", tag: "Steamed" },
        { name: "Potato Salad", tag: "Steamed" },
        { name: "Salad with cabbage and shrimp", tag: "Steamed" },
        { name: "Five-color salad", tag: "Steamed" },
        { name: "Corn Salad", tag: "Steamed" },
        { name: "Lotus delight salad", tag: "Steamed" },
        { name: "Avocado Salad", tag: "Steamed" }
    ];

    return (
        <div className="flex gap-4 p-4">
            <div className="w-1/4 bg-white shadow-md p-4 rounded-xl">
                <h2 className="text-xl font-bold mb-4">FILTERS</h2>
                <div className="mb-4">
                    <h3 className="font-medium mb-2">Type</h3>
                    <div className="flex flex-col gap-1">
                        <label><input type="checkbox" /> Pan-Fried</label>
                        <label><input type="checkbox" /> Stir-Fried</label>
                        <label><input type="checkbox" checked /> Grilled</label>
                        <label><input type="checkbox" /> Roasted</label>
                        <label><input type="checkbox" /> Steamed</label>
                    </div>
                </div>
                <div className="mb-4">
                    <h3 className="font-medium mb-2">Time</h3>
                    <input type="range" min="0" max="60" className="w-full" />
                </div>
                <div className="mb-4">
                    <h3 className="font-medium mb-2">Rating</h3>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400">★</span>
                        ))}
                    </div>
                </div>
                <button className="bg-pink-500 w-full text-white py-2 rounded-lg">
                    Apply
                </button>
            </div>

            <div className="grid grid-cols-3 gap-4 w-3/4">
                {salads.map((salad, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm">
                        <img className="p-4 rounded-t-lg" src="../src/assets/food.PNG" alt={salad.name} />
                        <div>
                            <h5 className="text-xl font-semibold text-gray-900">{salad.name}</h5>
                            <span className="text-pink-500 text-sm mt-2">{salad.tag}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Content;
