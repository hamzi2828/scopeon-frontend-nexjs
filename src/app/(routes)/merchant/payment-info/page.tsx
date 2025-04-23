"use client";
import React from "react";

const PaymentInfo = () => {
  return (
    <>
      <h1 className="text-xl font-semibold text-gray-800">
        Enter your Bank Information
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        Payments owed to you per your merchant agreement will be deposited into
        this account.
      </p>

      <div className="mt-4">
        <label
          htmlFor="account-holder"
          className="block text-sm font-medium text-gray-700"
        >
          Account Holder Name
        </label>
        <input
          type="text"
          id="account-holder"
          placeholder="Example: James Smith"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="iban"
          className="block text-sm font-medium text-gray-700"
        >
          IBAN
        </label>
        <input
          type="text"
          id="iban"
          placeholder="Example: GB26 XXXX 1111 2222 3333 44"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="mt-4">
        <label
          htmlFor="bic"
          className="block text-sm font-medium text-gray-700"
        >
          BIC
        </label>
        <input
          type="text"
          id="bic"
          placeholder="Example: XXXXGBXXXXX"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="flex items-center px-10 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
          Previous
        </button>
        <button className="flex items-center px-10 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
          Next
        </button>
      </div>
    </>
  );
};

export default PaymentInfo;
