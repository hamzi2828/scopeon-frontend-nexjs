"use client";

import React, { useState } from "react";

interface HeadingProps {
  title: string;
  subtitle?: string;
  onTitleChange?: (title: string) => void;
}

const Heading: React.FC<HeadingProps> = ({ title, subtitle, onTitleChange }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    if (onTitleChange) {
      onTitleChange(e.target.value);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">{title}</h1>
      {subtitle && <p className="text-gray-600 mb-4 text-lg">{subtitle}</p>}
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter listing title"
        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-900 text-lg"
      />
    </div>
  );
};

export default Heading;
