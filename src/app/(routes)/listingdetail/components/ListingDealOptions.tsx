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
  discountType?: 'percentage' | 'flat';
}

interface Props {
  dealOptions?: DealOption[];
  promoCode?: string;
  promoDiscount?: number;
  promoType?: string;
}

const ListingDealOptions: React.FC<Props> = ({ dealOptions, promoCode, promoDiscount, promoType }) => {
  // Calculate the price after applying promo code discount
  const calculatePriceWithPromo = (finalPrice: string, discount: number, type?: string): string => {
    const price = parseFloat(finalPrice);
    if (isNaN(price)) return '0.00';
    
    let finalPriceAfterPromo = price;
    
    if (type === 'percent') {
      // Apply percentage discount
      finalPriceAfterPromo = price - (price * discount / 100);
    } else {
      // Apply flat discount
      finalPriceAfterPromo = price - discount;
    }
    
    // Ensure price is never negative
    finalPriceAfterPromo = Math.max(0, finalPriceAfterPromo);
    
    return finalPriceAfterPromo.toFixed(2);
  };
  
  const options = dealOptions || [];
  return (
    <div className="p-3 bg-gray-200 rounded-lg">
      {options.length > 0 ? options.map((option, idx) => (
        
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
                  {option.title}
                </span>
              </div>
              {option.giftIcon && <FaGift className="text-gray-400" />}
            </div>
            <div>
              <div className="flex items-center">
                <span className="text-sm line-through text-gray-500 mr-2">
                  RS {option.originalPrice}
                </span>
                <span className="text-sm text-green-600 font-semibold">
                  RS {option.discountedPrice || option.finalPrice}
                </span>
              </div>
            </div>
            <div className="text-lg font-bold text-red-600">
              RS {option.finalPrice}{" "}
              <span className="text-sm text-gray-600">
                {option.discountType === 'percentage' ? `${option.discountPercentage || ''}% off` : ''}
              </span>
            </div>
            <div className="text-sm text-red-600">
              {promoDiscount && promoCode 
                ? `Extra ${promoType === 'percent' ? `${promoDiscount}% off` : `RS ${promoDiscount} off`}` 
                : (option.extraOffer || '')}
            </div>
            <div className="text-sm text-purple-600">
              {promoDiscount && promoCode && option.finalPrice ? (
                <>
                  RS {calculatePriceWithPromo(option.finalPrice, promoDiscount, promoType)}
                  <span className="text-gray-600"> with code {promoCode}</span>
                </>
              ) : (
                <>
                  {option.finalDiscountedPrice && `RS ${option.finalDiscountedPrice}`}{" "}
                  {promoCode && <span className="text-gray-600">with code {promoCode}</span>}
                </>
              )}
            </div>
            <div className="text-sm text-gray-500">
              {option.purchaseInfo || ''}
            </div>
          </label>
      )) : (
        <div className="text-center py-4 text-gray-600">No deal options available</div>
      )}
    </div>
  );
};

export default ListingDealOptions;
