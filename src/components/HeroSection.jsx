export default function HeroSection() {
  return (
    <div className="hero min-h-[70vh] bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">

        {/* Image / Banner */}
        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
          alt="learning"
          className="max-w-sm rounded-lg shadow-2xl"
        />

        {/* Text */}
        <div>
          <h1 className="text-4xl font-bold">
            Upgrade Your Skills Today 🚀
          </h1>

          <p className="py-4 text-lg">
            Learn from industry experts and master real-world skills.
          </p>

          <p className="pb-4 text-gray-500">
            Web Development • Design • Marketing • More
          </p>

          <button className="btn btn-primary">
            Explore Courses
          </button>
        </div>

      </div>
    </div>
  );
}