'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import UploadPhotos from './components/UploadPhotos';
import Amenities from './components/Amenities';
import Description from './components/Description';
import Highlights from './components/Highlights';
import DealOptionsBuilder from './components/DealOptionsBuilder';

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
  dealOptions?: DealOption[];
  isFeature?: boolean;
  // Add other fields as needed
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
  const [description, setDescription] = useState("");
  const [highlights, setHighlights] = useState("");
  const [amenities, setAmenities] = useState<string[]>([""]);  
  const [dealOptions, setDealOptions] = useState([initialDealOption]);
  const [photos, setPhotos] = useState<File[]>([]);
  const [existingPhotos, setExistingPhotos] = useState<string[]>([]);
  const [photosToRemove, setPhotosToRemove] = useState<number[]>([]);

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
        setDescription(data.description || '');
        setHighlights(data.highlights || '');
        setAmenities(Array.isArray(data.amenities) && data.amenities.length > 0 ? data.amenities : [""]);
        setDealOptions(Array.isArray(data.dealOptions) && data.dealOptions.length > 0 ? data.dealOptions : [initialDealOption]);
        
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
      const formData = new FormData();
      formData.append("title", title);
      formData.append("phone", phone);
      formData.append("website", website);
      formData.append("description", description);
      formData.append("highlights", highlights);
      formData.append("amenities", JSON.stringify(amenities));
      formData.append("dealOptions", JSON.stringify(dealOptions));
      
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
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4 space-y-4">
      <div className="max-w-3xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-2 text-gray-900">Edit Your Listing</h1>
        <p className="text-gray-600 mb-4 text-lg">Update the details below to showcase your business and attract more customers.</p>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Enter listing title"
          className="w-full border border-gray-300 rounded-md p-2 mb-4 text-gray-900 text-lg"
          required
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label htmlFor="phone" className="block text-gray-700 mb-1">Phone Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              placeholder="Enter phone number"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
              required
            />
          </div>
          
          <div>
            <label htmlFor="website" className="block text-gray-700 mb-1">Website</label>
            <input
              id="website"
              type="url"
              value={website}
              onChange={e => setWebsite(e.target.value)}
              placeholder="Enter website URL (e.g., https://example.com)"
              className="w-full border border-gray-300 rounded-md p-2 text-gray-900"
              required
            />
          </div>
        </div>
      </div>
      
      <Description value={description} onChange={setDescription} />
      <Highlights value={highlights} onChange={setHighlights} />
      <Amenities value={amenities} onChange={setAmenities} />
      <DealOptionsBuilder value={dealOptions} onChange={setDealOptions} />
      <UploadPhotos 
        value={photos} 
        onChange={setPhotos} 
        existingPhotos={filteredExistingPhotos} 
        onRemoveExisting={handleRemoveExistingPhoto} 
      />
      
      <div className="max-w-3xl mx-auto p-4">
        <button
          type="submit"
          disabled={saving}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mr-4"
        >
          {saving ? "Updating..." : "Update Listing"}
        </button>
        
        <button
          type="button"
          onClick={() => router.push('/merchant/allListings')}
          className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
        >
          Cancel
        </button>
        
        {success && <div className="text-green-600 mt-4">{success}</div>}
        {error && <div className="text-red-600 mt-4">{error}</div>}
      </div>
    </form>
  );
};

export default EditListingPage;
