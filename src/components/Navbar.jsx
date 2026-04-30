"use client";

import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useState } from "react";

export default function Navbar() {
  const { user, logout } = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const initials = user?.name
    ? user.name.charAt(0).toUpperCase()
    : user?.email?.charAt(0).toUpperCase();

  return (
    <>
      <style>{`
        .navbar-root {
          position: sticky;
          top: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          border-bottom: 1px solid rgba(0,0,0,0.07);
          font-family: 'Segoe UI', sans-serif;
        }

        .navbar-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
        }

        .navbar-logo {
          font-size: 1.35rem;
          font-weight: 800;
          letter-spacing: -0.5px;
          text-decoration: none;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          white-space: nowrap;
        }

        .navbar-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .navbar-links a {
          text-decoration: none;
          color: #4b5563;
          font-size: 0.9rem;
          font-weight: 500;
          padding: 0.4rem 0.85rem;
          border-radius: 8px;
          transition: background 0.18s, color 0.18s;
        }

        .navbar-links a:hover {
          background: #f3f4f6;
          color: #1f2937;
        }

        .navbar-actions {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          flex-shrink: 0;
        }

        .btn-login {
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          color: #6366f1;
          padding: 0.45rem 1rem;
          border-radius: 8px;
          border: 1.5px solid #6366f1;
          transition: background 0.18s, color 0.18s;
        }

        .btn-login:hover {
          background: #6366f1;
          color: white;
        }

        .btn-register {
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 600;
          color: white;
          padding: 0.45rem 1rem;
          border-radius: 8px;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          border: none;
          transition: opacity 0.18s, transform 0.18s;
          box-shadow: 0 2px 8px rgba(99,102,241,0.25);
        }

        .btn-register:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }

        /* Avatar dropdown */
        .avatar-wrapper {
          position: relative;
        }

        .avatar-btn {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          font-size: 1rem;
          font-weight: 700;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(99,102,241,0.35);
          transition: transform 0.18s, box-shadow 0.18s;
        }

        .avatar-btn:hover {
          transform: scale(1.07);
          box-shadow: 0 4px 14px rgba(99,102,241,0.4);
        }

        .avatar-dropdown {
          position: absolute;
          right: 0;
          top: calc(100% + 10px);
          background: white;
          border-radius: 12px;
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
          min-width: 200px;
          padding: 0.5rem;
          border: 1px solid rgba(0,0,0,0.07);
          animation: dropIn 0.18s ease;
        }

        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .avatar-dropdown-header {
          padding: 0.6rem 0.75rem 0.5rem;
          font-size: 0.78rem;
          color: #9ca3af;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          border-bottom: 1px solid #f3f4f6;
          margin-bottom: 0.35rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .avatar-dropdown a,
        .avatar-dropdown button {
          display: block;
          width: 100%;
          text-align: left;
          text-decoration: none;
          padding: 0.5rem 0.75rem;
          font-size: 0.875rem;
          font-weight: 500;
          color: #374151;
          border-radius: 8px;
          border: none;
          background: none;
          cursor: pointer;
          transition: background 0.15s;
        }

        .avatar-dropdown a:hover,
        .avatar-dropdown button:hover {
          background: #f3f4f6;
        }

        .avatar-dropdown button {
          color: #ef4444;
        }

        .avatar-dropdown button:hover {
          background: #fef2f2;
        }

        /* Mobile hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }

        .hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: #4b5563;
          border-radius: 2px;
          transition: all 0.2s;
        }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 0.75rem 1.5rem 1rem;
          border-top: 1px solid #f3f4f6;
          gap: 0.25rem;
        }

        .mobile-menu a {
          text-decoration: none;
          color: #374151;
          font-size: 0.95rem;
          font-weight: 500;
          padding: 0.5rem 0;
          border-bottom: 1px solid #f9fafb;
        }

        @media (max-width: 768px) {
          .navbar-links { display: none; }
          .hamburger { display: flex; }
          .mobile-menu { display: flex; }
        }
      `}</style>

      <nav className="navbar-root">
        <div className="navbar-inner">
          {/* Logo */}
          <Link href="/" className="navbar-logo">SkillSphere</Link>

          {/* Desktop Links */}
          <ul className="navbar-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/courses">Courses</Link></li>
            <li><Link href="/profile">My Profile</Link></li>
          </ul>

          {/* Right Actions */}
          <div className="navbar-actions">
            {user ? (
              <div className="avatar-wrapper">
                <button
                  className="avatar-btn"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  {initials}
                </button>

                {dropdownOpen && (
                  <div className="avatar-dropdown">
                    <div className="avatar-dropdown-header">
                      {user.name || user.email}
                    </div>
                    <Link href="/profile" onClick={() => setDropdownOpen(false)}>
                      👤 My Profile
                    </Link>
                    <button onClick={() => { logout(); setDropdownOpen(false); }}>
                      🚪 Logout
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <>
                <Link href="/login" className="btn-login">Login</Link>
                <Link href="/register" className="btn-register">Register</Link>
              </>
            )}

            {/* Mobile hamburger */}
            <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link href="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link>
            <Link href="/profile" onClick={() => setMenuOpen(false)}>My Profile</Link>
            {!user && (
              <>
                <Link href="/login" onClick={() => setMenuOpen(false)}>Login</Link>
                <Link href="/register" onClick={() => setMenuOpen(false)}>Register</Link>
              </>
            )}
          </div>
        )}
      </nav>
    </>
  );
}