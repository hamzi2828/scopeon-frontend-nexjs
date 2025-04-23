"use client";
import React, { useState } from "react";

const BusinessType = () => {
  const [selectedType, setSelectedType] = useState("sole-provider");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6">
      <h1 className="text-xl font-semibold text-gray-800">
        What type of business are you?
      </h1>
      <p className="text-sm text-gray-600 mt-1">
        Choose the description that best matches your business.
      </p>

      <div className="mt-4 space-y-4">
        {/* Option 1 */}
        <div>
          <label className="inline-flex items-start">
            <input
              type="radio"
              name="business-type"
              value="sole-provider"
              checked={selectedType === "sole-provider"}
              onChange={handleChange}
              className="form-radio text-green-600 h-5 w-5"
            />
            <span className="ml-3">
              <span className="block text-gray-800 font-medium">
                I'm the sole provider of services, working independently of
                another business.
              </span>
              <span className="block text-sm text-gray-600 mt-1">
                Example: I own the business and am the only provider of
                service(s) with no other employees providing the service(s).
              </span>
            </span>
          </label>
        </div>

        {/* Option 2 */}
        <div>
          <label className="inline-flex items-start">
            <input
              type="radio"
              name="business-type"
              value="independent-contractor"
              checked={selectedType === "independent-contractor"}
              onChange={handleChange}
              className="form-radio text-gray-600 h-5 w-5"
            />
            <span className="ml-3">
              <span className="block text-gray-800 font-medium">
                I'm an independent contractor, contracting to perform services
                for another company.
              </span>
              <span className="block text-sm text-gray-600 mt-1">
                Example: I am renting a space (i.e. chair, room, etc.) and using
                the facilities of a company that also provides the service(s).
              </span>
            </span>
          </label>
        </div>

        {/* Option 3 */}
        <div>
          <label className="inline-flex items-start">
            <input
              type="radio"
              name="business-type"
              value="company-with-employees"
              checked={selectedType === "company-with-employees"}
              onChange={handleChange}
              className="form-radio text-gray-600 h-5 w-5"
            />
            <span className="ml-3">
              <span className="block text-gray-800 font-medium">
                I'm a company with 2+ employees performing services.
              </span>
              <span className="block text-sm text-gray-600 mt-1">
                Example: I am the owner of the contracting entity with more than
                one employee performing the service(s).
              </span>
            </span>
          </label>
        </div>

        {/* Option 4 */}
        <div>
          <label className="inline-flex items-start">
            <input
              type="radio"
              name="business-type"
              value="third-party-representative"
              checked={selectedType === "third-party-representative"}
              onChange={handleChange}
              className="form-radio text-gray-600 h-5 w-5"
            />
            <span className="ml-3">
              <span className="block text-gray-800 font-medium">
                I'm a third party representative involved in the sale of the
                goods or services being sold.
              </span>
              <span className="block text-sm text-gray-600 mt-1">
                Example: I represent a marketing company and am setting up a
                campaign for a business providing the services.
              </span>
            </span>
          </label>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="flex items-center px-10 py-2 border border-gray-300 rounded-full text-gray-600 hover:bg-gray-100">
          Previous
        </button>
        <button className="flex items-center px-10 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessType;
