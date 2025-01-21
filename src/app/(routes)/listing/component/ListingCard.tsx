"use client";
import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import Link from "next/link";

// Import the data type for listingCardData
import { listingCardData } from '../../../data/Data';

// Define the type for the listing card data
interface ListingCard {
    id: number;
    imageUrl: string;
    openStatus: string;
    closeStatus: string;
    title: string;
    address: string;
    website: string;
    phone: string;
    rating: number;
}

const ListingCards: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [ratings, setRatings] = useState<number[]>(
        Array(listingCardData.length).fill(0) // Initialize ratings for each listing
    );

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div className='max-w-screen-xl mx-auto py-4'>
                <div className="flex justify-end">
                    <div className="relative w-1/5">
                        <div>
                            <button
                                type="button"
                                onClick={handleToggleDropdown}
                                className="inline-flex justify-between w-full px-4 py-3 bg-white text-md text-gray-700 hover:bg-gray-50 focus:outline-none border shadow-2xl"
                            >
                                Categories
                                <RiArrowDropDownLine className="-mr-1 ml-2 h-7 w-7" />
                            </button>
                        </div>

                        <div
                            className={`${dropdownOpen ? 'block' : 'hidden'} origin-top-right absolute right-0 w-full shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-30`}
                        >
                            <div className="py-1">
                                <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white border-t border-black">
                                    Restaurant
                                </a>
                                <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white border-t border-black">
                                    Beauty & Spa
                                </a>
                                <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white border-t border-black">
                                    Shopping
                                </a>
                                <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white border-t border-black">
                                    Cafe
                                </a>
                                <a href="#" className="block px-5 py-3 text-sm text-gray-700 hover:bg-orange-600 hover:text-white border-t border-black">
                                    Movie
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mx-5 gap-4 my-5">
                    {listingCardData.map((listing: ListingCard, index: number) => (
                        <Link href={'/listingdetail'} key={listing.id} className="bg-white rounded-lg shadow hover:shadow-2xl duration-300 overflow-hidden">
                            <div className="relative">
                                <img className="w-full h-60 object-cover" src={listing.imageUrl} alt="Listing Image" />
                                <div className="absolute top-2 -right-3">
                                    <span className="bg-[#28A745B3] text-white text-xs px-2 py-1 rounded-xl pr-5">{listing.openStatus}</span>
                                </div>
                                <div className="absolute top-10 -right-3">
                                    <span className="bg-[#FF5E00B3] text-white text-xs px-2 py-1 rounded-xl pr-5">{listing.closeStatus}</span>
                                </div>
                                <div className="absolute bottom-1 left-1 bg-black bg-opacity-60 text-white px-3 py-2 flex items-center rounded-md">
                                    <span className='p-1.5 bg-orange-600 rounded-full me-2'>
                                        <svg className="svg-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36">
                                            <path fill="currentColor" d="M19 1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0V11a1 1 0 0 1-2 0V1.5a1.5 1.5 0 1 0-3 0v9c0 .127.021.249.051.367c-.03.207-.051.417-.051.633c0 2.316 1.75 5.957 4 6.442V33.5a2.5 2.5 0 1 0 5 0V17.942c2.25-.485 4-4.126 4-6.442c0-.216-.021-.426-.051-.633c.03-.118.051-.24.051-.367zM27.5 0c-.104 0-.204.019-.306.031C27.13.021 27.067 0 27 0c-2.209 0-5 5.477-5 11c0 4.658 1.275 8.56 3 9.672V33.5a2.5 2.5 0 1 0 5 0v-31A2.5 2.5 0 0 0 27.5 0" />
                                        </svg>
                                    </span>
                                    <span>Restaurant</span>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-800">{listing.title}</h3>
                                <div className="flex items-center mt-2">
                                    <div className="flex items-center text-gray-300">
                                        {[...Array(5)].map((_, starIndex) => (
                                            <svg
                                                key={starIndex}
                                                aria-label="Star"
                                                className={`w-4 h-4 cursor-pointer ${starIndex < ratings[index] ? 'text-orange-600 fill-current' : 'text-gray-300'}`}
                                                onClick={() => {
                                                    const newRatings = [...ratings];
                                                    newRatings[index] = starIndex + 1;
                                                    setRatings(newRatings);
                                                }}
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"
                                            >
                                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                            </svg>
                                        ))}
                                        <span className="ml-2 text-sm text-gray-700">{ratings[index]}/5</span>
                                    </div>
                                    <span className="text-gray-700 ml-2 text-sm">{listing.rating}</span>
                                </div>
                                <div className="mt-4 text-gray-700">
                                    <div className="flex items-center">
                                        <svg className='mr-2 text-orange-600' xmlns="http://www.w3.org/2000/svg" width="1.13em" height="1em" viewBox="0 0 576 512">
                                            <path fill="currentColor" d="M288 0c-69.59 0-126 56.41-126 126c0 56.26 82.35 158.8 113.9 196.02c6.39 7.54 17.82 7.54 24.2 0C331.65 284.8 414 182.26 414 126C414 56.41 357.59 0 288 0m0 168c-23.2 0-42-18.8-42-42s18.8-42 42-42s42 18.8 42 42s-18.8 42-42 42M20.12 215.95A32.01 32.01 0 0 0 0 245.66v250.32c0 11.32 11.43 19.06 21.94 14.86L160 448V214.92c-8.84-15.98-16.07-31.54-21.25-46.42zM288 359.67c-14.07 0-27.38-6.18-36.51-16.96c-19.66-23.2-40.57-49.62-59.49-76.72v182l192 64V266c-18.92 27.09-39.82 53.52-59.49 76.72c-9.13 10.77-22.44 16.95-36.51 16.95m266.06-198.51L416 224v288l139.88-55.95A32 32 0 0 0 576 426.34V176.02c0-11.32-11.43-19.06-21.94-14.86" />
                                        </svg>
                                        <span>{listing.address}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className='mr-2 text-orange-600' xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 16 16">
                                            <path fill="currentColor" d="M6 8c0-.703.044-1.375.125-2h3.75c.08.625.125 1.297.125 2s-.044 1.375-.125 2h-3.75A16 16 0 0 1 6 8m-.883 2A17 17 0 0 1 5 8c0-.693.04-1.365.117-2H2.34A6 6 0 0 0 2 8c0 .701.12 1.374.341 2zm-2.314 1h2.47c.125.655.292 1.254.493 1.776c.134.349.286.672.457.957A6.02 6.02 0 0 1 2.803 11m3.489 0h3.416a9 9 0 0 1-.407 1.417c-.213.554-.455.969-.698 1.236S8.156 14 8 14s-.36-.08-.603-.347s-.485-.682-.698-1.236A9 9 0 0 1 6.292 11m4.436 0a10.5 10.5 0 0 1-.494 1.776a6 6 0 0 1-.457.957A6.02 6.02 0 0 0 13.197 11zm2.93-1A6 6 0 0 0 14 8a6 6 0 0 0-.341-2h-2.776c.076.635.117 1.307.117 2s-.04 1.365-.117 2zM9.302 3.583c.159.414.297.89.407 1.417H6.292c.11-.527.248-1.003.407-1.417c.213-.554.455-.969.698-1.236S7.844 2 8 2s.36.08.603.347s.485.682.698 1.236M10.728 5h2.47a6.02 6.02 0 0 0-3.421-2.733c.17.285.323.608.457.957c.201.522.368 1.12.494 1.776M2.803 5h2.47a10.5 10.5 0 0 1 .493-1.776c.134-.349.286-.672.457-.957A6.02 6.02 0 0 0 2.803 5" />
                                        </svg>
                                        <span>{listing.website}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <svg className='mr-2 text-orange-600' xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="m493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464c0-11.2-7.7-20.9-18.6-23.4" />
                                        </svg>
                                        <span>{listing.phone}</span>
                                    </div>
                                </div>
                                <div className="mt-4 flex items-center justify-between">
                                    <a href="#" className="flex items-center text-orange-500 font-semibold text-sm hover:tracking-widest duration-300">
                                        View Details
                                        <svg className='ms-1' xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24">
                                            <path fill="currentColor" d="M8.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.3 3.3l-3.3 3.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4-4c.4-.4.4-1 0-1.4zM16 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1" />
                                        </svg>
                                    </a>
                                    <button className="text-orange-500 hover:text-white bg-gray-200 hover:bg-orange-600 p-1 rounded-full duration-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1.3em" viewBox="0 0 24 24">
                                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.5 12.572L12 20l-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ListingCards;
