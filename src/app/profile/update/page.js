"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function UpdateProfile() {
  const { user, login } = useAuth();
  const [name, setName] = useState("");
  const router = useRouter();

  const handleUpdate = (e) => {
    e.preventDefault();

    // simple update (reuse login)
    login(user.email);

    router.push("/profile");
  };

  if (!user) {
    return <div className="p-6 text-center">Please login first.</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleUpdate} className="p-6 shadow rounded w-80">
        <h2 className="text-xl font-bold mb-4 text-center">
          Update Profile
        </h2>

        <input
          type="text"
          placeholder="New Name"
          className="input input-bordered w-full mb-3"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="New Image URL"
          className="input input-bordered w-full mb-3"
        />

        <button className="btn btn-primary w-full">
          Update
        </button>
      </form>
    </div>
  );
}