"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const { user, login, loading } = useAuth();
  const router = useRouter();

  // Prefill existing data
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [success, setSuccess] = useState("");

  // Load current user data
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setPhoto(user.photo || "");
    }
  }, [user]);

  // Redirect if not logged in
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login?redirect=/profile/update");
    }
  }, [user, loading, router]);

  // Wait until auth loads
  if (loading || !user) return null;

  const handleUpdate = (e) => {
    e.preventDefault();

    // Update user data in context
    login({
      ...user,
      name,
      photo,
    });

    // Success message
    setSuccess("✅ Profile updated successfully!");

    // Redirect after short delay
    setTimeout(() => {
      router.push("/profile");
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 flex items-center justify-center px-4 py-10">
      
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        
        {/* Heading */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-indigo-800 mb-2">
            Update Profile
          </h1>

          <p className="text-sm text-gray-500">
            Edit your personal information
          </p>
        </div>

        {/* Success message */}
        {success && (
          <div className="mb-4 bg-green-100 text-green-700 text-sm font-semibold px-4 py-3 rounded-xl">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleUpdate} className="flex flex-col gap-4">

          {/* Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={user.email}
              disabled
              className="w-full border border-gray-200 bg-gray-100 rounded-xl px-4 py-3 text-gray-500 cursor-not-allowed"
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Profile Image URL
            </label>

            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              placeholder="Paste image URL"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Preview */}
          {photo && (
            <div className="flex justify-center mt-2">
              <img
                src={photo}
                alt="Preview"
                className="w-24 h-24 rounded-full object-cover border-4 border-indigo-100 shadow"
              />
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-3 mt-4">

            <button
              type="button"
              onClick={() => router.push("/profile")}
              className="flex-1 border border-gray-300 text-gray-700 font-semibold py-3 rounded-xl hover:bg-red-200 transition-all"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="flex-1 text-white font-bold py-3 rounded-xl transition-all hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              }}
            >
              Save Changes
            </button>

          </div>

        </form>
      </div>
    </div>
  );
}