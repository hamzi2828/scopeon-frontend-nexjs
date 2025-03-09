"use client";
import { useRouter } from "next/navigation"; // Using Next.js Router
import React, { useState } from "react";

// Mock data for blogs
const initialBlogs = [
  { id: 1, title: "Blog 1", description: "This is the first blog" },
  { id: 2, title: "Blog 2", description: "This is the second blog" },
  { id: 3, title: "Blog 3", description: "This is the third blog" },
];

const BlogContentPage: React.FC = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter(); // Declare the router variable here

  // Handler for deleting a blog
  const deleteBlog = (id: number): void => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  // Handler for editing a blog
  const editBlog = (id: number): void => {
    alert(`Edit blog with ID: ${id}`);
  };

  // Handler for creating a new blog
  const createBlog = (): void => {
    router.push("/admin/blogs/createBlog");
  };

  // Filter blogs based on search query
  const filteredBlogs = blogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Blog Management</h2>
        <button
          onClick={createBlog}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Create Blog
        </button>
      </div>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by title or description"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border px-2 py-1 mb-4 rounded-lg w-full"
      />

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">ID</th>
            <th className="border px-4 py-2 text-left">Title</th>
            <th className="border px-4 py-2 text-left">Description</th>
            <th className="border px-4 py-2 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredBlogs.map((blog) => (
            <tr key={blog.id}>
              <td className="border px-4 py-2">{blog.id}</td>
              <td className="border px-4 py-2">{blog.title}</td>
              <td className="border px-4 py-2">{blog.description}</td>
              <td className="border px-4 py-2">
                <button
                  onClick={() => editBlog(blog.id)}
                  className="bg-yellow-500 text-white py-1 px-2 rounded-lg mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteBlog(blog.id)}
                  className="bg-red-500 text-white py-1 px-2 rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BlogContentPage;
