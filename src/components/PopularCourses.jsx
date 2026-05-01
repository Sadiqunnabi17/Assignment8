import Link from "next/link";
import courses from "@/data/courses.json";
import CourseCard from "./CourseCard";

export default function PopularCourses() {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="py-10 px-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-blue-700">
          🔥 Popular Courses
        </h2>

        <Link
          href="/courses"
          className="text-blue-700 font-semibold px-3 py-1 rounded-md text-sm font-medium hover:bg-blue-700 hover:text-white "
        >
          View More Courses
        </Link>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

    </div>
  );
}