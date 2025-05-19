'use client';

import { useCallback, useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { FaStar, FaArrowLeft, FaEye, FaEyeSlash, FaEdit, FaTrash } from 'react-icons/fa';
import Image from 'next/image';
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Review {
  _id?: string;
  name: string;
  email: string;
  flexibility: number;
  qualityService: number;
  valueOfMoney: number;
  cleanliness: number;
  reviewText: string;
  photoUrls: string[];
  createdAt: string;
  isHidden?: boolean;
}

interface ListingDetails {
  _id: string;
  title: string;
  reviews: Review[];
}

export default function ListingReviews() {
  const router = useRouter();
  const params = useParams();
  const [listing, setListing] = useState<ListingDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [showHidden, setShowHidden] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [sortBy, setSortBy] = useState<'date' | 'rating'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const fetchListing = useCallback(async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/listings/${params.id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch listing');
      }
      const data = await response.json();
      setListing(data);
      setError('');
    } catch (err) {
      setError('Failed to load listing reviews');
      console.error('Error fetching listing:', err);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      fetchListing();
    }
  }, [params.id, fetchListing]);

  const handleDeleteReview = async (reviewId: string) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;
    try {
      const response = await fetch(`${API_BASE_URL}/listings/${params.id}/reviews/${reviewId}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) throw new Error('Failed to delete review');
      
      setListing(prev => prev ? {
        ...prev,
        reviews: prev.reviews.filter(review => review._id !== reviewId)
      } : null);
      
    } catch (err) {
      console.error('Error deleting review:', err);
      alert('Failed to delete review');
    }
  };

  const toggleReviewVisibility = async (reviewId: string, currentStatus: boolean) => {
    try {
      const response = await fetch(`${API_BASE_URL}/listings/${params.id}/reviews/${reviewId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isHidden: !currentStatus }),
      });
      
      if (!response.ok) throw new Error('Failed to update review');
      
      setListing(prev => prev ? {
        ...prev,
        reviews: prev.reviews.map(review => 
          review._id === reviewId 
            ? { ...review, isHidden: !currentStatus } 
            : review
        )
      } : null);
      
    } catch (err) {
      console.error('Error updating review:', err);
      alert('Failed to update review visibility');
    }
  };

  const handleEditReview = (reviewId: string) => {
    router.push(`/merchant/listing/${params.id}/edit-review/${reviewId}`);
  };

  // Filter reviews based on showHidden state
  const filteredReviews = listing?.reviews 
    ? showHidden 
      ? [...listing.reviews]
      : listing.reviews.filter(review => !review.isHidden)
    : [];

  // Sort reviews
  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'date') {
      const dateA = new Date(a.createdAt).getTime();
      const dateB = new Date(b.createdAt).getTime();
      return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
    } else {
      const ratingA = (Number(a.flexibility) + Number(a.qualityService) + Number(a.valueOfMoney) + Number(a.cleanliness)) / 4;
      const ratingB = (Number(b.flexibility) + Number(b.qualityService) + Number(b.valueOfMoney) + Number(b.cleanliness)) / 4;
      return sortOrder === 'asc' ? ratingA - ratingB : ratingB - ratingA;
    }
  });

  const calculateAverageRating = (reviews: Review[]) => {
    if (!reviews || reviews.length === 0) return 0;
    
    const total = reviews.reduce((sum, review) => {
      const reviewTotal = (
        Number(review.flexibility) +
        Number(review.qualityService) +
        Number(review.valueOfMoney) +
        Number(review.cleanliness)
      );
      return sum + (reviewTotal / 4);
    }, 0);
    
    return (total / reviews.length).toFixed(1);
  };

  const getAverageRating = (review: Review) => {
    return ((Number(review.flexibility) + 
           Number(review.qualityService) + 
           Number(review.valueOfMoney) + 
           Number(review.cleanliness)) / 4).toFixed(1);
  };

  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={`${i < Math.round(rating) ? 'text-yellow-400' : 'text-gray-300'} inline`} 
      />
    ));
  };

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-6 max-w-md mx-auto bg-white rounded-xl shadow-md">
          <h2 className="text-xl font-semibold text-red-600 mb-2">Error</h2>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition"
          >
            <FaArrowLeft className="mr-2" /> Back to Listings
          </button>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">{listing?.title}</h1>
            <div className="flex items-center mb-4">
              <div className="flex items-center mr-4">
                {renderStars(Number(calculateAverageRating(listing?.reviews || [])))}
                <span className="ml-2 text-gray-600">
                  {calculateAverageRating(listing?.reviews || [])} out of 5
                </span>
              </div>
              <span className="text-gray-500">
                {listing?.reviews?.length || 0} reviews
              </span>
            </div>
            
            {/* Review Controls */}
            <div className="flex flex-wrap justify-between items-center gap-4 mt-6">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <label htmlFor="showHidden" className="mr-2 text-sm text-gray-600">
                    Show Hidden Reviews
                  </label>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input 
                      type="checkbox" 
                      id="showHidden" 
                      checked={showHidden} 
                      onChange={() => setShowHidden(!showHidden)}
                      className="opacity-0 absolute h-0 w-0"
                    />
                    <div className={`toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full cursor-pointer transition-colors duration-200 ease-in ${showHidden ? 'bg-green-500 border-green-500' : ''}`}>
                      <div className={`toggle-dot bg-white h-5 w-5 rounded-full shadow-md transform duration-200 ease-in ${showHidden ? 'translate-x-5' : 'translate-x-0'}`}></div>
                    </div>
                  </div>
                </div>
                
                <div className="flex border rounded overflow-hidden">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`px-3 py-1 text-sm ${viewMode === 'grid' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    Grid View
                  </button>
                  <button
                    onClick={() => setViewMode('table')}
                    className={`px-3 py-1 text-sm ${viewMode === 'table' ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                  >
                    Table View
                  </button>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <label htmlFor="sortBy" className="mr-2 text-sm text-gray-600">Sort by:</label>
                  <select 
                    id="sortBy" 
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'date' | 'rating')}
                    className="border rounded px-2 py-1 text-sm"
                  >
                    <option value="date">Date</option>
                    <option value="rating">Rating</option>
                  </select>
                </div>
                
                <button 
                  onClick={toggleSortOrder}
                  className="text-sm border rounded px-3 py-1 flex items-center"
                >
                  {sortOrder === 'asc' ? 'Ascending' : 'Descending'}
                  <svg className={`ml-1 w-4 h-4 ${sortOrder === 'asc' ? 'transform rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <button 
                  onClick={() => router.push(`/merchant/listing/${params.id}/add-review`)}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-1 px-4 rounded-md transition text-sm"
                >
                  Add Review
                </button>
              </div>
            </div>
          </div>

          {/* Grid/Table Views */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Reviews List */}
              <div className="md:col-span-2 space-y-6">
                {sortedReviews.length ? (
                  sortedReviews.map((review, index) => (
                    <div key={review._id || index} className={`bg-white rounded-lg shadow-md p-6 ${review.isHidden ? 'border-l-4 border-yellow-400' : ''}`}>
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{review.name}</h3>
                          <p className="text-gray-500 text-sm">
                            {new Date(review.createdAt).toLocaleDateString()}
                          </p>
                          {review.isHidden && (
                            <span className="text-xs text-yellow-600 font-medium">Hidden Review</span>
                          )}
                        </div>
                        <div className="flex">
                          {renderStars(
                            (Number(review.flexibility) + 
                             Number(review.qualityService) + 
                             Number(review.valueOfMoney) + 
                             Number(review.cleanliness)) / 4
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Flexibility:</span>
                          <span className="font-medium">{review.flexibility}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Quality Service:</span>
                          <span className="font-medium">{review.qualityService}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Value of Money:</span>
                          <span className="font-medium">{review.valueOfMoney}/5</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cleanliness:</span>
                          <span className="font-medium">{review.cleanliness}/5</span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{review.reviewText}</p>
                      
                      {review.photoUrls?.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-sm font-medium text-gray-700 mb-2">Photos:</h4>
                          <div className="flex flex-wrap gap-2">
                            {review.photoUrls.map((photo, idx) => (
                              <div 
                                key={idx} 
                                className="relative w-20 h-20 cursor-pointer overflow-hidden rounded-md border border-gray-200"
                                onClick={() => setActiveImage(photo)}
                              >
                                <Image
                                  src={API_BASE_URL + photo}
                                  alt={`Review ${index + 1} photo ${idx + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {/* Action buttons */}
                      <div className="mt-4 pt-4 border-t flex space-x-2">
                        <button 
                          onClick={() => toggleReviewVisibility(review._id || '', !!review.isHidden)}
                          className="text-sm px-3 py-1 rounded border flex items-center text-gray-600 hover:bg-gray-100"
                        >
                          {review.isHidden ? 
                            <><FaEye className="mr-1" /> Show</> : 
                            <><FaEyeSlash className="mr-1" /> Hide</>
                          }
                        </button>
                        <button 
                          onClick={() => handleEditReview(review._id || '')}
                          className="text-sm px-3 py-1 rounded border flex items-center text-blue-600 hover:bg-blue-50"
                        >
                          <FaEdit className="mr-1" /> Edit
                        </button>
                        <button 
                          onClick={() => handleDeleteReview(review._id || '')}
                          className="text-sm px-3 py-1 rounded border flex items-center text-red-600 hover:bg-red-50"
                        >
                          <FaTrash className="mr-1" /> Delete
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="bg-white rounded-lg shadow-md p-6 text-center">
                    <p className="text-gray-500">No reviews yet for this listing.</p>
                  </div>
                )}
              </div>

              {/* Rating Summary */}
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Rating Summary</h2>
                  
                  {['Cleanliness', 'Quality Service', 'Value of Money', 'Flexibility'].map((category) => {
                    const categoryKey = category.toLowerCase().replace(/\s+/g, '') as keyof Review;
                    const avgRating = listing?.reviews?.length 
                      ? (listing.reviews.reduce((sum, review) => sum + Number(review[categoryKey]), 0) / listing.reviews.length).toFixed(1)
                      : '0';
                    
                    return (
                      <div key={category} className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm text-gray-600">{category}</span>
                          <span className="text-sm font-medium">{avgRating}/5</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-yellow-400 h-2 rounded-full" 
                            style={{ width: `${(Number(avgRating) / 5) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                  
                  <div className="mt-6 pt-6 border-t">
                    <h3 className="font-medium mb-2">Total Reviews</h3>
                    <div className="flex justify-between text-sm">
                      <span>Visible Reviews:</span>
                      <span>{listing?.reviews.filter(r => !r.isHidden).length || 0}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Hidden Reviews:</span>
                      <span>{listing?.reviews.filter(r => r.isHidden).length || 0}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6">
                  <h2 className="text-xl font-semibold mb-4">Add Your Review</h2>
                  <button 
                    onClick={() => router.push(`/merchant/listing/${params.id}/add-review`)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition"
                  >
                    Write a Review
                  </button>
                </div>
              </div>
            </div>
          ) : (
            // Table View
            <div className="bg-white rounded-lg shadow-md overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reviewer</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Review</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Photos</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sortedReviews.length ? (
                    sortedReviews.map((review, index) => (
                      <tr key={review._id || index} className={`${review.isHidden ? 'bg-yellow-50' : ''}`}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{review.name}</div>
                          <div className="text-xs text-gray-500">{review.email}</div>
                          {review.isHidden && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-yellow-100 text-yellow-800">
                              Hidden
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            {renderStars(Number(getAverageRating(review)))}
                            <span className="ml-1 text-sm text-gray-600">{getAverageRating(review)}</span>
                          </div>
                          <div className="text-xs text-gray-500 mt-1">
                            F: {review.flexibility} | Q: {review.qualityService} | V: {review.valueOfMoney} | C: {review.cleanliness}
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm text-gray-900 max-w-xs truncate">{review.reviewText}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {new Date(review.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {review.photoUrls?.length > 0 ? (
                            <div className="flex -space-x-2">
                              {review.photoUrls.slice(0, 3).map((photo, idx) => (
                                <div 
                                  key={idx} 
                                  className="relative w-10 h-10 cursor-pointer overflow-hidden rounded-full border border-white"
                                  onClick={() => setActiveImage(photo)}
                                >
                                  <Image
                                    src={photo}
                                    alt={`Review photo ${idx + 1}`}
                                    fill
                                    className="object-cover"
                                  />
                                </div>
                              ))}
                              {review.photoUrls.length > 3 && (
                                <div className="relative w-10 h-10 bg-gray-200 rounded-full border border-white flex items-center justify-center text-xs font-medium">
                                  +{review.photoUrls.length - 3}
                                </div>
                              )}
                            </div>
                          ) : (
                            <span className="text-xs text-gray-500">No photos</span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="flex justify-end space-x-2">
                            <button 
                              onClick={() => toggleReviewVisibility(review._id || '', !!review.isHidden)}
                              className="text-gray-600 hover:text-gray-900"
                              title={review.isHidden ? "Show Review" : "Hide Review"}
                            >
                              {review.isHidden ? <FaEye /> : <FaEyeSlash />}
                            </button>
                            <button 
                              onClick={() => handleEditReview(review._id || '')}
                              className="text-blue-600 hover:text-blue-900"
                              title="Edit Review"
                            >
                              <FaEdit />
                            </button>
                            <button 
                              onClick={() => handleDeleteReview(review._id || '')}
                              className="text-red-600 hover:text-red-900"
                              title="Delete Review"
                            >
                              <FaTrash />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={6} className="px-6 py-4 text-center text-sm text-gray-500">
                        No reviews yet for this listing.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Image Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh] bg-black">
            <button 
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={(e) => {
                e.stopPropagation();
                setActiveImage(null);
              }}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <Image
                src={activeImage}
                alt="Enlarged review photo"
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}