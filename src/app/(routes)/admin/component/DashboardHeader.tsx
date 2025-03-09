"use client";
import React from "react";
import { useRouter } from "next/navigation"; // Using Next.js Router
import Cookies from "js-cookie";

const logoutUser = (): void => {
    Cookies.remove("token"); // Clear the stored token
  };


const DashboardHeader: React.FC = () => {
    const router = useRouter(); // useRouter hook inside the component

  // Handler for logout button
  const handleLogout = (): void => {
    logoutUser(); // Remove the token
    router.push("/signin"); // Redirect to the login page after logout
  };
  return (
    <div>
      <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="bg-gray-100 border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          />
            <button
            onClick={handleLogout} // Call handleLogout on button click
            className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg"
          >
            Logout
          </button>
        </div>
      </header>
    </div>
  );
};

export default DashboardHeader;