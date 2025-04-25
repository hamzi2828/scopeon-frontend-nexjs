"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import Link from "next/link";
import { FaUserAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="flex justify-between items-center py-7 px-7 bg-white shadow sticky top-0 z-10">
      <div className="flex items-center space-x-2">
        <FaBars
          onClick={toggleSidebar}
          className="md:hidden block cursor-pointer"
        />
        <span className="text-lg font-semibold">Groupon Merchant</span>
      </div>
      {/* Overlay only appears when the sidebar is open */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
        />
      )}
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className="text-gray-600 hover:text-orange-600 border-0 hover:border-b border-orange-600 duration-100 md:block hidden"
        >
          Help
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-orange-600 border-0 hover:border-b border-orange-600 duration-100 md:block hidden"
        >
          Preview
        </a>
        <a
          href="#"
          className="text-gray-600 hover:text-orange-600 border-0 hover:border-b border-orange-600 duration-100 text-nowrap"
        >
          Save and exit
        </a>
        <Link
          href="/merchant/userprofile"
          className="text-gray-600 hover:text-orange-600 border-0 hover:border-b border-orange-600 duration-100 text-nowrap"
        >
          <FaRegUser className="text-xl" />
        </Link>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-white w-56 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <button
            onClick={toggleSidebar}
            className="text-gray-600 hover:bg-gray-100 p-2 rounded-md"
          >
            <RxCross1 className="text-3xl" />
          </button>
          <ul className="space-y-2 mt-2">
            <li>
              <Link
                href="/merchant/mechantoptions"
                className="block text-gray-600 hover:bg-gray-100 lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer"
              >
                Options
              </Link>
            </li>
            <li>
              <Link
                href="/merchant/crerateListing"
                className="block text-gray-600 hover:bg-gray-100 lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer"
              >
                Photos
              </Link>
            </li>

            {/* Add more links as needed */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
