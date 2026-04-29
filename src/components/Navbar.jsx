import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Left */}
      <div className="flex-1">
        <Link href="/" className="text-xl font-bold text-blue-700">
          SkillSphere
        </Link>
      </div>

      {/* Center */}
      <div className="hidden md:flex gap-6">
        <Link href="/">Home</Link>
        <Link href="/courses">Courses</Link>
        <Link href="/profile">My Profile</Link>
      </div>

      {/* Right */}
      <div className="flex gap-2">
        <Link href="/login" className="btn btn-outline btn-sm">
          Login
        </Link>
        <Link href="/register" className="btn btn-primary btn-sm">
          Register
        </Link>
      </div>
    </div>
  );
}