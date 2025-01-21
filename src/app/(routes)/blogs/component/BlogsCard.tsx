"use client";
import React, { useState } from 'react';
import { RiArrowDropDownLine } from "react-icons/ri";
import { BlogCardsData } from '../../../data/Data';
import Link from "next/link";
import { FaUser, FaCalendarAlt, FaTags } from "react-icons/fa";

const BlogsCards: React.FC = () => {
    const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
    const [ratings, setRatings] = useState<number[]>([0, 0, 0]);

    const handleToggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <div>
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 my-5">
                {BlogCardsData.map((bloglisting, index) => (
                    <Link href={`/blogdetail/${bloglisting.id}`} key={bloglisting.id} className="bg-white rounded-lg shadow hover:shadow-2xl duration-300 overflow-hidden">
                        <div className="relative">
                            <img className="w-full h-60 object-cover" src={bloglisting.imageUrl} alt="Blog Image" />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-gray-800">{bloglisting.title}</h3>
                            <div className="mt-4 flex items-center">
                                <FaUser className="text-orange-500 mr-2" />
                                <p className='text-sm'>{bloglisting.author}</p>
                            </div>
                            <p className='my-5'>{bloglisting.description}</p>
                            <div className="flex items-center justify-between">
                                <span className="flex items-center text-orange-500 font-semibold text-sm hover:tracking-widest duration-300">
                                    READ MORE
                                    <svg className='ms-1' xmlns="http://www.w3.org/2000/svg" width="1.7em" height="1.7em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M8.7 7.3c-.4-.4-1-.4-1.4 0s-.4 1 0 1.4l3.3 3.3l-3.3 3.3c-.2.2-.3.4-.3.7c0 .6.4 1 1 1c.3 0 .5-.1.7-.3l4-4c.4-.4.4-1 0-1.4zM16 7c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1s1-.4 1-1V8c0-.6-.4-1-1-1" />
                                    </svg>
                                </span>
                            </div>
                            <hr className='my-2' />
                            <div className="flex items-center justify-between">
                                <div className="flex items-center py-2">
                                    <FaCalendarAlt />
                                    <p className='text-sm ms-2'>{bloglisting.date}</p>
                                </div>
                                <div className="flex items-center py-2">
                                    <FaTags />
                                    <p className='text-sm ms-2'>{bloglisting.category}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default BlogsCards;
