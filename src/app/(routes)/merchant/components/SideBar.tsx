"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const pathname = usePathname();


  const isActive = (path: string) => pathname === path;

  return (
    <div>
      <ul className="space-y-2 mt-2">

      <Link
          href="/merchant/allListings"
          className={`block text-gray-600 ${
            isActive("/merchant/allListings")
              ? "bg-gray-100"
              : "hover:bg-gray-100"
          } lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer`}
        >
          All Listings
        </Link>


        <Link
          href="/merchant/createListing"
          className={`block text-gray-600 ${
            isActive("/merchant/createListing")
              ? "bg-gray-100"
              : "hover:bg-gray-100"
          } lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer`}
        >
          Create Listing
        </Link>
      
  
      </ul>
    </div>
  );
};

export default SideBar;
