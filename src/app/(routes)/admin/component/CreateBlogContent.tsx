"use client";
import React, { useState } from "react";
import axios from "axios";

const CreateBlogContentPage: React.FC = () => {
  const [formData, setFormData] = useState<{
    title: string;
    description: string;
    tags: string[];
    metaTitle: string;
    metaDescription: string;
    category: string;
    images: File[]; // Changed to an array to handle multiple images
    metaSchema: string;
  }>({
    title: "",
    description: "",
    tags: [],
    metaTitle: "",
    metaDescription: "",
    category: "",
    images: [], // Initialize with empty array
    metaSchema: "",
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle tag change
  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      tags: e.target.value.split(",").map((tag) => tag.trim()), // Split by comma and remove leading/trailing spaces
    });
  };

  // Handle image file change
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      setFormData({
        ...formData,
        images: Array.from(files), // Convert FileList to an array
      });
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Prepare form data with images (if any)
      const form = new FormData();
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("tags", JSON.stringify(formData.tags)); // Convert array to string
      form.append("metaTitle", formData.metaTitle);
      form.append("metaDescription", formData.metaDescription);
      form.append("category", formData.category);

      // Append each image if exists
      formData.images.forEach((image, index) => {
        form.append(`image_${index}`, image); // Append with different keys for each image
      });

      // Append metaSchema as JSON string
      form.append("metaSchema", formData.metaSchema);

      // Make API call to submit the data
      const response = await axios.post("/api/blogs", form, {
        headers: {
          "Content-Type": "multipart/form-data", // For sending file data
        },
      });

      console.log("Blog created successfully:", response.data);
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Create New Blog</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows={4}
            required
          />
        </div>

        <div>
          <label htmlFor="tags" className="block text-sm font-medium">
            Tags (comma separated)
          </label>
          <input
            type="text"
            id="tags"
            value={formData.tags.join(", ")} // Join tags array to show as string
            onChange={handleTagsChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="metaTitle" className="block text-sm font-medium">
            Meta Title
          </label>
          <input
            type="text"
            id="metaTitle"
            name="metaTitle"
            value={formData.metaTitle}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="metaDescription" className="block text-sm font-medium">
            Meta Description
          </label>
          <textarea
            id="metaDescription"
            name="metaDescription"
            value={formData.metaDescription}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows={3}
            required
          />
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium">
            Category
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="images" className="block text-sm font-medium">
            Upload Images
          </label>
          <input
            type="file"
            id="images"
            onChange={handleImageChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            accept="image/*"
            multiple // Allows multiple file selection
          />
        </div>

        <div>
          <label htmlFor="metaSchema" className="block text-sm font-medium">
            Meta Schema (JSON-LD)
          </label>
          <textarea
            id="metaSchema"
            name="metaSchema"
            value={formData.metaSchema}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            rows={6}
            placeholder='{"@context": "https://schema.org", "@type": "BlogPosting", "headline": "Title", "author": {"@type": "Person", "name": "Author Name"}}'
          />
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Create Blog
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlogContentPage;
