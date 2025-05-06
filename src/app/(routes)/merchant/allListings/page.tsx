'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface Listing {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  highlights?: string;  
  amenities?: string[];
  photos?: string[];
  isFeature?: boolean;
  // Add other fields as needed
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
    <div style={{ padding: 24 }}>
      <h1>All Listings</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 20 }}>
        <thead>
          <tr style={{ background: '#f0f0f0' }}>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Title</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Slug</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Description</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Featured</th>
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing._id}>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{listing.title}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{listing.slug}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{listing.description?.slice(0, 40)}...</td>
              <td style={{ border: '1px solid #ccc', padding: 8, textAlign: 'center' }}>
                <div 
                  onClick={() => toggleLoading !== listing._id && toggleFeature(listing._id)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    cursor: toggleLoading === listing._id ? 'wait' : 'pointer',
                    opacity: toggleLoading === listing._id ? 0.7 : 1
                  }}
                >
                  <div style={{
                    position: 'relative',
                    width: '40px',
                    height: '20px',
                    backgroundColor: listing.isFeature ? '#4CAF50' : '#ccc',
                    borderRadius: '10px',
                    transition: 'background-color 0.3s',
                    marginRight: '8px'
                  }}>
                    <div style={{
                      position: 'absolute',
                      left: listing.isFeature ? '20px' : '0px',
                      top: '0px',
                      width: '20px',
                      height: '20px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      transition: 'left 0.3s',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
                    }}></div>
                  </div>
                  <span style={{ fontSize: '14px' }}>
                    {toggleLoading === listing._id ? 'Updating...' : (listing.isFeature ? 'On' : 'Off')}
                  </span>
                </div>
              </td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <button 
                  onClick={() => router.push(`/merchant/editListing/${listing._id}`)} 
                  style={{
                    marginRight: 8,
                    padding: '6px 12px',
                    backgroundColor: '#4285F4',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Edit
                </button>
                <button 
                  onClick={() => deleteListing(listing._id)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#DC3545',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllListingsPage;
