"use client";

import { useAuth } from "@/context/AuthContext";
import Link from "next/link";

export default function ProfilePage() {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="p-6 text-center">
        Please login first.
      </div>
    );
  }

  return (
    <div className="p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">
        My Profile
      </h1>

      <p className="mb-2">Email: {user.email}</p>

      <Link href="/profile/update">
        <button className="btn btn-primary mt-4">
          Update Profile
        </button>
      </Link>
    </div>
  );
}