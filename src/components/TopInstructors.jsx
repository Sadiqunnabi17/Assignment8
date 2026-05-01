export default function TopInstructors() {
  return (
    <div className="py-10 px-6">
      <h2 className="text-2xl font-bold text-center mb-6">
        🏆 Top Instructors
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-2 font-semibold">John Doe</h3>
          <p className="text-sm">Web Development</p>
        </div>

        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-2 font-semibold">Jane Smith</h3>
          <p className="text-sm">UI/UX Design</p>
        </div>

        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/men/75.jpg"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-2 font-semibold">David Lee</h3>
          <p className="text-sm">Marketing</p>
        </div>

        <div className="text-center">
          <img
            src="https://randomuser.me/api/portraits/women/68.jpg"
            className="w-24 h-24 mx-auto rounded-full object-cover"
          />
          <h3 className="mt-2 font-semibold">Sarah Khan</h3>
          <p className="text-sm">Data Science</p>
        </div>

      </div>
    </div>
  );
}