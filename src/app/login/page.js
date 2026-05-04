"use client";

import { useState, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login, loginWithGoogle, authLoading } = useAuth();
  const router = useRouter();

  const passwordRef = useRef(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      const result = await authClient.signIn.email({ email, password });
      if (result?.error) {
        setError("Invalid email or password.");
        return;
      }
      login({
        name: result?.data?.user?.name,
        email: result?.data?.user?.email,
        photo: result?.data?.user?.image || null,
      });
      router.push("/");
      router.refresh();
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setError("");
    try {
      await loginWithGoogle();
    } catch (err) {
      setError("Google login failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-100 to-indigo-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">

        {/* Header */}
        <div className="text-center mb-6">
          <div className="text-5xl mb-2">🎓</div>
          <h2 className="text-2xl font-bold text-gray-800">Welcome Back</h2>
          <p className="text-sm text-gray-400 mt-1">Log in to continue learning</p>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 text-red-500 text-sm rounded-lg px-4 py-3 mb-4">
            ⚠️ {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email */}
          <div className="flex flex-col gap-1">
            <label className="text-sm font-semibold text-gray-700">
              Email Address
            </label>
            <input
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
              Password
            </label>
            <div className="relative">
              <input
                ref={passwordRef}
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="input w-full border border-gray-300 focus:outline-none focus:border-indigo-400 pr-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Submit */}
          <button
            type="submit"
            className="btn w-full mt-1 text-white font-bold text-base rounded-xl shadow-lg bg-gradient-to-r from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700 hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 border-none"
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <span className="loading loading-spinner loading-sm"></span>
                Logging in...
              </span>
            ) : "Log In"}
          </button>

        </form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-5">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400 font-medium">or continue with</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div>

        {/* Google */}
        <button
          onClick={handleGoogle}
          disabled={authLoading}
          className="btn btn-outline w-full flex items-center justify-center gap-3"
        >
          {authLoading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : (
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="w-5 h-5"
            />
          )}
          Continue with Google
        </button>

        {/* Register link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <Link href="/register" className="text-primary font-semibold">
            Register here
          </Link>
        </p>

      </div>
    </div>
  );
}