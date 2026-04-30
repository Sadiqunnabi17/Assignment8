import courses from "@/data/courses.json";
import CourseCard from "@/components/CourseCard";

export default function CoursesPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        All Courses
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}