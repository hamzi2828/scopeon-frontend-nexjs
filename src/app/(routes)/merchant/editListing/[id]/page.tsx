'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UploadPhotos from './components/UploadPhotos';
import Amenities from './components/Amenities';
import Description from './components/Description';
import Highlights from './components/Highlights';
import DealOptionsBuilder from './components/DealOptionsBuilder';
import PromoCodeSection from './components/PromoCodeSection';
import SalePeriodSection from './components/SalePeriodSection';
import BadgeToggles from './components/BadgeToggles';
import MetaFields from './components/MetaFields';

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

interface Listing {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  highlights?: string;  
  amenities?: string[];
  photos?: string[];
  phone?: string;
  website?: string;
  address?: string;
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
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const initialDealOption = {
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
  discountType: 'percentage' as 'percentage' | 'flat',
};

const EditListingPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [listing, setListing] = useState<Listing | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string>("");
  const paramObj = React.use(params);
  const listingId = paramObj.id;
  
  // Form state
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaSchema, setMetaSchema] = useState<string[]>([""]);
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [amenities, setAmenities] = useState<string[]>([""]);  
  const [dealOptions, setDealOptions] = useState([initialDealOption]);
  const [photos, setPhotos] = useState<File[]>([]);
  const [existingPhotos, setExistingPhotos] = useState<string[]>([]);
  const [photosToRemove, setPhotosToRemove] = useState<number[]>([]);
  
  // Badge toggles
  const [showBestRated, setShowBestRated] = useState(false);
  const [showBought, setShowBought] = useState(false);
  const [showSellingFast, setShowSellingFast] = useState(false);
  
  // Sale period
  const [startSaleDate, setStartSaleDate] = useState("");
  const [endSaleDate, setEndSaleDate] = useState("");
  
  // Promo code
  const [promoCode, setPromoCode] = useState("");
  const [promoDiscount, setPromoDiscount] = useState("");
  const [promoType, setPromoType] = useState("percent");
  const [promoValidUntil, setPromoValidUntil] = useState("");

  useEffect(() => {
    const fetchListing = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/listings/${listingId}`, {
          method: 'GET',
        });
        
        if (!res.ok) throw new Error('Failed to fetch listing');
        
        const data = await res.json();
        setListing(data);
        
        // Initialize form data
        setTitle(data.title || '');
        setPhone(data.phone || '');
        setWebsite(data.website || '');
        setBusinessName(data.businessName || '');
        setAddress(data.address || '');
        setMetaTitle(data.metaTitle || '');
        setMetaDescription(data.metaDescription || '');
        setMetaSchema(Array.isArray(data.metaSchema) && data.metaSchema.length > 0 ? data.metaSchema : [""]);
        setDescription(data.description || '');
        setHighlights(data.highlights || '');
        setAmenities(Array.isArray(data.amenities) && data.amenities.length > 0 ? data.amenities : [""]);
        setDealOptions(Array.isArray(data.dealOptions) && data.dealOptions.length > 0 ? data.dealOptions : [initialDealOption]);
        
        // Set badge toggles
        setShowBestRated(data.showBestRated || false);
        setShowBought(data.showBought || false);
        setShowSellingFast(data.showSellingFast || false);
        
        // Set sale period - format dates for input fields (YYYY-MM-DD)
        setStartSaleDate(data.startSaleDate ? new Date(data.startSaleDate).toISOString().split('T')[0] : '');
        setEndSaleDate(data.endSaleDate ? new Date(data.endSaleDate).toISOString().split('T')[0] : '');
        
        // Set promo code
        setPromoCode(data.promoCode || '');
        setPromoDiscount(data.promoDiscount?.toString() || '');
        setPromoType(data.promoType || 'percent');
        setPromoValidUntil(data.promoValidUntil ? new Date(data.promoValidUntil).toISOString().split('T')[0] : '');
        
        // Set existing photos
        if (Array.isArray(data.photos) && data.photos.length > 0) {
          setExistingPhotos(data.photos);
        }
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'Error fetching listing');
      } finally {
        setLoading(false);
      }
    };
    
    fetchListing();
  }, [listingId]);

  const handleRemoveExistingPhoto = (index: number) => {
    setPhotosToRemove(prev => [...prev, index]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");
    setSuccess("");
    
    try {
      // Calculate all price fields for each deal option
      const calculatedDealOptions = dealOptions.map(option => {
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
      
      const formData = new FormData();
      formData.append("title", title);
      formData.append("phone", phone);
      formData.append("website", website);
      formData.append("description", description);
      formData.append("highlights", highlights);
      formData.append("businessName", businessName);
      formData.append("address", address);
      formData.append("metaTitle", metaTitle);
      formData.append("metaDescription", metaDescription);
      formData.append("metaSchema", JSON.stringify(metaSchema));
      formData.append("amenities", JSON.stringify(amenities));
      formData.append("dealOptions", JSON.stringify(calculatedDealOptions));
      
      // Add badge toggles
      formData.append("showBestRated", JSON.stringify(showBestRated));
      formData.append("showBought", JSON.stringify(showBought));
      formData.append("showSellingFast", JSON.stringify(showSellingFast));
      
      // Add sale period
      formData.append("startSaleDate", startSaleDate);
      formData.append("endSaleDate", endSaleDate);
      
      // Add promo code
      formData.append("promoCode", promoCode);
      formData.append("promoDiscount", promoDiscount);
      formData.append("promoType", promoType);
      formData.append("promoValidUntil", promoValidUntil);
      
      // Add new photos
      photos.forEach((photo) => {
        formData.append("photos", photo);
      });
      
      // Add photos to remove
      if (photosToRemove.length > 0) {
        formData.append("photosToRemove", JSON.stringify(photosToRemove));
      }
      
      const res = await fetch(`${API_BASE_URL}/listings/update/${listingId}`, {
        method: 'PATCH',
        body: formData,
      });
      
      if (!res.ok) {
        throw new Error((await res.json()).message || 'Failed to update listing');
      }
      
      setSuccess("Listing updated successfully!");
      
      // Navigate back to listings page after successful update
      setTimeout(() => {
        router.push('/merchant/allListings');
      }, 2000);
      
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Error updating listing');
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="max-w-3xl mx-auto p-4">Loading...</div>;
  if (error) return <div className="max-w-3xl mx-auto p-4 text-red-600">Error: {error}</div>;
  if (!listing) return <div className="max-w-3xl mx-auto p-4">Listing not found</div>;

  // Filter out removed photos
  const filteredExistingPhotos = existingPhotos.filter((_, index) => !photosToRemove.includes(index));

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-8">
        {/* Header Section */}
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Edit Your Listing</h1>
          <p className="text-gray-600 text-lg">Update the details below to showcase your business and attract more customers.</p>
        </div>

        {/* Basic Information Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-blue-600 h-8 w-1 rounded-full"></div>
            <h2 className="text-xl font-semibold text-gray-800">Basic Information</h2>
          </div>
          
          <div className="mb-6">
            <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">Listing Title</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter an attention-grabbing title"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              required
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter phone number"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Website</label>
              <input
                id="website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="Enter website URL (e.g., https://example.com)"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-1">Business Name</label>
            <input
              id="businessName"
              type="text"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
              placeholder="Enter business name"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Business Address</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter business address"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              required
            />
          </div>

          {/* Meta Fields Section */}
          <div className="mb-6">
            <MetaFields
              metaTitle={metaTitle}
              setMetaTitle={setMetaTitle}
              metaDescription={metaDescription}
              setMetaDescription={setMetaDescription}
              metaSchema={metaSchema}
              setMetaSchema={setMetaSchema}
            />
          </div>
        </div>

        {/* Promotions Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-green-500 h-8 w-1 rounded-full"></div>
            <h2 className="text-xl font-semibold text-gray-800">Promotions & Timing</h2>
          </div>
          
          {/* Promo Code Section */}
          <PromoCodeSection
            promoCode={promoCode}
            setPromoCode={setPromoCode}
            promoDiscount={promoDiscount}
            setPromoDiscount={setPromoDiscount}
            promoType={promoType}
            setPromoType={setPromoType}
            promoValidUntil={promoValidUntil}
            setPromoValidUntil={setPromoValidUntil}
          />
          
          {/* Sale Period */}
          <SalePeriodSection
            startSaleDate={startSaleDate}
            setStartSaleDate={setStartSaleDate}
            endSaleDate={endSaleDate}
            setEndSaleDate={setEndSaleDate}
          />
        </div>

        {/* Visibility Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-purple-500 h-8 w-1 rounded-full"></div>
            <h2 className="text-xl font-semibold text-gray-800">Visibility & Badges</h2>
          </div>
          
          {/* Badge Toggles */}
          <BadgeToggles
            showBestRated={showBestRated}
            setShowBestRated={setShowBestRated}
            showBought={showBought}
            setShowBought={setShowBought}
            showSellingFast={showSellingFast}
            setShowSellingFast={setShowSellingFast}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-amber-500 h-8 w-1 rounded-full"></div>
            <h2 className="text-xl font-semibold text-gray-800">Listing Content</h2>
          </div>
          
          <Description value={description} onChange={setDescription} />
          <Highlights value={highlights} onChange={setHighlights} />
          <Amenities value={amenities} onChange={setAmenities} />
        </div>

        {/* Deal Options Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-red-500 h-8 w-1 rounded-full"></div>
            <h2 className="text-xl font-semibold text-gray-800">Deal Options</h2>
          </div>
          
          <DealOptionsBuilder value={dealOptions} onChange={setDealOptions} />
        </div>

        {/* Photos Section */}
        <div className="space-y-6 pt-4">
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-teal-500 h-8 w-1 rounded-full"></div>
            <h2 className="text-xl font-semibold text-gray-800">Photos</h2>
          </div>
          
          <UploadPhotos 
            value={photos} 
            onChange={setPhotos} 
            existingPhotos={filteredExistingPhotos} 
            onRemoveExisting={handleRemoveExistingPhoto} 
          />
        </div>

        {/* Submit Section */}
        <div className="pt-8 border-t mt-8 flex flex-col space-y-4">
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {success}
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
          
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-3 sm:space-y-0">
            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 text-lg font-medium flex items-center justify-center"
            >
              {saving ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Updating listing...
                </>
              ) : (
                "Update Listing"
              )}
            </button>
            
            <button
              type="button"
              onClick={() => router.push('/merchant/allListings')}
              className="flex-1 bg-gray-200 text-gray-800 px-6 py-3 rounded-lg hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 transition duration-150 text-lg font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditListingPage;
