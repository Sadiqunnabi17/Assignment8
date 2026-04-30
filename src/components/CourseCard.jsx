import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="card bg-base-100 shadow-md">
      <figure>
        <img src={course.image} alt={course.title} />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{course.title}</h2>

        <p>Instructor: {course.instructor}</p>
        <p>⭐ {course.rating}</p>

        <div className="card-actions justify-end">
          <Link href={`/courses/${course.id}`}>
            <button className="btn btn-primary btn-sm">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}