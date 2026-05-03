import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-100 px-6 py-16 overflow-hidden relative">

      {/* Blobs */}
      <div className="absolute w-96 h-96 rounded-full pointer-events-none top-[-100px] right-[-100px] bg-[radial-gradient(circle,rgba(167,139,250,0.25),transparent_70%)]" />
      <div className="absolute w-72 h-72 rounded-full pointer-events-none bottom-[-80px] left-[-80px] bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_70%)]" />

      <div className="max-w-6xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">

        {/* Left: Text */}
        <div className="flex-1 max-w-xl text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-1 bg-yellow-100 text-indigo-500 text-xs font-bold px-4 py-1.5 rounded-full border border-indigo-200 shadow-sm mb-5 tracking-wide">
            #1 Platform for Skill Growth
          </div>

          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold text-indigo-800 leading-tight mb-5 tracking-tight">
            Upgrade Your Skills <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Today & Tomorrow
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-lg mx-auto lg:mx-0">
            Learn from industry experts and master real-world skills
            at your own pace — from beginner to professional.
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-8 justify-center lg:justify-start">
            <span className="bg-purple-200 text-indigo-500 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100">
              💻 Web Development
            </span>
            <span className="bg-green-200 text-indigo-500 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100">
              🎨 UI/UX Design
            </span>
            <span className="bg-blue-200 text-indigo-500 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100">
              📈 Marketing
            </span>
            <span className="bg-green-200 text-indigo-500 text-xs font-semibold px-3 py-1.5 rounded-full border border-indigo-100">
              + More
            </span>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              Explore Courses →
            </Link>
            <Link
              href="/register"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl border border-gray-200 hover:border-indigo-400 hover:text-indigo-500 hover:-translate-y-0.5 transition-all duration-200 no-underline"
            >
              ▶ Get Started Free
            </Link>
          </div>

        </div>

        {/* Right: Image */}
        <div className="flex-1 max-w-lg w-full">
          <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-200">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
              alt="Students learning online"
              className="w-full h-[380px] object-cover block"
            />
          </div>
        </div>

      </div>
    </section>
  );
}