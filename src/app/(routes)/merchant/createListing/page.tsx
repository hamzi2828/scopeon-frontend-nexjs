"use client";

import React, { useState } from "react";
import UploadPhotos from "./components/UploadPhotos";
import Amenities from "./components/Amenities";
import Description from "./components/Description";
import Highlights from "./components/Highlights";
import DealOptionsBuilder from "./components/DealOptionsBuilder";
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
};

const CreateListing = () => {
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [amenities, setAmenities] = useState<string[]>([""]);
  const [photos, setPhotos] = useState<File[]>([]);
  const [dealOptions, setDealOptions] = useState([initialDealOption]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");

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
      const res = await fetch(`${API_BASE_URL}/listings/create`, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        throw new Error((await res.json()).message || "Failed to create listing");
      }
      setSuccess("Listing created successfully!");
    } catch (err: unknown) {
      const errMessage = (err as Error).message || "Something went wrong";
      setError(errMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 space-y-4">
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-2 text-gray-900">Create Your Listing</h1>
      <p className="text-gray-600 mb-4 text-lg">Fill in the details below to showcase your business and attract more customers.</p>
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Enter listing title"
        className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-900 text-lg"
      />
    </div>
      <Description value={description} onChange={setDescription} />
      <Highlights value={highlights} onChange={setHighlights} />
      <Amenities value={amenities} onChange={setAmenities} />
      <DealOptionsBuilder value={dealOptions} onChange={setDealOptions} />
      <UploadPhotos value={photos} onChange={setPhotos} />
      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Creating..." : "Create Listing"}
      </button>
      {success && <div className="text-green-600">{success}</div>}
      {error && <div className="text-red-600">{error}</div>}
    </form>
  );
};

export default CreateListing;