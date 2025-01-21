"use client";

import React from 'react';
import Link from 'next/link';
import { FaSearch, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaPinterestP } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";

const BlogFilters: React.FC = () => {
  return (
    <div>
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Search
            <span className="block h-1 bg-orange-500 w-28 mt-2">
            </span>
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
      {/* _________________________________________________________________________ */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Categories
            <span className="block h-1 bg-orange-500 w-28 mt-2">
            </span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className='mb-3'>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>Restaurant</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>Music</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>Traveling</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>Movie</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>Hotel</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>Photography</p>
            </Link>
          </div>
        </div>
      </div>
      {/* _________________________________________________________________________ */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Follow
            <span className="block h-1 bg-orange-500 w-28 mt-2">
            </span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="flex lg:flex-nowrap flex-wrap items-center mt-6 mb-3">
          <Link className='lg:me-8 me-4 my-2 hover:text-orange-500 text-xl hover:translate-x-1 duration-300' href="">
            <FaFacebookF />
          </Link>
          <Link className='lg:me-8 me-4 my-2 hover:text-orange-500 text-xl hover:translate-x-1 duration-300' href="">
            <FaTwitter />
          </Link>
          <Link className='lg:me-8 me-4 my-2 hover:text-orange-500 text-xl hover:translate-x-1 duration-300' href="">
            <FaLinkedinIn />
          </Link>
          <Link className='lg:me-8 me-4 my-2 hover:text-orange-500 text-xl hover:translate-x-1 duration-300' href="">
            <FaInstagram />
          </Link>
          <Link className='lg:me-8 me-4 my-2 hover:text-orange-500 text-xl hover:translate-x-1 duration-300' href="">
            <FaPinterestP />
          </Link>
        </div>
      </div>
      {/* _________________________________________________________________________ */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Recent Post
            <span className="block h-1 bg-orange-500 w-28 mt-2">
            </span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex space-x-4 items-start">
            <img className="w-24 h-20 object-cover" src="https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/travel-5.jpg" alt="Find A Better Life" />
            <div>
              <h3 className="text-lg font-semibold">Find A Better Life</h3>
              <p className="text-sm text-gray-600">Travel - Aug 2027</p>
            </div>
          </div>
          <div className="flex space-x-4 items-start">
            <img className="w-24 h-20 object-cover" src="https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/travel-5.jpg" alt="Travel In Summer" />
            <div>
              <h3 className="text-lg font-semibold">Travel In Summer</h3>
              <p className="text-sm text-gray-600">Travel - Aug 2027</p>
            </div>
          </div>
        </div>

      </div>
      {/* _________________________________________________________________________ */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Tags
            <span className="block h-1 bg-orange-500 w-28 mt-2">
            </span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="flex flex-wrap gap-4">
          <button className="text-black font-semibold uppercase hover:bg-orange-500 py-1 px-2 rounded hover:text-white duration-300">Design</button>
          <button className="text-black font-semibold uppercase hover:bg-orange-500 py-1 px-2 rounded hover:text-white duration-300">Creative</button>
          <button className="text-black font-semibold uppercase hover:bg-orange-500 py-1 px-2 rounded hover:text-white duration-300">Brand</button>
          <button className="text-black font-semibold uppercase hover:bg-orange-500 py-1 px-2 rounded hover:text-white duration-300">Digital</button>
          <button className="text-black font-semibold uppercase hover:bg-orange-500 py-1 px-2 rounded hover:text-white duration-300">Project</button>
          <button className="text-black font-semibold uppercase hover:bg-orange-500 py-1 px-2 rounded hover:text-white duration-300">Potential</button>
        </div>
      </div>
      {/* _________________________________________________________________________ */}
      <div className='bg-white py-5 px-4 rounded-lg border gap-4 my-5 shadow'>
        <div className="mb-3">
          <h5 className="text-xl md:text-2xl font-semibold text-black relative inline-block">
            Archives
            <span className="block h-1 bg-orange-500 w-28 mt-2">
            </span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className='mb-3'>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>May</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>April</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>March</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>February</p>
            </Link>
          </div>
          <div className='my-2'>
            <Link href="#" className="flex items-center hover:ms-1 duration-300 hover:text-orange-500">
              <MdArrowForwardIos />
              <p className='ms-1 font-normal text-lg'>January</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogFilters;
