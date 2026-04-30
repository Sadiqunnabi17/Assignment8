import courses from "@/data/courses.json";
import CourseCard from "./CourseCard";

export default function PopularCourses() {
  const topCourses = [...courses]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3);

  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        🔥 Popular Courses
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {topCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}