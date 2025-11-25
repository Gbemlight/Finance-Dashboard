"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ID } from "appwrite";
import { account } from "../appwrite"; // Corrected import path
import { Eye, EyeOff } from "lucide-react";
import { useUser } from "../../../components/UserContext";
import profilePic from "../../../assets/Image1.png";
import logo from "../../../assets/Exclude.png";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, setUser } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);

  const validateInputs = () => {
    if (!fullName.trim()) {
      setError("Full name is required");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Enter a valid email address");
      return false;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateInputs()) return;
    setLoading(true);

    try {
      // Create new user in Appwrite
      await account.create(ID.unique(), email, password, fullName);
      
      // Log the user in to create a session
      await account.createEmailPasswordSession(email, password);
      
      router.push("/dashboard");
    } catch (err) {
      if (err.message.includes("already exists")) {
        setError("This email is already registered.");
      } else {
        setError(err.message || "Signup failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side (Form Section) */}
      <div className="flex flex-col justify-center px-10 md:px-20 lg:px-32 bg-white">
        <div className="mb-10 flex items-center gap-3">
          <Image src={logo} alt="Maglo logo" width={36} height={36} />
          <h1 className="text-xl font-bold text-black">Maglo.</h1>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-1">Create new account</h2>
          <p className="text-gray-500 text-sm">
            Welcome! Please enter your details to continue
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-lime-400 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-lime-400 focus:outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-lime-400 focus:outline-none pr-10"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className=" cursor-pointer w-full bg-[#C8EE44] hover:bg-lime-500 text-[#1B212D] font-medium py-2 rounded-md transition disabled:opacity-50"
            disabled={loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </button>

          {error && (
            <p className="text-center text-sm text-red-600">{error}</p>
          )}

          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              href="/signin"
              className="text-[#1B212D] font-medium hover:underline"
            >
              Sign in
            </Link>
          </p>
        </form>
      </div>

      {/* Right Side (Image Section) */}
      <div className="hidden md:flex items-center justify-center bg-gray-50 min-h-screen">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-full h-full max-w-2xl">
            <Image
              src={profilePic}
              alt="Hand holding clock"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
