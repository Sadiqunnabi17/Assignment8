import { Fragment } from "react";

export default function StatsSection() {
  const stats = [
    { icon: "🎓", number: "12,000+", label: "Students Enrolled" },
    { icon: "📚", number: "200+",    label: "Courses Available" },
    { icon: "👨‍🏫", number: "50+",     label: "Expert Instructors" },
    { icon: "⭐", number: "4.9/5",   label: "Average Rating" },
  ];

  return (
    <section className="py-12 px-6 border-t border-b border-indigo-100"
      style={{ background: "linear-gradient(135deg, #eef2ff, #f5f3ff)" }}
    >
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center items-center gap-6">
        {stats.map((stat, index) => (
          <Fragment key={stat.label}>

            {/* Stat item */}
            <div className="flex flex-col items-center text-center flex-1 min-w-[130px]">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div
                className="text-2xl font-extrabold mb-1"
                style={{
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.number}
              </div>
              <div className="text-sm text-gray-500 font-medium">
                {stat.label}
              </div>
            </div>

            {/* Divider — hidden on mobile */}
            {index < stats.length - 1 && (
              <div className="hidden md:block w-px h-12 bg-indigo-100" />
            )}

          </Fragment>
        ))}
      </div>
    </section>
  );
}