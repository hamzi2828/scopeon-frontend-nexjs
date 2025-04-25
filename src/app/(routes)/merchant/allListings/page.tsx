'use client';
import React, { useEffect, useState } from 'react';

interface Listing {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  highlights?: string;  
  amenities?: string[];
  photos?: string[];
  // Add other fields as needed
}
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;  // Replace with your API base URL

const AllListingsPage = () => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
            <th style={{ border: '1px solid #ccc', padding: 8 }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {listings.map(listing => (
            <tr key={listing._id}>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{listing.title}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{listing.slug}</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>{listing.description?.slice(0, 40)}...</td>
              <td style={{ border: '1px solid #ccc', padding: 8 }}>
                <button onClick={() => alert(`Viewing ${listing.title}`)} style={{marginRight:8}}>View</button>
                {/* Add more actions like Edit/Delete as needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllListingsPage;
