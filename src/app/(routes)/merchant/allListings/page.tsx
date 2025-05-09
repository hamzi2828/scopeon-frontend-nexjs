'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface BusinessType {
  _id: string;
  name: string;
  description?: string;
}

interface Listing {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  highlights?: string;  
  amenities?: string[];
  photos?: string[];
  isFeature?: boolean;
  businessName?: string;
  address?: string;
  businessType?: BusinessType | string;
  phone?: string;
}
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;  // Replace with your API base URL

const AllListingsPage = () => {
  const router = useRouter();
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [toggleLoading, setToggleLoading] = useState<string | null>(null);

  // Delete listing function
  const deleteListing = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this listing?')) return;
    try {
      const res = await fetch(`${API_BASE_URL}/listings/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete listing');
      setListings(prev => prev.filter(listing => listing._id !== id));
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Error deleting listing');
    }
  };

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/listings/getAll/listings`, {
            method: "GET",
          });
        if (!res.ok) throw new Error('Failed to fetch listings');
        const data = await res.json();
        setListings(data);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message || 'Error fetching listings' : 'Error fetching listings');
      } finally {
        setLoading(false);
      }
    };
    fetchListings();
  }, []);
  
  const toggleFeature = async (id: string) => {
    try {
      setToggleLoading(id);
      const res = await fetch(`${API_BASE_URL}/listings/toggle-feature/${id}`, {
        method: 'PATCH',
      });
      
      if (!res.ok) throw new Error('Failed to toggle feature status');
      
      const data = await res.json();
      
      // Update the listings state with the new isFeature status
      setListings(prevListings => 
        prevListings.map(listing => 
          listing._id === id ? { ...listing, isFeature: data.isFeature } : listing
        )
      );
    } catch (err: unknown) {
      alert(err instanceof Error ? err.message : 'Error toggling feature status');
    } finally {
      setToggleLoading(null);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div style={{color:'red'}}>Error: {error}</div>;

  return (
    <div className="py-1 px-1 bg-gray-50 min-h-screen">
      <div className="max-w-full mx-auto">
        <h1 className="text-xl font-bold mb-1 text-gray-900">All Listings</h1>
        <p className="text-gray-600 mb-2 text-xs">Manage your business listings. Edit, feature, or delete as needed.</p>
        <div className="overflow-x-auto rounded-md shadow bg-white">
          <table className="min-w-full divide-y divide-gray-200 text-xs">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Title</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Slug</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Business Name</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Address</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Type</th>
                <th className="px-2 py-2 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Phone</th>
                <th className="px-2 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Featured</th>
                <th className="px-2 py-2 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider whitespace-nowrap">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {listings.map((listing, idx) => (
                <tr
                  key={listing._id}
                  className={
                    idx % 2 === 0 ? "bg-white hover:bg-orange-50 transition" : "bg-gray-50 hover:bg-orange-50 transition"
                  }
                >
                  <td className="px-2 py-1 max-w-xs truncate" title={listing.title}>{listing.title}</td>
                  <td className="px-2 py-1 max-w-xs truncate" title={listing.slug}>{listing.slug}</td>
                  <td className="px-2 py-1 max-w-xs truncate" title={listing.businessName}>{listing.businessName || '-'}</td>
                  <td className="px-2 py-1 max-w-xs truncate" title={listing.address}>{listing.address || '-'}</td>
                  <td className="px-2 py-1 max-w-xs truncate" title={typeof listing.businessType === 'object' && listing.businessType?.name ? listing.businessType.name : typeof listing.businessType === 'string' && listing.businessType ? listing.businessType : '-'}>
                    {typeof listing.businessType === 'object' && listing.businessType?.name
                      ? listing.businessType.name
                      : typeof listing.businessType === 'string' && listing.businessType
                      ? listing.businessType
                      : '-'}
                  </td>
                  <td className="px-2 py-1 max-w-xs truncate" title={listing.phone}>{listing.phone || '-'}</td>
                  <td className="px-2 py-1 text-center">
                    <button
                      onClick={() => toggleLoading !== listing._id && toggleFeature(listing._id)}
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold transition focus:outline-none focus:ring-1 focus:ring-offset-1 focus:ring-orange-500 ${listing.isFeature ? 'bg-green-100 text-green-700 border border-green-300' : 'bg-gray-200 text-gray-700 border border-gray-300'} ${toggleLoading === listing._id ? 'opacity-60 cursor-wait' : 'hover:bg-orange-100 cursor-pointer'}`}
                      disabled={toggleLoading === listing._id}
                    >
                      <span
                        className={`inline-block w-2 h-2 rounded-full mr-1 ${listing.isFeature ? 'bg-green-500' : 'bg-gray-400'}`}
                      ></span>
                      {toggleLoading === listing._id ? 'Updating...' : (listing.isFeature ? 'On' : 'Off')}
                    </button>
                  </td>
                  <td className="px-2 py-1 text-center">
                    <button
                      onClick={() => router.push(`/merchant/editListing/${listing._id}`)}
                      className="mr-1 px-2 py-1 bg-blue-600 hover:bg-blue-700 text-white rounded shadow text-xs font-semibold transition"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteListing(listing._id)}
                      className="px-2 py-1 bg-red-600 hover:bg-red-700 text-white rounded shadow text-xs font-semibold transition"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllListingsPage;