
"use client";

import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div
      className="rounded-2xl overflow-hidden flex flex-col h-full cursor-pointer group"
      style={{
        background: "linear-gradient(135deg, #1e1b4b, #312e81)",
        boxShadow: "0 4px 20px rgba(99,102,241,0.2)",
        transition: "transform 0.3s, box-shadow 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-6px)";
        e.currentTarget.style.boxShadow = "0 12px 30px rgba(99,102,241,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.2)";
      }}
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-48 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Category badge */}
        <span className="absolute top-2 left-2 bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          {course.category}
        </span>
        {/* Level badge */}
        <span className="absolute top-2 right-2 bg-indigo-800 text-indigo-200 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
          {course.level}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">

        {/* Title */}
        <h2 className="font-bold text-white text-base leading-tight mb-2 line-clamp-2">
          {course.title}
        </h2>

        {/* Instructor */}
        <p className="text-xs text-indigo-300 font-medium mb-1">
          👤 {course.instructor}
        </p>

        {/* Description */}
        <p className="text-xs text-indigo-200 opacity-70 line-clamp-2 mb-3">
          {course.description}
        </p>

        {/* Rating & Duration */}
        <div className="flex items-center justify-between mb-4 mt-auto">
          <span className="text-yellow-400 text-xs font-bold">
            ⭐ {course.rating} / 5
          </span>
          <span className="text-indigo-300 text-xs">
            🕐 {course.duration}
          </span>
        </div>

        {/* Button */}
        <Link
          href={`/courses/${course.id}`}
          className="block text-center text-sm font-bold text-white py-2 rounded-xl no-underline transition-all duration-200"
          style={{
            background: "linear-gradient(135deg, #6366f1, #a855f7)",
            boxShadow: "0 4px 12px rgba(99,102,241,0.3)",
          }}
        >
          View Details →
        </Link>

      </div>
    </div>
  );
}