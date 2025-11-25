"use client";

import { useEffect, useState } from "react";
import { account } from "./appwrite"; // Corrected import path
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserSession = async () => {
      try {
        const currentUser = await account.get();
        setUser(currentUser);
      } catch (error) {
        console.log("No active session found.");
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkUserSession();
  }, []);

  if (isLoading) {
    return (
      <main className="flex items-center justify-center min-h-screen">
        <p className="text-lg">Loading...</p>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to Finance Dashboard</h1>
      <p className="text-lg mb-8">Your personal finance tracker.</p>
      {user ? (
        <Link
          href="/dashboard"
          className="px-6 py-3 font-semibold text-lg text-[#1B212D] bg-[#C8EE44] rounded-md hover:bg-lime-500"
        >
          GO TO DASHBOARD
        </Link>
      ) : (
        <Link
          href="/signup"
          className="px-6 py-3 font-semibold text-lg text-[#1B212D] bg-[#C8EE44] rounded-md hover:bg-lime-500"
        >
          GET STARTED
          </Link>
      )}
    </main>
  );
}