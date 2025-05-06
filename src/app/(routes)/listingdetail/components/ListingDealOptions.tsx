import React from "react";
import { FaGift } from "react-icons/fa";

interface DealOption {
  _id?: string;
  id?: string;
  title: string;
  originalPrice: string;
  discountedPrice?: string;
  finalPrice?: string;
  discountPercentage?: string;
  extraOffer?: string;
  finalDiscountedPrice?: string;
  codeInfo?: string;
  purchaseInfo?: string;
  giftIcon?: boolean;
}

interface SpaOption extends DealOption {
  giftIcon: boolean;
}

interface Props {
  dealOptions?: DealOption[];
  spaOptions: SpaOption[];
}

const ListingDealOptions: React.FC<Props> = ({ dealOptions, spaOptions }) => {
  const options = dealOptions && dealOptions.length > 0 ? dealOptions : spaOptions;
  return (
    <div className="p-3 bg-gray-200 rounded-lg">
      {options.map((option, idx) => {
        const dummy = spaOptions[idx % spaOptions.length];
        return (
          <label
            key={option._id || option.id || idx}
            htmlFor={option._id || option.id || `option-${idx}`}
            className="border border-blue-300 rounded-lg py-2 px-4 bg-white shadow-sm block cursor-pointer my-1"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="radio"
                  name="option"
                  id={option._id || option.id || `option-${idx}`}
                  className="mr-2"
                />
                <span className="font-semibold text-gray-800">
                  {option.title || dummy.title}
                </span>
              </div>
              {(option.giftIcon ?? dummy.giftIcon) && <FaGift className="text-gray-400" />}
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-sm line-through text-gray-500 mr-2">
                  {option.originalPrice || dummy.originalPrice}
                </span>
                <span className="text-sm text-green-600 font-semibold">
                  {option.discountedPrice || dummy.discountedPrice}
                </span>
              </div>
            </div>
            <div className="text-lg font-bold text-red-600">
              {option.finalPrice || dummy.finalPrice}{" "}
              <span className="text-sm text-gray-600">
                {option.discountPercentage || dummy.discountPercentage}
              </span>
            </div>
            <div className="text-sm text-red-600">
              {option.extraOffer || dummy.extraOffer}
            </div>
            <div className="text-sm text-purple-600">
              {option.finalDiscountedPrice || dummy.finalDiscountedPrice}{" "}
              <span className="text-gray-600">{option.codeInfo || dummy.codeInfo}</span>
            </div>
            <div className="text-sm text-gray-500">
              {option.purchaseInfo || dummy.purchaseInfo}
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default ListingDealOptions;
