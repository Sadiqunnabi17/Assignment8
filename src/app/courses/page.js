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
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        All Courses
      </h1>

      <input
        type="text"
        placeholder="Search courses..."
        className="input input-bordered w-full mb-6"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}