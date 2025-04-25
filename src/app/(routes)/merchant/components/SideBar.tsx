"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaChevronDown, FaChevronUp } from "react-icons/fa6";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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
      
        <Link
          href="/merchant/merchantvoucher"
          className={`block text-gray-600 ${
            isActive("/merchant/merchantvoucher")
              ? "bg-gray-100"
              : "hover:bg-gray-100"
          } lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer`}
        >
          Voucher
        </Link>
        <div className="relative">
          <div
            onClick={toggleDropdown}
            className="flex items-center text-gray-600 hover:bg-gray-100 lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer"
          >
            <span>{isOpen ? <FaChevronUp /> : <FaChevronDown />}</span>
            <span className="ml-2">Business Info</span>
          </div>

          {isOpen && (
            <div className="absolute left-0 lg:ps-5 ps-2 w-full rounded-md">
              <ul className="py-2">
                <li>
                  <Link
                    href="/merchant/business-address"
                    className={`block text-gray-600 ${
                      isActive("/merchant/business-address")
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                    } lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer`}
                  >
                    Business Address
                  </Link>
                </li>
                <li>
                  <Link
                    href="/merchant/business-website"
                    className={`block text-gray-600 ${
                      isActive("/merchant/business-website")
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                    } lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer`}
                  >
                    Business Website
                  </Link>
                </li>
                <li>
                  <Link
                    href="/merchant/business-type"
                    className={`block text-gray-600 ${
                      isActive("/merchant/business-type")
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                    } lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer`}
                  >
                    Operating Type
                  </Link>
                </li>
                <li>
                  <Link
                    href="/merchant/payment-info"
                    className={`block text-gray-600 ${
                      isActive("/merchant/payment-info")
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                    } lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer`}
                  >
                    Payment Info
                  </Link>
                </li>
                <li>
                  <Link
                    href="/merchant/tax-info"
                    className={`block text-gray-600 ${
                      isActive("/merchant/tax-info")
                        ? "bg-gray-100"
                        : "hover:bg-gray-100"
                    } lg:px-3 px-1 py-2 rounded-md duration-300 cursor-pointer`}
                  >
                    Tax Info
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
