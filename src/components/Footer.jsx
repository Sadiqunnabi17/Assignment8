import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-indigo-300 mt-16 px-6 py-12">

      <div className="max-w-6xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-10">

          {/* Column 1 */}
          <div className="text-center md:text-left">
            <p className="text-xl font-extrabold bg-gradient-to-r from-indigo-400 to-pink-600 bg-clip-text text-transparent mb-3">
              🎓 SkillSphere
            </p>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              Empowering learners worldwide with expert-led courses in development, design, marketing, and more.
            </p>
          </div>

          {/* Column 2 */}
          <div className="grid grid-cols-2 gap-8 text-center md:text-left">

            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Quick Links
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><Link href="/" className="hover:text-indigo-300 transition">Home</Link></li>
                <li><Link href="/courses" className="hover:text-indigo-300 transition">Courses</Link></li>
                <li><Link href="/profile" className="hover:text-indigo-300 transition">My Profile</Link></li>
                <li><Link href="/register" className="hover:text-indigo-300 transition">Get Started</Link></li>
              </ul>
            </div>

            <div>
              <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
                Company
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-indigo-300 transition">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Terms</a></li>
                <li><a href="#" className="hover:text-indigo-300 transition">Contact</a></li>
              </ul>
            </div>

          </div>

          {/* Column 3 */}
          <div className="text-center md:text-left">

            <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Our Impact
            </p>

            <div className="flex justify-center md:justify-start gap-8 mb-6">
              <div>
                <span className="block text-white text-lg font-bold">12k+</span>
                <span className="text-xs text-gray-400">Students</span>
              </div>
              <div>
                <span className="block text-white text-lg font-bold">200+</span>
                <span className="text-xs text-gray-400">Courses</span>
              </div>
              <div>
                <span className="block text-white text-lg font-bold">4.9★</span>
                <span className="text-xs text-gray-400">Rating</span>
              </div>
            </div>

            <p className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Follow Us
            </p>

            <div className="flex justify-center md:justify-start gap-3">
              <a className="w-9 h-9 flex items-center justify-center rounded-md border border-white/10 bg-white/5 text-gray-400 hover:bg-indigo-400/20 hover:text-indigo-300 transition">
                <FaXTwitter size={16} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-md border border-white/10 bg-white/5 text-gray-400 hover:bg-indigo-400/20 hover:text-indigo-300 transition">
                <FaLinkedinIn size={16} />
              </a>
              <a className="w-9 h-9 flex items-center justify-center rounded-md border border-white/10 bg-white/5 text-gray-400 hover:bg-indigo-400/20 hover:text-indigo-300 transition">
                <FaInstagram size={16} />
              </a>
            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="text-center mt-6 text-xs text-gray-400">
          © 2026 SkillSphere. All rights reserved.
        </div>

      </div>
    </footer>
  );
}