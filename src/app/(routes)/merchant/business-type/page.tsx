"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3001";

type BusinessType = {
  _id: string;
  name: string;
  description?: string;
};

const BusinessTypePage = () => {
  const [types, setTypes] = useState<BusinessType[]>([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [editing, setEditing] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchTypes = async () => {
    setLoading(true);
    try {
      const res = await axios.get<BusinessType[]>(`${API_BASE}/business-types`);
      setTypes(res.data);
    } catch {
      setError("Failed to fetch business types");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchTypes();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      if (editing) {
        await axios.put(`${API_BASE}/business-types/${editing}`, { name, description });
      } else {
        await axios.post(`${API_BASE}/business-types`, { name, description });
      }
      setName("");
      setDescription("");
      setEditing(null);
      fetchTypes();
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message || "Error saving business type");
      } else {
        setError("Error saving business type");
      }
    }
  };

  const handleEdit = (type: BusinessType) => {
    setName(type.name);
    setDescription(type.description || "");
    setEditing(type._id);
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Are you sure you want to delete this business type?")) return;
    try {
      await axios.delete(`${API_BASE}/business-types/${id}`);
      fetchTypes();
    } catch {
      setError("Error deleting business type");
    }
  };

  return (
    <div className="max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold mb-4">Business Types</h2>
      <form onSubmit={handleSubmit} className="mb-6 space-y-2">
        <input
          type="text"
          placeholder="Business type name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="border rounded px-2 py-1 w-full"
        />
        <textarea
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded px-2 py-1 w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          {editing ? "Update" : "Add"}
        </button>
        {editing && (
          <button type="button" onClick={() => { setEditing(null); setName(""); setDescription(""); }} className="ml-2 px-4 py-2 rounded bg-gray-300">Cancel</button>
        )}
      </form>
      {error && <div className="text-red-600 mb-2">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Description</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {types.map((type) => (
              <tr key={type._id}>
                <td className="border p-2">{type.name}</td>
                <td className="border p-2">{type.description}</td>
                <td className="border p-2 flex items-center justify-center gap-2">
                <button
                  className="text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1 p-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => handleEdit(type)}
                  title="Edit"
                  aria-label="Edit"
                >
                  <FaEdit />
                </button>
                <button
                  className="text-red-600 hover:text-red-800 transition-colors flex items-center gap-1 p-1 rounded focus:outline-none focus:ring-2 focus:ring-red-300"
                  onClick={() => handleDelete(type._id)}
                  title="Delete"
                  aria-label="Delete"
                >
                  <FaTrash />
                </button>
              </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BusinessTypePage;
