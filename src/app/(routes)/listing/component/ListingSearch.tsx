"use client";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const ListingSearch: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="bg-[#00000080] flex flex-col items-center justify-center w-full text-white relative mx-0">
        <div className="py-10 max-w-screen-xl w-full">
          <p className="text-xl text-center mb-4">
            34 Result For <span className="text-2xl">Restaurant</span>
          </p>
          <div className="bg-[#00000033] py-4 px-3 rounded-sm shadow-lg">
            {/* Desktop View */}
            <div className="bg-white shadow-lg md:flex hidden w-full mx-auto">
              <div className="relative inline-block text-left w-1/5">
                <div>
                  <button
                    type="button"
                    onClick={toggleDropdown}
                    className="inline-flex justify-between w-full shadow-sm px-4 py-4 bg-white text-md text-gray-700 hover:bg-gray-50 focus:outline-none"
                  >
                    Categories
                    <RiArrowDropDownLine className="-mr-1 ml-2 h-7 w-7" />
                  </button>
                </div>

                <div
                  className={`${
                    isOpen ? "block" : "hidden"
                  } origin-top-right absolute right-0 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30`}
                >
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white  border-t border-black"
                    >
                      Restaurant
                    </a>
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white  border-t border-black"
                    >
                      Beauty & Spa
                    </a>
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white  border-t border-black"
                    >
                      Shopping
                    </a>
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white  border-t border-black"
                    >
                      Cafe
                    </a>
                    <a
                      href="#"
                      className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white  border-t border-black"
                    >
                      Movie
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex items-center border-l w-1/2">
                <input
                  type="text"
                  placeholder="Eg: Restaurant, Spa, Shopping, Movie"
                  className="w-full py-3 px-4 text-gray-700 outline-none"
                />
              </div>
              <div className="flex items-center border-l border-r w-1/2">
                <input
                  type="text"
                  placeholder="Eg: New York, United States"
                  className="w-full py-3 px-4 text-gray-700 outline-none"
                />
              </div>
              <div className="flex items-center border-r w-1/5">
                <button className="bg-orange-600 py-5 w-full text-white hover:bg-orange-700 flex justify-center">
                  <FaSearch size={20} />
                </button>
              </div>
            </div>
            {/* Mobile View */}
            <div className="w-full max-w-md mx-auto md:hidden block">
              <div className="relative">
                <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  <option>Categories</option>
                  <option>Restaurant</option>
                  <option>Spa</option>
                  <option>Shopping</option>
                  <option>Movie</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M5.293 7.707a1 1 0 011.414 0L10 11.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                  </svg>
                </div>
              </div>

              <div className="mt-4">
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Eg: Restaurant, Spa, Shopping, Movie"
                />
              </div>

              <div className="mt-4">
                <input
                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-300 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  type="text"
                  placeholder="Eg: New York, United States"
                />
              </div>

              <div className="mt-4">
                <button
                  className="w-full bg-orange-600 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  <svg
                    className="w-6 h-6 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingSearch;
