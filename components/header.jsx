"use client";
// components/Header.tsx
import { Search, Bell } from "lucide-react";
// import { useUser } from "./app/context/UserContext";
import { useUser } from "./UserContext";


const getInitials = (name) => {
  if (!name) return "";
  const names = name.split(' ');
  if (names.length === 1) return names[0].charAt(0).toUpperCase();
  return (names[0].charAt(0) + names[names.length - 1].charAt(0)).toUpperCase();
};

export function DashboardHeader() {
  const { user } = useUser();

  const userName = user ? user.name : "Guest";
  const userInitials = getInitials(userName);
  
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>

      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full"></div>
      </div>

      <div className="flex items-center space-x-4">
        <Search className="text-gray-400 w-5 h-5" />
        <button className="relative p-2 text-[#929EAE] hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 bg-[#FAFAFA] rounded-[100px] p-2.5">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
            {userInitials}
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-900">{userName}</p>
          </div>
          <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none cursor-pointer">
            <option>▼</option>
          </select>
        </div>
      </div>
    </header>
  );
}

export function TransactionsHeader() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <h1 className="text-2xl font-bold text-gray-900">Transaction</h1>

      <div className="flex items-center flex-1 max-w-md">
        <div className="relative w-full"></div>
      </div>

      <div className="flex items-center space-x-4">
        <Search className="text-gray-400 w-5 h-5" />
        <button className="relative p-2 text-[#929EAE] hover:bg-gray-100 rounded-lg transition-colors">
          <Bell className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3 bg-[#FAFAFA] rounded-[100px] p-2.5">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-medium">
            MN
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-900">Mahfuzul Nabil</p>
          </div>
          <select className="text-sm text-gray-600 bg-transparent border-none focus:outline-none cursor-pointer">
            <option>▼</option>
          </select>
        </div>
      </div>
    </header>
  );
}
