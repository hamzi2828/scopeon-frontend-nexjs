// src/components/NavBar.tsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GrCart } from "react-icons/gr";
import { FaRegBell } from "react-icons/fa";
import { TfiControlBackward } from "react-icons/tfi";
import { FaHome, FaList, FaPlus, FaBlog, FaDollarSign, FaEnvelope, FaFacebookF, FaRegHeart } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import { IoEyeOutline } from "react-icons/io5";
import { LiaBlogSolid } from "react-icons/lia";
import Image from 'next/image';

const LOGO_URL = "https://theme.bitspecksolutions.com/html-template/listright/demo/assets/images/logo/logo.png";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, className }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  
  const baseClasses = "relative inline-block after:absolute after:left-0 after:right-0 after:h-[3px] after:transition-all after:duration-300 after:ease-in-out after:origin-center";
  const activeClasses = isActive ? "text-orange-500 after:bg-orange-500 after:w-full" : "text-white after:bg-transparent hover:text-orange-500 hover:after:bg-orange-500 hover:after:w-full";
  
  return (
    <Link href={href} className={`${baseClasses} ${activeClasses} ${className || ''}`}>
      {children}
    </Link>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="bg-[#000000e3] p-4 relative z-10 border-b">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <Link href="/" className="relative w-[130px] h-[30px]">
          <Image
            src={LOGO_URL}
            alt="Logo"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button 
            className="text-white focus:outline-none" 
            onClick={toggleDrawer}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Desktop Navigation */}
        <ul className="lg:flex hidden space-x-9 text-white">
          <li className="text-xl block py-2 border-b-2 border-transparent hover:text-orange-500 hover:after:bg-orange-500 hover:after:w-full">
            <NavLink href="/recentviewed">
              <IoEyeOutline className="text-2xl" />
            </NavLink>
          </li>
          <li className="text-xl block py-2 border-b-2 border-transparent hover:text-orange-500 hover:after:bg-orange-500 hover:after:w-full">
            <NavLink href="/wishlist">
              <FaRegHeart className="text-2xl" />
            </NavLink>
          </li>
          <li className="text-xl block py-2 border-b-2 border-transparent hover:text-orange-500 hover:after:bg-orange-500 hover:after:w-full">
            <NavLink href="/cart">
              <GrCart className="text-2xl" />
            </NavLink>
          </li>
          <li className="text-xl block py-2 border-b-2 border-transparent hover:text-orange-500 hover:after:bg-orange-500 hover:after:w-full">
            <NavLink href="/listing">
              <FaRegBell className="text-2xl" />
            </NavLink>
          </li>
          <li className="text-xl block py-2 border-b-2 border-transparent hover:text-orange-500 hover:after:bg-orange-500 hover:after:w-full">
            <NavLink href="/blogs">
              <LiaBlogSolid className="text-2xl" />
            </NavLink>
          </li>
          <li className="text-xl block py-2 border-b-2 border-transparent hover:text-orange-500 hover:after:bg-orange-500 hover:after:w-full">
            <NavLink href="/sign-in">
              Sign In
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black overflow-hidden text-white z-50 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out`}
      >
        <button
          className="p-4 text-white focus:outline-none float-right"
          onClick={toggleDrawer}
          aria-label="Close menu"
        >
          <TfiControlBackward className="text-2xl bg-white rounded-2xl text-orange-600 w-14 h-12 p-3 -m-6" />
        </button>

        <div className="p-4">
          <div className="brand-logo w-36 h-36 mx-auto my-10 text-center rounded-full border-4 border-white border-opacity-10 shadow-lg relative">
            <Link href="/" className="brand-link">
              <Image
                src={LOGO_URL}
                alt="Logo"
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
          </div>

          <div className="p-6">
            <h2 className="text-xl font-bold mb-6">Menu List</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="flex items-center space-x-3 hover:text-orange-400">
                  <FaHome className="text-orange-500" />
                  <span>Home</span>
                </Link>
              </li>

              <li>
                <div
                  className="flex items-center space-x-3 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <FaList className="text-orange-500" />
                  <span className="flex-grow hover:text-orange-400">Listing</span>
                  <IoChevronDown
                    className={`h-4 w-4 transform transition-transform ${
                      isDropdownOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>

                {isDropdownOpen && (
                  <ul className="ml-8 mt-2 space-y-2 text-sm text-gray-400">
                    <li>
                      <Link href="/listing/single" className="hover:text-white block">
                        Single Listing
                      </Link>
                    </li>
                    <li>
                      <Link href="/listing/side-map" className="hover:text-white block">
                        Listing Side Map
                      </Link>
                    </li>
                    <li>
                      <Link href="/listing/full-grid" className="hover:text-white block">
                        Listing Full Grid
                      </Link>
                    </li>
                    <li>
                      <Link href="/listing/sidebar" className="hover:text-white block">
                        Listing Sidebar
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              {/* Additional Menu Items */}
              <li>
                <Link href="/blog" className="flex items-center space-x-3 hover:text-orange-400">
                  <FaBlog className="text-orange-500" />
                  <span>Blog</span>
                </Link>
              </li>
              <li>
                <Link href="/add-listing" className="flex items-center space-x-3 hover:text-orange-400">
                  <FaPlus className="text-orange-500" />
                  <span>Add Listing</span>
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="flex items-center space-x-3 hover:text-orange-400">
                  <FaDollarSign className="text-orange-500" />
                  <span>Pricing Plan</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="flex items-center space-x-3 hover:text-orange-400">
                  <FaEnvelope className="text-orange-500" />
                  <span>Contact Us</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Footer */}
          <div className="text-center text-sm p-4 mt-4">
            <p>
              &copy; Copyright {new Date().getFullYear()}{' '}
              <Link href="/" className="text-blue-400">
                INFLIX
              </Link>
            </p>
            <p>All Rights Reserved</p>
            <div className="flex justify-center mt-2 space-x-4">
              <Link href="/" className="text-gray-500 hover:text-white">
                <FaHome className="h-5 w-5" />
              </Link>
              <Link href="/" className="text-gray-500 hover:text-white">
                <FaFacebookF className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleDrawer}
          aria-hidden="true"
        />
      )}
    </nav>
  );
};

export default NavBar;