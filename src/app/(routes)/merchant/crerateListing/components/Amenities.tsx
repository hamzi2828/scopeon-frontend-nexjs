"use client";

import React, { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const Amenities = () => {
  const [amenities, setAmenities] = useState<string[]>([""]);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    const newAmenities = [...amenities];
    newAmenities[index] = value;
    setAmenities(newAmenities);
  };

  // Add a new amenity row
  const handleAdd = () => {
    setAmenities([...amenities, ""]);
  };

  // Remove an amenity row
  const handleRemove = (index: number) => {
    if (amenities.length === 1) return; // Prevent removing the last row
    const newAmenities = amenities.filter((_, i) => i !== index);
    setAmenities(newAmenities);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-xl font-semibold mb-4">Amenities</h2>
      <div className="space-y-3">
        {amenities.map((amenity, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <input
              type="text"
              value={amenity}
              onChange={e => handleChange(idx, e.target.value)}
              placeholder="Enter amenity"
              className="border rounded px-3 py-2 flex-1"
            />
            <button
              type="button"
              onClick={handleAdd}
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600"
              aria-label="Add amenity"
            >
              <FaPlus />
            </button>
            <button
              type="button"
              onClick={() => handleRemove(idx)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 disabled:opacity-50"
              aria-label="Remove amenity"
              disabled={amenities.length === 1}
            >
              <FaMinus />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Amenities;
