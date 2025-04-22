import React from "react";
import { FaStar } from "react-icons/fa";

const LeaveComment = () => {
  return (
    <div className="m-4">
      <div className="p-4 border rounded-lg">
        <div className="mb-3">
          <h5 className="text-xl font-semibold text-black relative inline-block">
            Leave Your Review
            <span className="block h-1 bg-orange-500 w-28 mt-1"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>
        <div className="space-y-4">
          <div className="flex items-center">
            <span className="w-40">Flexibility</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 w-4 h-4" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-40">Quality Service</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 w-4 h-4" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-40">Value Of Money</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 w-4 h-4" />
              ))}
            </div>
          </div>
          <div className="flex items-center">
            <span className="w-40">Cleanliness</span>
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-500 w-4 h-4" />
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4 mt-5">
          <input
            type="text"
            placeholder="User Name *"
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <input
            type="email"
            placeholder="Email *"
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500"
          />
          <textarea
            placeholder="Write Review"
            className="w-full p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-orange-500 h-32 resize-none"
          ></textarea>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Choose file"
              className="flex-grow p-1 border border-r-0 border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-orange-500"
              readOnly
            />
            <button className="bg-orange-500 text-white px-4 py-1 border border-orange-500 rounded-r-md hover:bg-orange-600 focus:outline-none">
              Browse
            </button>
          </div>
        </div>
        <button className="w-52 mt-4 bg-transparent text-orange-600 border border-orange-600 py-2 rounded-md hover:bg-orange-600 hover:text-white focus:outline-none">
          SUBMIT REVIEW
        </button>
      </div>
    </div>
  );
};

export default LeaveComment;
