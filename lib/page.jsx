"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { account, ID } from "@/lib/appwrite";

function SignUpPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This function checks if a session already exists.
    const checkSession = async () => {
      try {
        await account.get();
        // If account.get() is successful, a session exists.
        // Redirect the user to the dashboard.
        router.push("/dashboard");
      } catch (_error) {
        // If it fails, no session exists. The user can see the signup form.
        setIsLoading(false);
      }
    };

    checkSession();
  }, [router]);

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    try {
      // account.create() creates the user AND a new session for them.
      await account.create(ID.unique(), email, password, name);

      // After successful signup, redirect to the dashboard.
      // No need to call a login function here.
      router.push("/dashboard");
    } catch (err) {
      console.error("Detailed signup error:", err); // Log the entire error object

      // Appwrite's response object often contains the real error message.
      const errorMessage =
        err.response?.message || err.message || "An unknown error occurred.";

      // This will now display the specific error from Appwrite, for example:
      // "Invalid `password` param: Password must be at least 8 characters long."
      // "A user with the same email already exists."
      setError(errorMessage);
    }
  };

  // Show a loading indicator while checking for an active session.
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <form onSubmit={handleSignUp}>
        <h2>Create an Account</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
}

export default SignUpPage;