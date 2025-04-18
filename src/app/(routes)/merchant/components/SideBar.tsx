"use client";
import React from "react";

const SideBar = () => {
  return (
    <div className="flex flex-col space-y-4">
      <a href="/merchant/merchantoptions" className="text-gray-700 hover:text-blue-500">Options</a>
      <a href="/merchant/merchantphotos" className="text-gray-700 hover:text-blue-500">Photos</a>
      <a href="/merchant/merchanthighlights" className="text-gray-700 hover:text-blue-500">Highlights</a>
      <a href="/merchant/merchantdescription" className="text-gray-700 hover:text-blue-500">Description</a>
      <a href="/merchant/merchantvoucher" className="text-gray-700 hover:text-blue-500">Voucher</a>
      <a href="/merchant/business-address" className="text-gray-700 hover:text-blue-500">Business Address</a>
      <a href="/merchant/business-website" className="text-gray-700 hover:text-blue-500">Business Website</a>
      <a href="/merchant/business-type" className="text-gray-700 hover:text-blue-500">Business Type</a>
      <a href="/merchant/payment-info" className="text-gray-700 hover:text-blue-500">Payment Info</a>
      <a href="/merchant/tax-info" className="text-gray-700 hover:text-blue-500">Tax Info</a>
    </div>
  );
};

export default SideBar;
