import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="card bg-base-100 shadow-md w-full h-full overflow-hidden">

      {/* Image on TOP */}
      <figure className="w-full aspect-video overflow-hidden">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body p-4">

        <h2 className="card-title text-base line-clamp-2">
          {course.title}
        </h2>

        <p className="text-sm text-gray-500">
          Instructor: {course.instructor}
        </p>

        <p className="text-sm">⭐ {course.rating}</p>

        <p className="text-xs text-gray-600 line-clamp-2 mt-1">
          {course.description}
        </p>

        {/* Button */}
        <div className="card-actions justify-end mt-3">
          <Link
            href={`/courses/${course.id}`}
            className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-md text-sm"
          >
            View Details
          </Link>
        </div>

      </div>
    </div>
  );
}