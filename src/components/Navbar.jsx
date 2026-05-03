"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const initials = user?.name
    ? user.name.charAt(0).toUpperCase()
    : user?.email?.charAt(0).toUpperCase();

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#e8eeff] shadow-md border-b border-indigo-100"
          : "bg-[#f0f4ff]/90 backdrop-blur-md border-b border-indigo-50"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold text-indigo-600 no-underline whitespace-nowrap"
        >
          🎓SkillSphere
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1 list-none m-0 p-0">
          <li>
            <Link href="/" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 text-sm font-medium px-3 py-2 rounded-lg no-underline transition-all">
              Home
            </Link>
          </li>
          <li>
            <Link href="/courses" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 text-sm font-medium px-3 py-2 rounded-lg no-underline transition-all">
              Courses
            </Link>
          </li>
          <li>
            <Link href="/profile" className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 text-sm font-medium px-3 py-2 rounded-lg no-underline transition-all">
              My Profile
            </Link>
          </li>
        </ul>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {user ? (
            <div className="flex items-center gap-3">

              {/* Avatar */}
              <div className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                {user.photo ? (
                  <img
                    src={user.photo}
                    alt="avatar"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  initials
                )}
              </div>

              {/* First name */}
              <span className="hidden md:block text-sm font-semibold text-gray-700">
                {user.name?.split(" ")[0] || "User"}
              </span>

              {/* Profile button */}
              <Link
                href="/profile"
                className="hidden md:inline-flex text-sm font-semibold text-indigo-500 px-4 py-1.5 rounded-lg border border-indigo-400 hover:bg-indigo-500 hover:text-white transition-all no-underline"
              >
                👤 Profile
              </Link>

              {/* Logout button */}
              <button
                onClick={logout}
                className="text-sm font-semibold text-white px-4 py-1.5 rounded-lg border-none cursor-pointer transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                Logout
              </button>

            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-semibold text-indigo-500 px-4 py-1.5 rounded-lg border border-indigo-400 hover:bg-indigo-500 hover:text-white transition-all no-underline"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="text-sm font-semibold text-white px-4 py-1.5 rounded-lg no-underline hover:-translate-y-0.5 transition-all"
                style={{ background: "linear-gradient(135deg, #6366f1, #8b5cf6)" }}
              >
                Register
              </Link>
            </>
          )}

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="block w-5 h-0.5 bg-gray-500 rounded" />
            <span className="block w-5 h-0.5 bg-gray-500 rounded" />
            <span className="block w-5 h-0.5 bg-gray-500 rounded" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col px-6 pb-4 pt-2 border-t border-gray-100 gap-1">
          <Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-2 border-b border-gray-50 no-underline">Home</Link>
          <Link href="/courses" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-2 border-b border-gray-50 no-underline">Courses</Link>
          <Link href="/profile" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-2 border-b border-gray-50 no-underline">My Profile</Link>
          {user ? (
            <button
              onClick={() => { logout(); setMenuOpen(false); }}
              className="text-left text-red-500 font-medium py-2 bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <Link href="/login" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-2 no-underline">Login</Link>
              <Link href="/register" onClick={() => setMenuOpen(false)} className="text-gray-700 font-medium py-2 no-underline">Register</Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}