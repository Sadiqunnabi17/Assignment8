"use client";

import { useState, useRef } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const photoRef = useRef(null);

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");
    if (!name || !email || !password) {
      setError("Please fill in all required fields.");
      return;
    }
    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }
    setLoading(true);
    try {
      const formattedName = name.trim().replace(/\b\w/g, (c) => c.toUpperCase());
      const result = await authClient.signUp.email({
        name: formattedName,
        email,
        password,
        image: photoURL || undefined,
      });
      if (result.error) {
        setError(result.error.message || "Registration failed.");
        return;
      }
      router.push("/");
    } catch (err) {
      setError("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🎓</div>
          <h2 className="text-2xl font-bold text-gray-800">Create Account</h2>
          <p className="text-sm text-gray-400 mt-1">Join thousands of learners today</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 text-sm rounded-lg px-4 py-3 mb-4">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Name <span className="text-red-400">*</span>
            </label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="input w-full border border-gray-300 focus:outline-none focus:border-indigo-400"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && emailRef.current?.focus()}
            />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Email Address <span className="text-red-400">*</span>
            </label>
            <input
              ref={emailRef}
              type="email"
              placeholder="you@example.com"
              className="input w-full border border-gray-300 focus:outline-none focus:border-indigo-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && passwordRef.current?.focus()}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Password <span className="text-red-400">*</span>
            </label>
            <div className="relative">
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                placeholder="At least 8 characters"
                className="input w-full border border-gray-300 focus:outline-none focus:border-indigo-400 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && photoRef.current?.focus()}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-indigo-500 transition-colors bg-transparent border-none cursor-pointer"
              >
                {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
              </button>
            </div>
          </div>

          {/* Photo URL */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Photo URL <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              ref={photoRef}
              type="url"
              placeholder="https://example.com/your-photo.jpg"
              className="input w-full border border-gray-300 focus:outline-none focus:border-indigo-400"
              value={photoURL}
              onChange={(e) => setPhotoURL(e.target.value)}
            />
            {photoURL && (
              <div className="flex items-center gap-3 mt-2">
                <img
                  src={photoURL}
                  alt="Preview"
                  className="w-10 h-10 rounded-full object-cover border-2 border-violet-300"
                  onError={(e) => (e.target.style.display = "none")}
                />
                <span className="text-xs text-gray-400">Profile preview</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="btn w-full mt-1 text-white font-bold text-base rounded-xl shadow-lg bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 border-none"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Creating account...
              </span>
            ) : "Create Account"}
          </button>

        </form>

        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link href="/login" className="text-primary font-semibold">
            Log in here
          </Link>
        </p>

      </div>
    </div>
  );
}