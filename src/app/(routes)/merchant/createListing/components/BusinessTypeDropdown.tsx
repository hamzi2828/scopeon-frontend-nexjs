"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export type BusinessType = {
  _id: string;
  name: string;
  description?: string;
};

interface Props {
  value: string;
  onChange: (val: string) => void;
}

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

const BusinessTypeDropdown: React.FC<Props> = ({ value, onChange }) => {
  const [types, setTypes] = useState<BusinessType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchTypes = async () => {
      setLoading(true);
      try {
        const res = await axios.get<BusinessType[]>(`${API_BASE}/business-types`);
        setTypes(res.data);
      } catch {
        setError("Failed to load business types");
      }
      setLoading(false);
    };
    fetchTypes();
  }, []);

  return (
    <div className="mb-6">
      <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">
        Business Type
      </label>
      <select
        id="businessType"
        value={value}
        onChange={e => onChange(e.target.value)}
        className="w-full border border-gray-300 rounded-lg p-3 text-gray-900 text-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
        required
      >
        <option value="">Select business type</option>
        {types.map(type => (
          <option key={type._id} value={type._id}>{type.name}</option>
        ))}
      </select>
      {loading && <div className="text-gray-500 text-sm mt-1">Loading...</div>}
      {error && <div className="text-red-600 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default BusinessTypeDropdown;
