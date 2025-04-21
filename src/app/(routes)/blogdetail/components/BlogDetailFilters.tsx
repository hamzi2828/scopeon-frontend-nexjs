"use client";
import React from 'react';
import { FaSearch, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import Link from 'next/link';

const BlogDetailFilters = () => {
  return (
    <div>
      {/* Search Section */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Search
            <span className="block h-1 bg-orange-500 w-28 mt-2"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="flex items-center border rounded-md overflow-hidden bg-gray-100 border-l">
          <input type="text" placeholder="Search Here" className="px-4 py-2 w-full focus:outline-none" />
          <button className="py-2 bg-gray-100 text-black text-xl px-3 border-l">
            <FaSearch />
          </button>
        </div>
      </div>

      {/* Categories Section */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Categories
            <span className="block h-1 bg-orange-500 w-28 mt-2"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className='mb-3'>
          {['Restaurant', 'Music', 'Traveling', 'Movie', 'Hotel', 'Photography'].map((category) => (
            <div key={category} className='my-2'>
              <Link href={`/category/${category.toLowerCase()}`} className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
                <MdArrowForwardIos />
                <p className='ms-1 font-normal text-lg'>{category}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Follow Section */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Follow
            <span className="block h-1 bg-orange-500 w-28 mt-2"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="flex items-center mt-6 mb-3">
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP].map((Icon, index) => (
            <Link 
              key={index}
              href="#" 
              className='md:me-8 me-4 hover:text-orange-500 text-xl hover:translate-x-1 duration-300'
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Recent Post
            <span className="block h-1 bg-orange-500 w-28 mt-2"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          {[
            { title: 'Find A Better Life', category: 'Travel', date: 'Aug 2027' },
            { title: 'Travel In Summer', category: 'Travel', date: 'Aug 2027' }
          ].map((post, index) => (
            <div key={index} className="flex space-x-4 items-start">
              <img 
                className="w-24 h-20 object-cover" 
                src="https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/travel-5.jpg" 
                alt={post.title} 
              />
              <div>
                <h3 className="text-lg font-semibold">{post.title}</h3>
                <p className="text-sm text-gray-600">{post.category} - {post.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tags Section */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Tags
            <span className="block h-1 bg-orange-500 w-28 mt-2"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="flex flex-wrap gap-4">
          {['Design', 'Creative', 'Brand', 'Digital', 'Project', 'Potential'].map((tag) => (
            <button 
              key={tag}
              className="text-black font-semibold uppercase hover:bg-orange-500 py-1 px-2 rounded hover:text-white duration-300"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Archives Section */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Archives
            <span className="block h-1 bg-orange-500 w-28 mt-2"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className='mb-3'>
          {['May', 'April', 'March', 'February', 'January'].map((month) => (
            <div key={month} className='my-2'>
              <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
                <MdArrowForwardIos />
                <p className='ms-1 font-normal text-lg'>{month}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailFilters;
