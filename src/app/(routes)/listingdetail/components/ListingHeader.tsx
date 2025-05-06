import React from "react";

interface ListingHeaderProps {
  title: string;
  address?: string;
  rating?: number;
}

const ListingHeader: React.FC<ListingHeaderProps> = ({ title, address, rating }) => (
  <div className="p-6">
    <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
    <div className="mt-4 flex items-center text-gray-600">
      <div className="flex items-center">
        <svg
          className="w-5 h-5 mr-1 text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M21 9H9V7h12V2H3v20h9v-2H5V4h14v5zm-2 10l-5-5h3v-4h4v4h3l-5 5z"></path>
        </svg>
        <span className="text-sm">
          {title} (
          <a href="#" className="text-orange-600">
            {address}
          </a>
          )
        </span>
      </div>
      <span className="mx-2">|</span>
      <div className="flex items-center">
        <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
          <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.783.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/></svg>
          {rating}
        </span>
        <span className="ml-1 text-sm text-gray-500">(56,763 reviews)</span>
      </div>
    </div>
    <div className="mt-4 flex items-center space-x-2 text-sm">
      <span className="inline-flex items-center px-2 py-1 bg-yellow-100 text-yellow-700 rounded">
        <svg className="w-4 h-4 mr-1 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.539 1.118l-3.388-2.46a1 1 0 00-1.175 0l-3.388 2.46c-.783.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118l-3.388-2.46c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/></svg>
        Best Rated
      </span>
      <span className="inline-flex items-center px-2 py-1 bg-red-100 text-red-700 rounded">
        <svg className="w-4 h-4 mr-1 text-red-500" fill="currentColor" viewBox="0 0 20 20"><path d="M13.293 7.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L14 10.414V17a1 1 0 11-2 0v-6.586l-2.293 2.293a1 1 0 01-1.414-1.414l3-3z"/></svg>
        10,000+ Bought
      </span>
      <span className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-700 rounded">
        <svg className="w-4 h-4 mr-1 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v2a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm0 2h8v1H6V4z"/></svg>
        Selling fast!
      </span>
    </div>
  </div>
);

export default ListingHeader;
