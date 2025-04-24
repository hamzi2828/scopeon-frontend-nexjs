"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { categories } from "../../../data/Data";

interface Category {
  name: string;
  svg: React.ReactElement;
}

const BannerSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="Banner-Section"
      className="flex flex-col items-center justify-center w-100 min-h-screen text-white relative mx-5 xl:mx-0"
    >
      <h1 className="lg:text-7xl text-5xl lg:font-medium mb-4">
        Explore This Amazing City
      </h1>
      <p className="mb-8 lg:text-xl text-lg">
        Find the perfect place to hangout in your city from over 1258 listings
      </p>
      <div className="bg-[#00000033] py-4 px-2 rounded-sm shadow-lg max-w-screen-xl w-full mx-20">
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
              } origin-top-right absolute right-0 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10`}
            >
              <div className="py-1">
                {categories.map((category: Category, index: number) => (
                  <a
                    key={index}
                    href="#"
                    className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white border-t border-black"
                  >
                    {category.name}
                  </a>
                ))}
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
        <div className="w-full max-w-md mx-auto md:hidden block">
          <div className="relative">
            <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
              <option>Categories</option>
              {categories.map((category: Category, index: number) => (
                <option key={index}>{category.name}</option>
              ))}
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
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className="md:flex hidden gap-6 mt-8 justify-center">
        {categories.map((category: Category, index: number) => (
          <div key={index} className="flex flex-col items-center group mt-2">
            <div className="flex items-center justify-center w-20 h-20 border hover:border-0 border-white rounded-lg cursor-pointer bg-[#00000033] group-hover:bg-orange-600">
              {category.svg}
            </div>
            <p className="text-white mt-2">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BannerSection;
