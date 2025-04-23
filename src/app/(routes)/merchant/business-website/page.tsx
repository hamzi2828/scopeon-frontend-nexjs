"use client";
import React from "react";

const BuisnessWebsite = () => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-4">Describe your business.</h2>
      <p className="mt-4 p-3 bg-gray-100">
        <span className="font-semibold">Required:</span> Provide a valid website
        or social media page. Groupon requires an up-to-date, public website or
        social media page to verify business information and pricing. Your
        campaign cannot be approved until a valid website is provided.
      </p>
      <label
        className="block text-sm font-medium text-gray-700 mt-4"
        htmlFor="business-website"
      >
        Business website
      </label>
      <input
        type="url"
        id="business-website"
        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        value="https://zextons.co.uk"
      />

      <div className="mt-4">
        <p className="font-medium text-gray-800">Website requirements</p>
        <ul className="list-disc list-inside text-sm text-gray-600 mt-2 space-y-1">
          <li>
            Spelling of the business name on your website must match your
            business name.
          </li>
          <li>Your business name must be listed on the first page.</li>
          <li>Links to social media pages must be your business pages.</li>
        </ul>
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

export default BuisnessWebsite;
