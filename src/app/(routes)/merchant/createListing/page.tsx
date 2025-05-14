"use client";

import React, { useState } from "react";
import UploadPhotos from "./components/UploadPhotos";
import Amenities from "./components/Amenities";
import Description from "./components/Description";
import Highlights from "./components/Highlights";
import DealOptionsBuilder from "./components/DealOptionsBuilder";
import PromoCodeSection from "./components/PromoCodeSection";
import SalePeriodSection from "./components/SalePeriodSection";
import BadgeToggles from "./components/BadgeToggles";
import MetaFields from "./components/MetaFields";
import BusinessTypeDropdown from "./components/BusinessTypeDropdown";
import { createListing, prepareListingFormData } from "./services/listingService";
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

const CreateListing = () => {
  const [businessType, setBusinessType] = useState("");
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [amenities, setAmenities] = useState<string[]>([""]);
  const [photos, setPhotos] = useState<File[]>([]);
  const [dealOptions, setDealOptions] = useState([initialDealOption]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [metaSchema, setMetaSchema] = useState<string[]>([""]);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

    try {
      // Prepare listing data using service
      const listingData = {
        title,
        description,
        highlights,
        phone,
        website,
        address,
        city,
        area,
        postalCode,
        metaTitle,
        metaDescription,
        metaSchema,
        businessName,
        businessType,
        amenities,
        dealOptions,
        showBestRated,
        showBought,
        showSellingFast,
        startSaleDate,
        endSaleDate,
        promoCode,
        promoDiscount,
        promoType,
        promoValidUntil
      };

      // Use the service to prepare form data and create listing
      const formData = prepareListingFormData(listingData, photos);
      const result = await createListing(formData);

      setSuccess(result.message || "Listing created successfully!");
      
      // Reset form
      setDescription("");
      setHighlights("");
      setAmenities([""]);
      setPhotos([]);
      setDealOptions([initialDealOption]);
      setTitle("");
      setPhone("");
      setWebsite("");
      setBusinessName("");
      setBusinessType("");
      setAddress("");
      setCity("");
      setArea("");
      setPostalCode("");
      setMetaTitle("");
      setMetaDescription("");
      setMetaSchema([""]);
      setShowBestRated(false);
      setShowBought(false);
      setShowSellingFast(false);
      setStartSaleDate("");
      setEndSaleDate("");
      setPromoCode("");
      setPromoDiscount("");
      setPromoType("percent");
      setPromoValidUntil("");
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Error creating listing");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 space-y-8">
        {/* Header Section */}
        <div className="border-b pb-6">
          <h1 className="text-3xl font-bold mb-2 text-gray-900">Create Your Listing</h1>
          <p className="text-gray-600 text-lg">Fill in the details below to showcase your business and attract more customers.</p>
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
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="w-full md:w-1/2">
              <BusinessTypeDropdown value={businessType} onChange={setBusinessType} />
            </div>
            <div className="w-full md:w-1/2">
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
          </div>

          <div className="mb-6">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
            <input
              id="address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Enter street address"
              className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">City</label>
              <input
                id="city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
            <div>
              <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Area</label>
              <input
                id="area"
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
                placeholder="Enter area/district"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
            <div>
              <label htmlFor="postalCode" className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
              <input
                id="postalCode"
                type="text"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                placeholder="Enter postal/ZIP code"
                className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                required
              />
            </div>
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
          
          <UploadPhotos value={photos} onChange={setPhotos} />
        </div>

        {/* Submit Section */}
        <div className="pt-8 border-t mt-8">
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {success}
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 text-lg font-medium flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating your listing...
              </>
            ) : (
              "Create Listing"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateListing;