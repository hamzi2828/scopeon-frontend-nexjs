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
  discountType: 'percentage' | 'flat';
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
  discountType: 'percentage',
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
              <input
                type="text"
                value={option.title}
                onChange={(e) => handleChange(idx, "title", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                placeholder="Deal title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Original Price</label>
              <input
                type="text"
                value={option.originalPrice}
                onChange={(e) => handleChange(idx, "originalPrice", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                placeholder="e.g. 1000"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Discount Type</label>
              <select
                value={option.discountType}
                onChange={(e) => handleChange(idx, "discountType", e.target.value as 'percentage' | 'flat')}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
              >
                <option value="percentage">Percentage (%)</option>
                <option value="flat">Flat Amount</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {option.discountType === 'percentage' ? 'Discount (%)' : 'Discount Amount'}
              </label>
              <input
                type="text"
                value={option.discountPercentage}
                onChange={(e) => handleChange(idx, "discountPercentage", e.target.value)}
                className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
                placeholder={option.discountType === 'percentage' ? 'e.g. 10' : 'e.g. 100'}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Final Price</label>
              <input
                type="text"
                value={
                  (() => {
                    const price = parseFloat(option.originalPrice || "0");
                    const discount = parseFloat(option.discountPercentage || "0");
                    if (isNaN(price) || isNaN(discount)) return "";
                    
                    const total = option.discountType === 'percentage'
                      ? price - (price * discount / 100)
                      : price - discount;
                      
                    return `RS ${Math.max(0, total).toFixed(2)}`;
                  })()
                }
                disabled
                className="w-full border border-green-300 bg-green-50 rounded-md p-2 text-green-700 font-semibold"
                placeholder="Calculated price"
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
