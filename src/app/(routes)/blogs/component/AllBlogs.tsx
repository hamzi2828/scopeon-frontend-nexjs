"use client";
import React, { useState } from 'react';
import BlogsHeader from './BlogsHeader';
import BlogsCards from './BlogsCard';
import BlogFilters from '../component/BlogFilters';
import { FaFilter } from 'react-icons/fa'; // Import an icon for the toggle button
import { IoIosCloseCircle } from "react-icons/io";

const AllBlogs: React.FC = () => {
  // State to control off-canvas visibility
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Function to toggle the off-canvas
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>
      <BlogsHeader />
      <div className="max-w-screen-xl mx-auto">
        <div className="lg:hidden p-4">
          <button
            onClick={toggleFilters}
            className="flex items-center space-x-2 bg-orange-500 text-white px-4 py-2 rounded-lg focus:outline-none"
          >
            <FaFilter />
            <span>Filters</span>
          </button>
        </div>
        <div className="flex flex-col lg:flex-row gap-4 p-4">
          <div
            className={`lg:static fixed overflow-y-auto inset-y-0 left-0 w-72 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${showFilters ? 'translate-x-0 z-50 ' : '-translate-x-full'} lg:relative lg:w-80 lg:translate-x-0`}
          >
            <div className="p-4 lg:p-0">
              <div className="flex items-center justify-between lg:hidden">
                <p className="text-2xl font-bold mb-4">Filters</p>
                <button
                  onClick={toggleFilters}
                  className="text-right mb-4 text-2xl text-orange-500"
                >
                  <IoIosCloseCircle />
                </button>
              </div>
              <hr className=' lg:hidden'/>
              <BlogFilters />
            </div>
          </div>
          <div className="lg:flex-1">
            <BlogsCards />
          </div>
        </div>
        {showFilters && <div onClick={toggleFilters} className="fixed inset-0 bg-black opacity-50 z-40 lg:hidden"></div>}
      </div>
    </>
  );
};

export default AllBlogs;
