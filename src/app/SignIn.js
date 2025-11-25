"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { account } from "/lib/appwrite";
import { useUser } from "../../components/UserContext"; // This path is correct if `components` is outside `src`

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { setUser } = useUser();
  const router = useRouter();

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const session = await account.createEmailPasswordSession(email, password);
      console.log("Session created successfully!", session);
      const currentUser = await account.get();
      setUser(currentUser);
      // Redirect to dashboard after successful sign-in
      router.push('/dashboard');
    } catch (err) {
      console.error("Failed to create session:", err);
      setError(err.message);
    }
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center text-gray-900">Sign In</h1>
      <form onSubmit={handleSignIn} className="space-y-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
          <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500" />
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div>
          <button type="submit" className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign In</button>
        </div>
      </form>
    </div>
  );
}