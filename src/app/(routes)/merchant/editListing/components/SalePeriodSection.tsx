import React from "react";

interface SalePeriodSectionProps {
  startSaleDate: string;
  setStartSaleDate: (v: string) => void;
  endSaleDate: string;
  setEndSaleDate: (v: string) => void;
}

const SalePeriodSection: React.FC<SalePeriodSectionProps> = ({
  startSaleDate,
  setStartSaleDate,
  endSaleDate,
  setEndSaleDate,
}) => (
  <div className="mb-4 bg-gray-50 rounded p-4 flex flex-col space-y-2">
    <div className="flex flex-col md:flex-row md:space-x-4">
      <div className="flex-1 mb-2 md:mb-0">
        <label className="block text-sm font-medium text-gray-700 mb-1">Start Sale Date</label>
        <input
          type="date"
          value={startSaleDate}
          onChange={(e) => setStartSaleDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
        />
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">End Sale Date</label>
        <input
          type="date"
          value={endSaleDate}
          onChange={(e) => setEndSaleDate(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
        />
      </div>
    </div>
  </div>
);

export default SalePeriodSection;
