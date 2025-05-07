import React from "react";

interface BadgeTogglesProps {
  showBestRated: boolean;
  setShowBestRated: (v: boolean) => void;
  showBought: boolean;
  setShowBought: (v: boolean) => void;
  showSellingFast: boolean;
  setShowSellingFast: (v: boolean) => void;
}

const BadgeToggles: React.FC<BadgeTogglesProps> = ({
  showBestRated,
  setShowBestRated,
  showBought,
  setShowBought,
  showSellingFast,
  setShowSellingFast,
}) => (
  <div className="mb-4 bg-gray-50 rounded p-4 flex flex-col space-y-2">
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={showBestRated}
          onChange={(e) => setShowBestRated(e.target.checked)}
          className="sr-only"
        />
        <div className={`block w-12 h-7 rounded-full ${showBestRated ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition ${showBestRated ? 'transform translate-x-5' : ''}`}
        ></div>
      </div>
      <span className="ml-3 text-sm text-yellow-700">Show &quot;Best Rated&quot; Badge</span>
    </label>
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={showBought}
          onChange={(e) => setShowBought(e.target.checked)}
          className="sr-only"
        />
        <div className={`block w-12 h-7 rounded-full ${showBought ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition ${showBought ? 'transform translate-x-5' : ''}`}
        ></div>
      </div>
      <span className="ml-3 text-sm text-red-700">Show &quot;10,000+ Bought&quot; Badge</span>
    </label>
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={showSellingFast}
          onChange={(e) => setShowSellingFast(e.target.checked)}
          className="sr-only"
        />
        <div className={`block w-12 h-7 rounded-full ${showSellingFast ? 'bg-green-500' : 'bg-gray-300'}`}></div>
        <div
          className={`dot absolute left-1 top-1 bg-white w-5 h-5 rounded-full transition ${showSellingFast ? 'transform translate-x-5' : ''}`}
        ></div>
      </div>
      <span className="ml-3 text-sm text-gray-700">Show &quot;Selling fast!&quot; Badge</span>
    </label>
  </div>
);

export default BadgeToggles;
