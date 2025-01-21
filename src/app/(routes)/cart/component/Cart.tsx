"user client";
import React from 'react';
import { FaFire, FaUnlock, FaGift } from "react-icons/fa";

const Cart: React.FC = () => {
    return (
        <div className='max-w-screen-xl mx-auto my-10'>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 p-4">
                    <>
                        {/* Checkout Title */}
                        <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
                        <p className="text-gray-600 mb-6">
                            Please fill out your billing information before finalizing your order.
                        </p>
                        {/* Payment Method */}
                        <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                        <div className="space-y-4 mb-8">
                            {/* Google Pay */}
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="payment"
                                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="ml-2 text-gray-700">Google Pay</span>
                            </label>
                            {/* Credit/Debit Card */}
                            <label className="flex items-center space-x-3">
                                <input
                                    type="radio"
                                    name="payment"
                                    defaultChecked={true}
                                    className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <span className="ml-2 text-gray-700">Credit/Debit Card</span>
                            </label>
                            {/* Card Details */}
                            <div className="ml-8">
                                <a href="#" className="text-blue-500">
                                    Enter your card details
                                </a>
                                <label className="block mt-3">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    />
                                    <span className="ml-2 text-sm text-gray-700">
                                        Yes, make checkout faster next time. Save my payment information for
                                        future purchases, including my billing address if required later.
                                    </span>
                                </label>
                            </div>
                        </div>
                        {/* Your Items */}
                        <h2 className="text-xl font-semibold mb-4">Your Items</h2>
                        <div className="border-t border-gray-200 pt-4 space-y-4">
                            {/* Item 1 */}
                            <div className="flex items-start">
                                <img
                                    src="https://via.placeholder.com/100"
                                    alt="Product"
                                    className="w-24 h-24 rounded-md"
                                />
                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-semibold text-gray-700">
                                        One-hour deep tissue massage; must be 18 or older - Osteopathy
                                        Physiotherapy London
                                    </h3>
                                    <p className="text-sm text-red-500 flex items-center">
                                        <FaFire />
                                        Selling fast!
                                    </p>
                                    <div className="flex items-center mt-4">
                                        <label className="text-sm text-gray-600 mr-2">Qty:</label>
                                        <select className="border rounded-md text-center w-16 py-1">
                                            <option>1</option>
                                            <option>2</option>
                                            <option>3</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-xl font-bold text-gray-700">£29.00</p>
                                </div>
                            </div>
                        </div>
                    </>

                </div>
                <div className="md:col-span-1 p-4">
                    <div className="text-sm text-gray-500 text-right mb-4">
                        <FaUnlock className="inline-block mr-1" />
                        Secure Transaction
                    </div>
                    {/* Order Summary */}
                    <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                    {/* Promo Code */}
                    <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-700">Promo or Gift Code</span>
                        <a href="#" className="text-blue-500">
                            Add
                        </a>
                    </div>
                    {/* Gift Option */}
                    <div className="border rounded-lg p-4">
                        <div className="flex items-center mb-2">
                            <FaGift />
                            <span className="text-gray-700 ms-2">Give as a gift</span>
                            <input
                                type="checkbox"
                                className="ml-auto h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                            />
                        </div>
                        <p className="text-sm text-gray-500">
                            Send or print gift voucher after purchase
                        </p>
                        {/* Subtotal */}
                        <div className="flex justify-between items-center mt-4">
                            <span className="text-gray-700">Subtotal (1 Item)</span>
                            <span className="text-gray-700">£29.00</span>
                        </div>
                        <hr className="my-2" />
                        {/* Order Total */}
                        <div className="flex justify-between items-center font-semibold text-gray-700">
                            <span>Order Total:</span>
                            <span>£29.00</span>
                        </div>
                    </div>
                    {/* Place Order Button */}
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-md text-lg font-semibold hover:bg-blue-700">
                        Place Order
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;