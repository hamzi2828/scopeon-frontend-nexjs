"use client";
import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";

// Dynamically import JoditEditor with no SSR
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const MerchantDescription = ({ placeholder }: { placeholder: string }) => {
  const editor = useRef(null);
  const [content, setContent] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || "Start typing...",
    }),
    [placeholder]
  );
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-800 mb-1">
        What's included in each option?
      </h2>
      <p className="text-gray-600 mb-4">
        List out what's included in each of this campaign's options to give
        customers a better understanding of what to expect.
      </p>

      <label className="block text-gray-800 font-medium mb-1">Options</label>
      <ul className="list-disc list-inside text-gray-800 mb-4">
        <li>
          Example: Five-Course French Dinner for Two; Not Valid on Sundays
        </li>
        <li>
          Example: Five-Course French Dinner for Two; Not Valid on Sundays
        </li>
        <li>deefrgtgt</li>
      </ul>
      <JoditEditor
        className="my-5"
        ref={editor}
        value={content}
        config={config}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent: string) => setContent(newContent)} // Update the content on blur
        onChange={(newContent: string) => setContent(newContent)} // Update content on change
      />
      <div className="bg-gray-100 p-5 mt-5">
        <h2 className="font-semibold text-lg">Example</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-800">
          <li>What's included:</li>
          <ul className="list-disc pl-5">
            <li>Chef's surprise</li>
            <li>Seafood or paté appetiser</li>
            <li>Seasonal sorbét</li>
            <li>Fish entrée</li>
            <li>Chef's pastry selection</li>
          </ul>
        </ul>
      </div>

      <div className="flex items-center justify-start mt-4 space-x-4 text-blue-600">
        <a href="#" className="hover:underline">
          Get more help
        </a>
        <a href="#" className="hover:underline">
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
  );
};

export default MerchantDescription;
