//src/app/(routes)/admin/user/page.tsx

"use client";
import React, { useState } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import AdminSidebar from "../component/AdminSidebar";
import UsersContent from "../component/UsersContent";

export default function DashboardPageContent() {
  const [activeContent, setActiveContent] = useState<string>("dashboard");

  return (
    <main>
         <NavBar />
         <div className="flex min-h-screen h-screen">
         <AdminSidebar setActiveContent={setActiveContent} />
         <div className="flex-1 flex flex-col">
      <header className="h-16 bg-white shadow-md flex items-center justify-between px-6">
        <h2 className="text-xl font-semibold">Dashboard</h2>
        <div className="flex items-center">
          <input
            type="search"
            placeholder="Search..."
            className="bg-gray-100 border border-gray-300 p-2 rounded-lg outline-none focus:ring-2 focus:ring-indigo-400"
          />
          <button className="ml-4 bg-green-500 text-white py-2 px-4 rounded-lg">Logout</button>
        </div>
      </header>
      <main className="flex-1 overflow-y-auto p-6"><UsersContent></UsersContent></main>
    </div>
         </div>
         <Footer />
    </main>
  );
}