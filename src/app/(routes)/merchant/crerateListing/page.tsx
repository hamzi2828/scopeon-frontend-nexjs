"use client";

import React, { useState } from "react";
import UploadPhotos from "./components/UploadPhotos";
import Amenities from "./components/Amenities";
import Description from "./components/Description";
import Highlights from "./components/Highlights";
import DealOptionsBuilder from "./components/DealOptionsBuilder";
import { FaSpinner } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
};

const CreateListing = () => {
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [amenities, setAmenities] = useState<string[]>([""]);
  const [photos, setPhotos] = useState<File[]>([]);
  const [dealOptions, setDealOptions] = useState([initialDealOption]);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("highlights", highlights);
    formData.append("amenities", JSON.stringify(amenities));
    formData.append("dealOptions", JSON.stringify(dealOptions));
    photos.forEach((photo) => {
      formData.append("photos", photo);
    });

    try {
      const res = await fetch("http://localhost:3001/listings/create", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error(
          (await res.json()).message || "Failed to create listing"
        );
      }
      toast.success("Listing created successfully!");
    } catch (err: unknown) {
      const errMessage = (err as Error).message || "Something went wrong";
      toast.error(errMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer position="top-right" autoClose={5000} />

      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">
            Create Your Listing
          </h1>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            Fill in the details below to showcase your business and attract more
            customers
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="lg:grid lg:grid-cols-12 lg:gap-6">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title Section */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Listing Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter an attractive title for your listing"
                  className="w-full border border-gray-300 rounded-md p-2.5 text-gray-900 text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Photos Section */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                  Photos
                </h2>
                <UploadPhotos value={photos} onChange={setPhotos} />
              </div>

              {/* Description Section */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                  Description
                </h2>
                <Description value={description} onChange={setDescription} />
              </div>

              {/* Highlights Section */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                  Highlights
                </h2>
                <Highlights value={highlights} onChange={setHighlights} />
              </div>

              {/* Amenities Section */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                  Amenities
                </h2>
                <Amenities value={amenities} onChange={setAmenities} />
              </div>

              {/* Deal Options Section */}
              <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6">
                <h2 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                  Deal Options
                </h2>
                <DealOptionsBuilder
                  value={dealOptions}
                  onChange={setDealOptions}
                />
              </div>
            </form>
          </div>

          {/* Sidebar - Converts to bottom section on mobile */}
          <div className="lg:col-span-4 mt-6 lg:mt-0">
            <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 lg:sticky lg:top-6">
              <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-4">
                Listing Summary
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4">
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Title</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900 truncate">
                      {title || "Not set"}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">Photos</p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">
                      {photos.length} uploaded
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-600">
                      Deal Options
                    </p>
                    <p className="text-xs sm:text-sm font-medium text-gray-900">
                      {dealOptions.length} options
                    </p>
                  </div>
                </div>

                {/* Mobile Submit Button - Fixed to bottom */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t lg:hidden z-10">
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Creating...
                      </>
                    ) : (
                      "Create Listing"
                    )}
                  </button>
                </div>

                {/* Desktop Submit Button */}
                <div className="hidden lg:block">
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={handleSubmit}
                    className="w-full bg-blue-600 text-white px-4 py-2.5 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <FaSpinner className="animate-spin mr-2" />
                        Creating...
                      </>
                    ) : (
                      "Create Listing"
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateListing;
