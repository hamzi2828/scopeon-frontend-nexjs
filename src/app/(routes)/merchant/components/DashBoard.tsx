"use client";
import React from "react";

const DashBoard = () => {
  return (
    <div className="flex justify-start min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-1/9 bg-white p-4 shadow-lg">
        <ul className="space-y-4">
          <li className="font-semibold text-gray-700">Options</li>
          <li className="text-gray-600">Proof of Pricing</li>
          <li className="text-gray-600">Photos</li>
          <li className="text-gray-600">Highlights</li>
          <li className="text-gray-600">Description</li>
          <li className="text-gray-600">Fine Print</li>
          <li className="text-gray-600">Voucher Instructions</li>
          <li className="text-gray-600">Business Info</li>
          <li className="text-gray-600">Review</li>
          <li className="text-gray-600">Submit</li>
        </ul>
      </div>
      {/* Main Content */}
      <div className="flex-1 bg-white p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold">Customize your options.</h1>
          <p className="text-gray-600 mt-2">
            Review the options that customers will be able to buy from your campaign page. We recommend offering multiple options to broaden your reach.
          </p>
        </div>
        {/* Your Options Section */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Your options (3)</h2>
            <a href="#" className="text-blue-500">+ Add a new option</a>
          </div>
          {/* Option 1 */}
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-700 font-medium">Option 1</h3>
                <p className="text-gray-500">Example: Five-Course French Dinner for Two; Not Valid on Sundays</p>
              </div>
              <div className="space-x-4">
                <a href="#" className="text-blue-500">Remove</a>
                <a href="#" className="text-blue-500">Edit</a>
              </div>
            </div>
          </div>
          {/* Option 2 */}
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-700 font-medium">Option 2</h3>
                <p className="text-gray-500">Example: Five-Course French Dinner for Two; Not Valid on Sundays</p>
              </div>
              <div className="space-x-4">
                <a href="#" className="text-blue-500">Remove</a>
                <a href="#" className="text-blue-500">Edit</a>
              </div>
            </div>
          </div>
          {/* Option 3 */}
          <div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-gray-700 font-medium">Option 3</h3>
                <p className="text-gray-500">Example: Five-Course French Dinner for Two; Not Valid on Sundays</p>
              </div>
              <div className="space-x-4">
                <a href="#" className="text-blue-500">Remove</a>
                <a href="#" className="text-blue-500">Edit</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
