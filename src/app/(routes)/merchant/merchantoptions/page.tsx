"use client";
import React from "react";

const MerchantOptions = () => {
  return (
    <div>
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">Customize your options.</h1>
        <p className="text-gray-600 mt-2">
          Review the options that customers will be able to buy from your
          campaign page. We recommend offering multiple options to broaden your
          reach.
        </p>
      </div>

      {/* Your Options Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-lg font-semibold">Your options (3)</h2>
          <a href="#" className="text-blue-500">
            + Add a new option
          </a>
        </div>

        {/* Option 1 */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-700 font-medium">Option 1</h3>
              <p className="text-gray-500">
                Example: Five-Course French Dinner for Two; Not Valid on Sundays
              </p>
            </div>
            <div className="space-x-4">
              <a href="#" className="text-blue-500">
                Remove
              </a>
              <a href="#" className="text-blue-500">
                Edit
              </a>
            </div>
          </div>
        </div>

        {/* Option 2 */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-700 font-medium">Option 2</h3>
              <p className="text-gray-500">
                Example: Five-Course French Dinner for Two; Not Valid on Sundays
              </p>
            </div>
            <div className="space-x-4">
              <a href="#" className="text-blue-500">
                Remove
              </a>
              <a href="#" className="text-blue-500">
                Edit
              </a>
            </div>
          </div>
        </div>

        {/* Option 3 */}
        <div className="border-b pb-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-700 font-medium">Option 3</h3>
              <p className="text-gray-500">deefrgtgt</p>
              <p className="text-gray-500">Regular price: £4</p>
              <p className="text-gray-500">Groupon price: £1.60</p>
              <p className="text-gray-500">Monthly voucher cap: 50</p>
            </div>
            <div className="space-x-4">
              <a href="#" className="text-blue-500">
                Remove
              </a>
              <a href="#" className="text-blue-500">
                Edit
              </a>
            </div>
          </div>
        </div>

        {/* Add New Option Link */}
        <div className="mt-4">
          <a href="#" className="text-blue-500">
            + Add a new option
          </a>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-between items-center mt-6">
        <button className="flex items-center px-10 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
          Previous
        </button>
        <button className="flex items-center px-10 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default MerchantOptions;
