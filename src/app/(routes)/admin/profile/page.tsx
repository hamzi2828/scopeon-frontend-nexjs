//src/app/(routes)/admin/page.tsx

"use client";
import React, { useState } from "react";
import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import AdminSidebar from "../component/AdminSidebar";
import ProfileCotent from "../component/ProfileContent";
import DashboardHeader from "../component/DashboardHeader";

export default function DashboardPageContent() {
  const [activeContent, setActiveContent] = useState<string>("dashboard");

  return (
    <main>
         <NavBar />
         <div className="flex min-h-screen h-screen">
         <AdminSidebar setActiveContent={setActiveContent} />
         <div className="flex-1 flex flex-col">
         <DashboardHeader></DashboardHeader>

            <main className="flex-1 overflow-y-auto p-6"><ProfileCotent></ProfileCotent></main>
            </div>
         </div>
         <Footer />
    </main>
  );
}