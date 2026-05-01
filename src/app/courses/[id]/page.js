"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import courses from "@/data/courses.json";

export default function CourseDetails({ params }) {
  const router = useRouter();
  const { user, loading } = useAuth(); // 👈 include loading

  // Handle params safely
  const id = Number(params?.id);

  // Find course
  const course = courses.find((c) => c.id === id);

  // 🔐 Redirect only AFTER loading finishes
  useEffect(() => {
    if (!loading && !user) {
      router.push(`/login?redirect=/courses/${id}`);
    }
  }, [user, loading, router, id]);

  // ⏳ Wait for auth check (prevents hydration error)
  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  // ⛔ Not logged in (temporary state before redirect)
  if (!user) {
    return <div className="p-6 text-center">Redirecting...</div>;
  }

  // ❌ Course not found
  if (!course) {
    return <div className="p-6 text-center">Course not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      {/* Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">
        {course.title}
      </h1>

      {/* Meta */}
      <p className="text-gray-500 mb-1">
        Instructor: {course.instructor}
      </p>
      <p className="text-gray-500 mb-1">
        Duration: {course.duration}
      </p>
      <p className="text-gray-500 mb-1">
        Level: {course.level}
      </p>
      <p className="text-gray-500 mb-4">
        Rating: ⭐ {course.rating}
      </p>

      {/* Description */}
      <p className="text-lg mb-6">
        {course.description}
      </p>

      {/* Curriculum */}
      <div>
        <h2 className="text-xl font-semibold mb-2">
          Course Curriculum
        </h2>

        <ul className="list-disc pl-6">
          <li>Introduction</li>
          <li>Core Concepts</li>
          <li>Hands-on Project</li>
          <li>Final Assessment</li>
        </ul>
      </div>
    </div>
  );
}