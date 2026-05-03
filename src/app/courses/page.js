"use client";

import { useState } from "react";
import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  const [search, setSearch] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">

      <h1 className="text-3xl font-bold text-purple-600 mb-8 text-center">
        Active Courses
      </h1>

      {/* Search bar */}
      <div className="flex justify-center mb-6">
        <div className="relative w-full max-w-lg">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search courses..."
            className="input w-full pl-9 border border-gray-300 focus:outline-none focus:border-indigo-400"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      {/* Results count */}
      <p className="text-center text-sm text-gray-400 mb-6">
        Showing {filteredCourses.length} course{filteredCourses.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {filteredCourses.length > 0 ? (
          filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))
        ) : (
          <div className="col-span-3 text-center py-16 text-gray-400">
            <div className="text-5xl mb-3">🔍</div>
            <p className="text-lg font-medium">No courses found</p>
            <p className="text-sm">Try a different search term</p>
          </div>
        )}
      </div>

    </div>
  );
}