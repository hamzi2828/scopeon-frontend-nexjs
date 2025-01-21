"use client";
import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";

const BlogsHeader: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='blog-banner-area relative'>
            <div className='bg-[#00000080] flex flex-col items-center justify-center w-100 text-white relative mx-0'>
                <div className='py-16 max-w-screen-xl w-full'>
                    <h1 className='text-5xl font-semibold text-center'>Blogs</h1>
                </div>
            </div>
        </div>
    );
};

export default BlogsHeader;
