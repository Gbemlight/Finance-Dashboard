"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  Home,
  FileText,
  Wallet,
  Settings,
  HelpCircle,
  LogOut,
  Receipt,
} from "lucide-react";
import logo from "/assets/Exclude.png";
import { useUser } from "./UserContext";
import { account } from "/lib/appwrite";

const menuItems = [
  { label: "Dashboard", icon: Home, href: "/dashboard" },
  { label: "Transactions", icon: Receipt, href: "/transactions" },
  { label: "Invoices", icon: FileText, href: "/invoices" },
  { label: "Wallets", icon: Wallet, href: "/wallets" },
  { label: "Settings", icon: Settings, href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const { setUser } = useUser();

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);
      router.push("/"); // Redirect to the landing page
    } catch (error) {
      console.error("Failed to log out:", error);
    }
  };

  return (
    <>
      {/* 🖥️ Desktop / Large Screen Sidebar */}
      <aside className="hidden lg:flex fixed top-0 left-0 w-64 bg-[#FAFAFA] border-r border-gray-200 h-screen flex-col z-40">
        {/* Logo */}
        <div className="mb-10">
          <div className="flex items-center gap-3 ml-4">
            <div className="transform translate-y-[30px]">
              <Image
                src={logo}
                alt="Maglo logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <h1 className="text-xl font-bold transform translate-y-[30px]">
              <span className="text-black">Maglo</span>
              <span className="text-black">.</span>
            </h1>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group ${
                  isActive
                    ? "bg-[#C8EE44] text-[#1B212D]"
                    : "text-gray-500 hover:bg-[#C8EE44] hover:text-[#1B212D]"
                }`}
              >
                <span className="font-medium flex items-center gap-3">
                  <Icon className="w-5 h-5 transition-transform duration-200" />
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom Links */}
        <div className="p-4 border-t border-gray-200 space-y-1">
          <Link
            href="/help"
            className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-[#C8EE44] hover:text-[#1B212D] transition-all duration-200 group"
          >
            <span className="font-medium flex items-center gap-3">
              <HelpCircle className="w-5 h-5 transition-transform duration-200" />
              Help
            </span>
          </Link>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-500 hover:bg-[#C8EE44] hover:text-[#1B212D] transition-all duration-200 group"
          >
            <span className="font-medium flex items-center gap-3">
              <LogOut className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" />
              Logout
            </span>
          </button>
        </div>
      </aside>

      {/* 📱 Tablet & Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 flex justify-around items-center py-3 lg:hidden z-50">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-col items-center text-xs ${
                isActive ? "text-[#C8EE44]" : "text-gray-500"
              }`}
            >
              <Icon className={`w-6 h-6 mb-1 ${isActive ? "text-[#C8EE44]" : ""}`} />
              <span className="text-[11px] font-medium">{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}
