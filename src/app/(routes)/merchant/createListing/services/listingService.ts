/**
 * Listing Service
 * Handles all API calls related to merchant listings
 */

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

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

export interface Listing {
  _id?: string;
  title: string;
  slug?: string;
  description?: string;
  highlights?: string;
  amenities?: string[];
  photos?: string[] | File[];
  phone?: string;
  website?: string;
  address?: string;
  city?: string;
  area?: string;
  postalCode?: string;
  businessName?: string;
  businessType?: string | { _id: string };
  dealOptions?: DealOption[];
  isFeature?: boolean;
  showBestRated?: boolean;
  showBought?: boolean;
  showSellingFast?: boolean;
  startSaleDate?: string;
  endSaleDate?: string;
  promoCode?: string;
  promoDiscount?: string;
  promoType?: string;
  promoValidUntil?: string;
  metaTitle?: string;
  metaDescription?: string;
  metaSchema?: string[];
}

/**
 * Calculate pricing for deal options
 */
export const calculateDealOptions = (dealOptions: DealOption[]): DealOption[] => {
  return dealOptions.map(option => {
    const originalPrice = parseFloat(option.originalPrice || "0");
    const discountValue = parseFloat(option.discountPercentage || "0");
    let discountedPrice = 0;
    
    if (option.discountType === 'percentage') {
      discountedPrice = originalPrice - (originalPrice * discountValue / 100);
    } else { // flat discount
      discountedPrice = originalPrice - discountValue;
    }
    
    // Ensure price is never negative
    discountedPrice = Math.max(0, discountedPrice);
    
    return {
      ...option,
      discountedPrice: discountedPrice.toFixed(2),
      finalPrice: discountedPrice.toFixed(2),
      finalDiscountedPrice: discountedPrice.toFixed(2)
    };
  });
};

/**
 * Format date for input fields (YYYY-MM-DD)
 */
export const formatDateForInput = (dateStr?: string): string => {
  if (!dateStr) return '';
  return new Date(dateStr).toISOString().split('T')[0];
};

/**
 * Create a new listing
 */
export const createListing = async (
  formData: FormData
): Promise<{ success: boolean, message: string, listing?: Listing }> => {
  const res = await fetch(`${API_BASE_URL}/listings/create`, {
    method: 'POST',
    body: formData,
  });
  
  const data = await res.json();
  
  if (!res.ok) {
    throw new Error(data.message || 'Failed to create listing');
  }
  
  return {
    success: true,
    message: 'Listing created successfully!',
    listing: data.listing
  };
};

/**
 * Prepare form data for listing creation
 */
export const prepareListingFormData = (
  listingData: {
    title: string;
    phone: string;
    website: string;
    description: string;
    highlights: string;
    businessName: string;
    businessType: string; 
    address: string;
    city: string;
    area: string;
    postalCode: string;
    metaTitle: string;
    metaDescription: string;
    metaSchema: string[];
    amenities: string[];
    dealOptions: DealOption[];
    showBestRated: boolean;
    showBought: boolean;
    showSellingFast: boolean;
    startSaleDate: string;
    endSaleDate: string;
    promoCode: string;
    promoDiscount: string;
    promoType: string;
    promoValidUntil: string;
  },
  photos: File[]
): FormData => {
  const formData = new FormData();
  
  // Add basic fields
  formData.append("title", listingData.title);
  formData.append("phone", listingData.phone);
  formData.append("website", listingData.website);
  formData.append("description", listingData.description);
  formData.append("highlights", listingData.highlights);
  formData.append("businessName", listingData.businessName);
  formData.append("businessType", listingData.businessType);
  formData.append("address", listingData.address);
  formData.append("city", listingData.city);
  formData.append("area", listingData.area);
  formData.append("postalCode", listingData.postalCode);
  
  // Add meta fields
  formData.append("metaTitle", listingData.metaTitle);
  formData.append("metaDescription", listingData.metaDescription);
  formData.append("metaSchema", JSON.stringify(listingData.metaSchema));
  
  // Add arrays and objects
  formData.append("amenities", JSON.stringify(listingData.amenities));
  
  // Calculate and add deal options
  const calculatedDealOptions = calculateDealOptions(listingData.dealOptions);
  formData.append("dealOptions", JSON.stringify(calculatedDealOptions));
  
  // Add badge toggles
  formData.append("showBestRated", JSON.stringify(listingData.showBestRated));
  formData.append("showBought", JSON.stringify(listingData.showBought));
  formData.append("showSellingFast", JSON.stringify(listingData.showSellingFast));
  
  // Add sale period
  formData.append("startSaleDate", listingData.startSaleDate);
  formData.append("endSaleDate", listingData.endSaleDate);
  
  // Add promo code
  formData.append("promoCode", listingData.promoCode);
  formData.append("promoDiscount", listingData.promoDiscount);
  formData.append("promoType", listingData.promoType);
  formData.append("promoValidUntil", listingData.promoValidUntil);
  
  // Add photos
  photos.forEach((photo) => {
    formData.append("photos", photo);
  });
  
  return formData;
};
