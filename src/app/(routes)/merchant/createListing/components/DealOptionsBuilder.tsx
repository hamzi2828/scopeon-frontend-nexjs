"use client";

import React from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

interface DealOption {
  title: string;
  originalPrice: string;
  discountPercentage: string;
  discountedPrice: string;
  finalPrice: string;
  extraOffer: string;
  finalDiscountedPrice: string;
  codeInfo: string;
  purchaseInfo: string;
  giftIcon: boolean;
}

const emptyOption = (): DealOption => ({
  title: "",
  originalPrice: "",
  discountPercentage: "",
  discountedPrice: "",
  finalPrice: "",
  extraOffer: "",
  finalDiscountedPrice: "",
  codeInfo: "",
  purchaseInfo: "",
  giftIcon: false,
});

interface DealOptionsBuilderProps {
  value: DealOption[];
  onChange: (options: DealOption[]) => void;
}

const DealOptionsBuilder: React.FC<DealOptionsBuilderProps> = ({ value = [], onChange }) => {
  const handleChange = <K extends keyof DealOption>(
  idx: number,
  field: K,
  val: DealOption[K]
) => {
  const updated = value.map((opt, i) =>
    i === idx ? { ...opt, [field]: val } : opt
  );
  onChange(updated);
};

  const handleAdd = () => {
    if (typeof onChange === "function") {
      onChange([...value, emptyOption()]);
    }
  };

  const handleRemove = (idx: number) => {
    if (typeof onChange === "function") {
      const updated = value.filter((_, i) => i !== idx);
      onChange(updated);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Create Deal Options</h2>
      {value.map((option, idx) => (
        <div key={idx} className="border p-4 rounded mb-4 bg-white shadow-sm relative">
          <button
            type="button"
            className="absolute top-2 right-2 text-red-500 hover:text-red-700"
            onClick={() => handleRemove(idx)}
            disabled={value.length === 1}
            title="Remove option"
          >
            <FaTrash />
          </button>
          <div className="flex flex-col md:flex-row md:space-x-4">
            <div className="flex-1 mb-2 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={option.title}
                onChange={(e) => handleChange(idx, "title", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                placeholder="Deal title"
              />
            </div>
            <div className="flex-1 mb-2 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
              <input
                type="text"
                value={option.originalPrice}
                onChange={(e) => handleChange(idx, "originalPrice", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                placeholder="e.g. 1000"
              />
            </div>
            <div className="flex-1 mb-2 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">Discount (%)</label>
              <input
                type="text"
                value={option.discountPercentage}
                onChange={(e) => handleChange(idx, "discountPercentage", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                placeholder="e.g. 10"
              />
            </div>
            <div className="flex-1 mb-2 md:mb-0">
              <label className="block text-sm font-medium text-gray-700 mb-1">Discounted Price</label>
              <input
                type="text"
                value={option.discountedPrice}
                onChange={(e) => handleChange(idx, "discountedPrice", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                placeholder="e.g. 900"
              />
            </div>
          </div>

        </div>
      ))}
      <button
        type="button"
        className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        onClick={handleAdd}
      >
        <FaPlus /> Add Option
      </button>
    </div>
  );
};

export default DealOptionsBuilder;
