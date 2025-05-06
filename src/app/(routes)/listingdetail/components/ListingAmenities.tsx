import React from "react";
import { TiTickOutline } from "react-icons/ti";

interface ListingAmenitiesProps {
  amenities?: string[];
}

const ListingAmenities: React.FC<ListingAmenitiesProps> = ({ amenities }) => {
  if (!amenities || amenities.length === 0) return null;
  return (
    <div className="m-4">
      <div className="bg-white p-6 rounded-lg border w-full">
        <div className="mb-3">
          <h5 className="text-xl font-semibold text-black relative inline-block">
            Amenities
            <span className="block h-1 bg-orange-500 w-28 mt-1"></span>
          </h5>
          <div className="border-t-4 border-gray-200 mt-[-4px] w-full"></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {amenities.map((item, index) => (
            <div key={index} className="flex items-start text-gray-700">
              <TiTickOutline className="text-orange-600 my-1 mr-1" />
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListingAmenities;
