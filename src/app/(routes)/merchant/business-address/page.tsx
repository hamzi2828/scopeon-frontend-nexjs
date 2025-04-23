"use client";
import React from "react";

const MerchantVoucher = () => {
  return (
    <div>
      <h2 className="font-semibold text-xl text-gray-900">
        Let customers know how to redeem their vouchers.
      </h2>
      <p className="mt-2 text-gray-700">
        Select one method of redemption and let customers know if they need to
        make an appointment in advance. This information will be added to your
        campaign.
      </p>

      <div className="mt-4">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="redeem"
            className="form-radio text-green-500"
          />
          <span className="text-gray-800">
            Customers will visit a physical location.
          </span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="radio"
            name="redeem"
            className="form-radio text-gray-400"
          />
          <span className="text-gray-800">I will travel to my customers.</span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="radio"
            name="redeem"
            className="form-radio text-gray-400"
          />
          <span className="text-gray-800">
            Customers will use their voucher online.
          </span>
        </label>
      </div>
      <hr className="my-5" />
      <h2 className="font-semibold text-lg text-gray-900 mb-1">
        Customers will visit the physical location
      </h2>
      <p className="text-gray-700 mb-4">
        Customers will visit your business location(s) to receive the service or
        product they purchased. (Example: salon, retail shop, restaurant, etc.)
      </p>

      <div className="text-gray-800 mb-4">
        <p className="font-semibold">Zextons</p>
        <p>7 Broughton Lane</p>
        <p>Manchester, M8 9TY</p>
        <p>+44 7760 509600</p>
      </div>

      <a href="#" className="text-blue-600 hover:underline mb-6 block">
        + Add location
      </a>

      <h2 className="font-semibold text-lg text-gray-900 mb-1">
        Do customers need to make an appointment?
      </h2>

      <div className="mt-2">
        <label className="flex items-center space-x-2">
          <input
            type="radio"
            name="appointment"
            className="form-radio text-gray-400"
          />
          <span className="text-gray-800">No appointment needed</span>
        </label>
        <label className="flex items-center space-x-2 mt-2">
          <input
            type="radio"
            name="appointment"
            className="form-radio text-green-500"
          />
          <span className="text-gray-800">Yes appointment required</span>
        </label>
      </div>
      <label className="block text-gray-700 text-sm font-semibold mb-2">
        Contact Method
      </label>
      <div className="relative">
        <select className="block w-full appearance-none bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:ring-2 focus:ring-green-500">
          <option>Phone</option>
          <option>Email</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M10 12l-5-5h10l-5 5z" />
          </svg>
        </div>
      </div>

      <label className="block text-gray-700 text-sm font-semibold mt-4 mb-2">
        Phone Number
      </label>
      <input
        type="text"
        placeholder="Example: +442085587850"
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
      />

      <p className="text-gray-600 text-sm mt-2">
        This number will be shown on your campaign page and vouchers. Customers
        will call this number to make their appointment.
      </p>

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

export default MerchantVoucher;
