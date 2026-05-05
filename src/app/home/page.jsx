"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function HomePage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading, router]);

  if (loading || !user) return null;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 to-indigo-100 text-center px-4">
      <h1 className="text-3xl font-extrabold text-indigo-950 mb-2">
        Welcome, {user.name || user.email} 🎉
      </h1>
      <p className="text-gray-500 mb-6">You are successfully logged in.</p>
      <Link
        href="/courses"
        className="inline-flex items-center gap-2 px-6 py-3 text-white font-bold rounded-xl no-underline hover:-translate-y-0.5 transition-all"
        style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
      >
        Browse Courses →
      </Link>
    </div>
  );
}