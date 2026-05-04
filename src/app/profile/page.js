"use client";

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";
import courses from "@/data/courses.json";

export default function ProfilePage() {
  const { user, logout, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) router.push("/login?redirect=/profile");
  }, [user, loading, router]);

  // ✅ Wait for auth to load before rendering anything
  if (loading || !user) return null;

  const initials = user.name
    ? user.name.split(" ").map((n) => n[0]).join("").toUpperCase()
    : user.email?.charAt(0).toUpperCase();

  const enrolledCourses = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 px-4 py-10">
      <div className="max-w-3xl mx-auto flex flex-col gap-6">

        {/* Profile Card */}
        <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center">

          {/* Avatar */}
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center text-white text-3xl font-extrabold mb-4 overflow-hidden flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)", boxShadow: "0 4px 20px rgba(99,102,241,0.35)" }}
          >
            {user.photo ? (
              <img src={user.photo} alt="avatar" className="w-full h-full object-cover" />
            ) : (
              initials
            )}
          </div>

          {/* Name & Email */}
          <h1 className="text-2xl font-extrabold text-indigo-950 mb-1">
            {user.name || "Student"}
          </h1>
          <p className="text-sm text-gray-400 mb-4">{user.email}</p>

          {/* Badges */}
          <div className="flex gap-2 flex-wrap justify-center mb-6">
            <span className="bg-indigo-100 text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
              🎓 Free Student
            </span>
            <span className="bg-green-100 text-green-600 text-xs font-bold px-3 py-1 rounded-full">
              ✅ Active
            </span>
            <span className="bg-purple-100 text-purple-600 text-xs font-bold px-3 py-1 rounded-full">
              🌟 Member
            </span>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 flex-wrap justify-center">
            <Link
              href="/profile/update"
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-indigo-500 border border-indigo-400 rounded-xl hover:bg-indigo-500 hover:text-white transition-all no-underline"
            >
              ✏️ Update Profile
            </Link>
            <button
              onClick={() => { logout(); router.push("/"); }}
              className="inline-flex items-center gap-2 px-5 py-2 text-sm font-bold text-white rounded-xl border-none cursor-pointer transition-all hover:-translate-y-0.5"
              style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
            >
              🚪 Logout
            </button>
          </div>

        </div>

        {/* Info Grid */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-extrabold text-indigo-950 mb-4">
            Account Information
          </h2>
          <div className="flex flex-col gap-3">

            <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Full Name</span>
              <span className="text-sm font-semibold text-gray-700">{user.name || "—"}</span>
            </div>

            <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Email</span>
              <span className="text-sm font-semibold text-gray-700">{user.email}</span>
            </div>

            <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Account Type</span>
              <span className="text-sm font-semibold text-gray-700">Free Student</span>
            </div>

            <div className="flex justify-between items-center bg-gray-50 rounded-xl px-4 py-3">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wide">Courses Enrolled</span>
              <span className="text-sm font-semibold text-gray-700">{enrolledCourses.length}</span>
            </div>

          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-extrabold text-indigo-950">
              My Courses
            </h2>
            <Link href="/courses" className="text-xs font-bold text-indigo-500 no-underline hover:underline">
              Browse More →
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            {enrolledCourses.map((course) => (
              <Link
                key={course.id}
                href={`/courses/${course.id}`}
                className="flex items-center gap-4 bg-gray-50 rounded-xl px-4 py-3 no-underline hover:bg-indigo-50 transition-all"
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-14 h-14 rounded-lg object-cover flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-gray-800 truncate">{course.title}</p>
                  <p className="text-xs text-gray-400">{course.instructor}</p>
                </div>
                <span className="text-xs font-bold text-indigo-500 bg-indigo-100 px-2 py-1 rounded-full flex-shrink-0">
                  ⭐ {course.rating}
                </span>
              </Link>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
}