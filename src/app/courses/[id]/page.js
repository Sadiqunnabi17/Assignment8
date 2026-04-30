import courses from "@/data/courses.json";

export default async function CourseDetails({ params }) {
  const resolvedParams = await params; // safe handling
  const id = resolvedParams.id;

  const course = courses.find((c) => c.id === Number(id));

  if (!course) {
    return <div className="p-6 text-center">Course not found.</div>;
  }

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />

      <h1 className="text-3xl font-bold mb-2">{course.title}</h1>

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

      <p className="text-lg">{course.description}</p>

      <div className="mt-6">
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