"use client";

import React, { useState } from "react";
import {
  Home,
  FileText,
  BarChart2,
  ThumbsUp,
  MessageSquare,
  Share2,
  LogOut,
  Menu,
  Search,
  User,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menuItems = [
  { name: "Dashboard", icon: Home, href: "/" },
  { name: "Content", icon: FileText, href: "/content" },
  { name: "Analytics", icon: BarChart2, href: "/analytics" },
  { name: "Likes", icon: ThumbsUp, href: "/likes" },
  { name: "Comments", icon: MessageSquare, href: "/comments" },
  { name: "Share", icon: Share2, href: "/share" },
];

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="md:hidden fixed top-3
         right-4 z-30 p-2 bg-gray-600 text-white rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
        onClick={toggleSidebar}
      >
        <Menu className="h-5 w-5" />
      </button>
      <aside
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 fixed md:static top-0 left-0 z-20 w-64 bg-white h-full p-5 flex flex-col transition-transform duration-300 ease-in-out`}
      >
        <div className="md:hidden mb-4">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
              <User className="w-full h-full p-2" />
            </div>
            <span className="font-semibold text-gray-900">John Doe</span>
          </div>
          <div className="relative mb-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <Link href="/login" className="w-full md:w-auto mb-4 md:mb-0 md:mr-4">
            <button className="w-full bg-gray-700 text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50 mb-4">
              Login
            </button>
          </Link>
        </div>
        <nav className="flex-grow">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg ${
                    pathname === item.href
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="flex items-center text-gray-600 hover:text-gray-800">
          <LogOut className="mr-2 h-5 w-5" />
          Logout
        </button>
      </aside>
    </>
  );
};

export default Sidebar;
