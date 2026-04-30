"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, logout } = useAuth();

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold">
          SkillSphere
        </Link>
      </div>

      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/profile">My Profile</Link>
      </div>

      <div className="flex gap-2">
        {user ? (
          <>
            <span className="text-sm">{user.email}</span>
            <button onClick={logout} className="btn btn-sm">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="btn btn-outline btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
}