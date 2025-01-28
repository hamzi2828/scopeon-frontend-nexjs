//src/app/(routes)/admin/component/DashboardContent.tsx
"use client";
import React from "react";

const DashboardPage: React.FC = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Total Users</h3>
          <p className="mt-2 text-gray-600 text-3xl">1,200</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">New Orders</h3>
          <p className="mt-2 text-gray-600 text-3xl">500</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Revenue</h3>
          <p className="mt-2 text-gray-600 text-3xl">$24,000</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800">Support Tickets</h3>
          <p className="mt-2 text-gray-600 text-3xl">50</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
