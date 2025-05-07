import React from "react";

interface PromoCodeSectionProps {
  promoCode: string;
  setPromoCode: (v: string) => void;
  promoDiscount: string;
  setPromoDiscount: (v: string) => void;
  promoType: string;
  setPromoType: (v: string) => void;
  promoValidUntil: string;
  setPromoValidUntil: (v: string) => void;
}

const PromoCodeSection: React.FC<PromoCodeSectionProps> = ({
  promoCode,
  setPromoCode,
  promoDiscount,
  setPromoDiscount,
  promoType,
  setPromoType,
  promoValidUntil,
  setPromoValidUntil,
}) => (
  <div className="mb-4 bg-gray-50 rounded p-4 flex flex-col space-y-2">
    <div className="flex flex-col md:flex-row md:space-x-4">
      <div className="flex-1 mb-2 md:mb-0">
        <label className="block text-sm font-medium text-gray-700 mb-1">Promo Code</label>
        <input
          type="text"
          value={promoCode}
          onChange={(e) => setPromoCode(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
          placeholder="Enter promo code (optional)"
        />
      </div>
      <div className="flex-1 mb-2 md:mb-0">
        <label className="block text-sm font-medium text-gray-700 mb-1">Discount Amount</label>
        <input
          type="number"
          min="0"
          value={promoDiscount}
          onChange={(e) => setPromoDiscount(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
          placeholder={promoType === 'percent' ? "e.g. 10 for 10% off" : "e.g. 100 for $100 off"}
        />
      </div>
      <div className="flex-1 mb-2 md:mb-0">
        <label className="block text-sm font-medium text-gray-700 mb-1">Promo Type</label>
        <select
          value={promoType}
          onChange={(e) => setPromoType(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
        >
          <option value="percent">Percent (%)</option>
          <option value="flat">Flat</option>
        </select>
      </div>
      <div className="flex-1">
        <label className="block text-sm font-medium text-gray-700 mb-1">Valid Until</label>
        <input
          type="date"
          value={promoValidUntil}
          onChange={(e) => setPromoValidUntil(e.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
        />
      </div>
    </div>
  </div>
);

export default PromoCodeSection;
