"use client";
import React, { useState } from "react";
import { FaHome, FaBloggerB, FaUser, FaUsers, FaKey, FaChevronLeft, FaChevronRight, FaChevronDown } from "react-icons/fa";
import Link from "next/link"; // Use Next.js Link for navigation
import { usePathname } from "next/navigation"; // To determine the current active path

interface AdminSidebarProps {
  setActiveContent: (content: string) => void; // Function to set active content
}

const AdminSidebar: React.FC<AdminSidebarProps> = ({ setActiveContent }) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);

  const pathname = usePathname(); // Get the current path

  const toggleSidebar = (): void => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleSubMenu = (): void => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };

  const isActive = (path: string): boolean => {
    return pathname === path; // Check if the current path matches
  };

  const handleLinkClick = (content: string): void => {
    setActiveContent(content); // Set active content when a sidebar item is clicked
  };

  return (
    <aside className={`${isCollapsed ? "w-16" : "w-64"} bg-gray-800 text-white flex flex-col transition-width duration-300`}>
      <div className="h-16 flex items-center justify-between px-4 bg-gray-900">
        <h1 className={`text-2xl font-bold ${isCollapsed ? "hidden" : "block"}`}>Dashboard</h1>
        <button onClick={toggleSidebar} className="text-white focus:outline-none">
          {isCollapsed ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto mt-4">
        <Link
          href="/admin/dashboard"
          className={`block py-2.5 px-4 flex items-center rounded transition duration-200 ${
            isActive("/admin/dashboard") ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => handleLinkClick("dashboard")}
        >
          <FaHome className="w-5 h-5 mr-2" />
          {!isCollapsed && <span>Dashboard</span>}
        </Link>
        <Link
          href="/admin/blogs"
          className={`block py-2.5 px-4 flex items-center rounded transition duration-200 ${
            isActive("/admin/blogs") ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => handleLinkClick("blogs")}
        >
          <FaBloggerB className="w-5 h-5 mr-2" />
          {!isCollapsed && <span>Blogs</span>}
        </Link>
        <Link
          href="/admin/profile"
          className={`block py-2.5 px-4 flex items-center rounded transition duration-200 ${
            isActive("/admin/profile") ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => handleLinkClick("profile")}
        >
          <FaUser className="w-5 h-5 mr-2" />
          {!isCollapsed && <span>Profile</span>}
        </Link>
        <Link
          href="/admin/users"
          className={`block py-2.5 px-4 flex items-center rounded transition duration-200 ${
            isActive("/admin/users") ? "bg-gray-700" : "hover:bg-gray-700"
          }`}
          onClick={() => handleLinkClick("users")}
        >
          <FaUsers className="w-5 h-5 mr-2" />
          {!isCollapsed && <span>Users</span>}
        </Link>
        <div>
          <button
            onClick={toggleSubMenu}
            className={`block w-full py-2.5 px-4 flex items-center justify-between rounded transition duration-200 ${
              isSubMenuOpen ? "bg-gray-700" : "hover:bg-gray-700"
            }`}
          >
            <div className="flex items-center">
              <FaKey className="w-5 h-5 mr-2" />
              {!isCollapsed && <span>Roles and Permissions</span>}
            </div>
            {!isCollapsed && <FaChevronDown className={`${isSubMenuOpen ? "rotate-180" : ""} transition-transform`} />}
          </button>
          {!isCollapsed && isSubMenuOpen && (
            <div className="px-2 mt-1">
              <Link
                href="/admin/roles"
                className={`block py-2 px-4 my-1 text-sm rounded transition duration-200 ${
                  isActive("/admin/roles") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
                onClick={() => handleLinkClick("roles")}
              >
                Role
              </Link>
              <Link
                href="/admin/permissions"
                className={`block py-2 px-4 my-1 text-sm rounded transition duration-200 ${
                  isActive("/admin/permissions") ? "bg-gray-700" : "hover:bg-gray-700"
                }`}
                onClick={() => handleLinkClick("permissions")}
              >
                Permission
              </Link>
            </div>
          )}
        </div>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
