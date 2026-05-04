"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function NotFound() {

  useEffect(() => {
    console.warn("404 | Page not found:", window.location.href);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 px-6 text-center">

      {/* 404 in red */}
      <div className="text-[40px] font-black leading-none mb-2 select-none text-red-500">
        404
      </div>

      {/* Emoji */}
      <div className="text-3xl mb-2">🔍</div>

      {/* Heading */}
      <h1 className="text-2xl font-bold text-indigo-800 mb-2">
        Page Not Found !!
      </h1>

      {/* Description */}
      <p className="text-gray-500 text-base max-w-sm mb-8">
        Oops! The page you are looking for doesn't exist or has been moved.
        Let's get you back on track.
      </p>

      {/* Go Home button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-3 text-white font-bold text-base rounded-xl no-underline hover:-translate-y-0.5 hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg hover:shadow-indigo-300"
      >
        Go Home
      </Link>

    </div>
  );
}