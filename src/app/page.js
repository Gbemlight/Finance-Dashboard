"use client";

import { useEffect } from "react";
import { account } from "/lib/appwrite";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    account.get().then(console.log).catch(console.error);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center">
      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
        WELCOME TO FINANCE DASHBOARD
      </h1>
      <Link href="/signin">
        <button className=" cursor-pointer px-8 py-3 font-semibold text-lg text-[#1B212D] bg-[#C8EE44] rounded-md hover:bg-lime-500 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400">
          LOGIN
        </button>
      </Link>
    </main>
  );
}
