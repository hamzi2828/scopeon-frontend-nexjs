//src/app/(routes)/admin/component/DashboardContent.tsx
"use client";
import React, { useState } from "react";

// Mock user data (including email and full name)
const initialUsers = [
  { id: 1, fullName: "John Doe", email: "john.doe@example.com", role: "Admin" },
  { id: 2, fullName: "Jane Smith", email: "jane.smith@example.com", role: "Editor" },
  { id: 3, fullName: "Sam Brown", email: "sam.brown@example.com", role: "Viewer" },
];

const UsersPageContent: React.FC = () => {
  const [users, setUsers] = useState(initialUsers);
  const [searchQuery, setSearchQuery] = useState("");

  // Handler for changing user role
  const changeRole = (userId: number, newRole: string): void => {
    setUsers(users.map((user) =>
      user.id === userId ? { ...user, role: newRole } : user
    ));
    console.log(`Role for user with ID ${userId} changed to ${newRole}`);
  };

  // Filter users based on search query
  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Users</h2>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by name or email"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="border px-2 py-1 mb-4 rounded-lg w-full"
      />

      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border px-4 py-2 text-left">User ID</th>
            <th className="border px-4 py-2 text-left">Full Name</th>
            <th className="border px-4 py-2 text-left">Email</th>
            <th className="border px-4 py-2 text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.id}</td>
              <td className="border px-4 py-2">{user.fullName}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">
                <select
                  value={user.role}
                  onChange={(e) => changeRole(user.id, e.target.value)}
                  className="border px-2 py-1 rounded-lg"
                >
                  <option value="Admin">Admin</option>
                  <option value="Editor">Editor</option>
                  <option value="Viewer">Viewer</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPageContent;
