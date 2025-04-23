"use client";
import React from "react";

const MerchantHighlights = () => {
  return (
    <div>
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-1">
          What makes your campaign stand out?
        </h2>
        <p className="text-gray-600 mb-4">
          Briefly describe the highlights of your business and campaign in 1–2
          sentences.
        </p>
        <label
          htmlFor="highlights"
          className="block text-gray-800 font-medium mb-1"
        >
          Highlights
        </label>
        <textarea
          id="highlights"
          rows={3}
          className="w-full border border-gray-300 rounded-md p-2 mb-2 text-gray-800"
          placeholder="Chef Thierry Lefeuvre devises a menu of traditional French food; escargot, mushroom ravioli, white truffle flatbread"
        ></textarea>

        <p className="text-sm text-gray-500 mb-4">140 Characters remaining</p>
        <div className="bg-gray-100 p-4 rounded-md text-sm text-gray-600 mb-4">
          <strong>Example:</strong> Chef Thierry Lefeuvre devises a menu of
          traditional French food; escargot, mushroom ravioli, white truffle
          flatbread
        </div>

        <div className="text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Get more help
          </a>
          <span className="mx-5 text-gray-400">|</span>
          <a href="#" className="text-blue-600 hover:underline">
            Preview this section
          </a>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button className="flex items-center px-10 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
            Previous
          </button>
          <button className="flex items-center px-10 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MerchantHighlights;
