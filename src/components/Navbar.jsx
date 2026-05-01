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
  );
}