import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-8">
            <div className="container mx-auto grid grid-cols-4 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-2">About Us</h3>
                    <p className="text-sm mb-4">Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                    <div className="flex">
                        <input 
                            type="text" 
                            placeholder="Enter your email" 
                            className="p-2 rounded-l-lg w-full text-gray-900"
                        />
                        <button className="bg-pink-500 px-4 py-2 rounded-r-lg text-white">Send</button>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Learn More</h3>
                    <ul className="text-sm space-y-1">
                        <li>Our Cooks</li>
                        <li>See Our Features</li>
                        <li>FAQ</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Shop</h3>
                    <ul className="text-sm space-y-1">
                        <li>Gift Subscription</li>
                        <li>Send Us Feedback</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-bold text-lg mb-2">Recipes</h3>
                    <ul className="text-sm space-y-1">
                        <li>What to Cook This Week</li>
                        <li>Pasta</li>
                        <li>Dinner</li>
                        <li>Healthy</li>
                        <li>Vegetarian</li>
                        <li>Vegan</li>
                        <li>Christmas</li>
                    </ul>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                <span className="font-bold text-lg">🍴 Cheffiy</span> &copy; 2025 Cheffiy Company | Terms of Service | Privacy Policy
            </div>
        </footer>
    );
};

export default Footer;