"use client";

const trendingAI = [
  {
    id: 1,
    title: "Generative AI with ChatGPT",
    instructor: "OpenAI Lab",
    type: "from",
    badge: "Coming Soon",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&fit=crop",
  },
  {
    id: 2,
    title: "Neural Networks from Scratch",
    instructor: "Andrew Ng",
    type: "by",
    badge: "Coming Soon",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&fit=crop",
  },
  {
    id: 3,
    title: "AI for Everyone",
    instructor: "DeepLearning.ai",
    type: "from",
    badge: "Upcoming",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&fit=crop",
  },
  {
    id: 4,
    title: "Prompt Engineering Mastery",
    instructor: "AI Experts",
    type: "from",
    badge: "Coming Soon",
    image: "https://images.unsplash.com/photo-1669023414162-5bb06bbff0ec?w=400&fit=crop",
  },
  {
    id: 5,
    title: "Reinforcement Learning Pro",
    instructor: "IBM Research",
    type: "from",
    badge: "Upcoming",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&fit=crop",
  },
  {
    id: 6,
    title: "AI-Powered Web Apps",
    instructor: "Meta Engineers",
    type: "from",
    badge: "Coming Soon",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&fit=crop",
  },
  {
    id: 7,
    title: "Large Language Models",
    instructor: "Google DeepMind",
    type: "from",
    badge: "Upcoming",
    image: "https://images.unsplash.com/photo-1642427749670-f20e2e76ed8c?w=400&fit=crop",
  },
  {
    id: 8,
    title: "Computer Vision Bootcamp",
    instructor: "NVIDIA Academy",
    type: "from",
    badge: "Coming Soon",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&fit=crop",
  },
];

export default function TrendingCourses() {
  return (
    <section className="mt-16 pb-8 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-10">
        <span className="inline-block bg-gradient-to-r from-indigo-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3 uppercase tracking-wider">
          Future Learning
        </span>
        <h2 className="text-3xl font-bold">
          🚀{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
            Upcoming AI Top Class Courses
          </span>
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          Be the first to enroll when these courses launch
        </p>
      </div>

      {/* Scrolling track */}
      <div className="relative w-full overflow-hidden">

        {/* Fade left */}
        <div className="absolute left-0 top-0 h-full w-20 z-10 bg-gradient-to-r from-white to-transparent" />

        {/* Fade right */}
        <div className="absolute right-0 top-0 h-full w-20 z-10 bg-gradient-to-l from-white to-transparent" />

        {/* Cards row */}
        <div
          className="flex gap-5 px-4"
          style={{
            width: "max-content",
            animation: "scroll 30s linear infinite",
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = "paused"}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = "running"}
        >
          {trendingAI.concat(trendingAI).map((course, index) => (
            <div
              key={index}
              className="min-w-[220px] flex-shrink-0 rounded-2xl overflow-hidden cursor-pointer"
              style={{
                background: "linear-gradient(135deg, #1e1b4b, #312e81)",
                boxShadow: "0 4px 20px rgba(99,102,241,0.2)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow = "0 12px 30px rgba(99,102,241,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(99,102,241,0.2)";
              }}
            >
              {/* Image with overlay */}
              <div className="relative">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-36 w-full object-cover opacity-60"
                />
                {/* Badge */}
                <span className="absolute top-2 left-2 bg-pink-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                  {course.badge}
                </span>
                {/* Lock icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-3xl">🔒</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-3">
                <h3 className="font-bold text-sm text-white leading-tight mb-1">
                  {course.title}
                </h3>
                <p className="text-xs text-indigo-300 font-medium">
                  {course.type} {course.instructor}
                </p>
                <div className="mt-2 inline-block text-[10px] font-bold text-indigo-300 border border-indigo-500 px-2 py-0.5 rounded-full">
                  Notify Me
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}