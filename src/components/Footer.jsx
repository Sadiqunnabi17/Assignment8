import Link from "next/link";
import { FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const socialStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "36px",
    height: "36px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.06)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#6b7280",
    textDecoration: "none",
    transition: "background 0.2s, color 0.2s",
  };

  return (
    <>
      <style>{`
        .footer {
          background: #1e1b4b;
          color: #a5b4fc;
          font-family: 'Segoe UI', sans-serif;
          padding: 3.5rem 1.5rem 1.5rem;
          margin-top: 4rem;
        }

        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-top {
          display: grid;
          grid-template-columns: 1fr 2fr 1fr;
          gap: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .footer-brand-name {
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #a5b4fc, #e879f9);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0 0 0.75rem;
        }

        .footer-brand-desc {
          font-size: 0.875rem;
          color: #6b7280;
          line-height: 1.7;
          margin: 0;
        }

        .footer-col-title {
          font-size: 0.8rem;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin: 0 0 1rem;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .footer-links a {
          text-decoration: none;
          font-size: 0.875rem;
          color: #6b7280;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #a5b4fc;
        }

        .footer-stats {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.75rem;
        }

        .footer-stat-number {
          font-size: 1.1rem;
          font-weight: 800;
          color: white;
          display: block;
        }

        .footer-stat-label {
          font-size: 0.75rem;
          color: #6b7280;
        }

        .footer-social a:hover {
          background: rgba(165,180,252,0.15) !important;
          color: #a5b4fc !important;
        }

        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 1.5rem;
        }

        .footer-copy {
          font-size: 0.8rem;
          color: #6b7280;
          margin: 0;
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
          }
          .footer-bottom {
            text-align: center;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-top">

            {/* Column 1 — Logo + Description */}
            <div>
              <p className="footer-brand-name">🎓 SkillSphere</p>
              <p className="footer-brand-desc">
                Empowering learners worldwide with expert-led courses
                in development, design, marketing, and more.
              </p>
            </div>

            {/* Column 2 — Quick Links + Company side by side */}
            <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
              <div>
                <p className="footer-col-title">Quick Links</p>
                <ul className="footer-links">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/courses">Courses</Link></li>
                  <li><Link href="/profile">My Profile</Link></li>
                  <li><Link href="/register">Get Started</Link></li>
                </ul>
              </div>

              <div>
                <p className="footer-col-title">Company</p>
                <ul className="footer-links">
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">Terms of Service</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>

            {/* Column 3 — Stats + Social */}
            <div>
              <p className="footer-col-title">Our Impact</p>
              <div className="footer-stats">
                <div>
                  <span className="footer-stat-number">12k+</span>
                  <span className="footer-stat-label">Students</span>
                </div>
                <div>
                  <span className="footer-stat-number">200+</span>
                  <span className="footer-stat-label">Courses</span>
                </div>
                <div>
                  <span className="footer-stat-number">4.9★</span>
                  <span className="footer-stat-label">Rating</span>
                </div>
              </div>

              <p className="footer-col-title">Follow Us</p>
              <div
                className="footer-social"
                style={{ display: "flex", gap: "0.75rem" }}
              >
                <a href="#" style={socialStyle} aria-label="X (Twitter)">
                  <FaXTwitter size={16} />
                </a>
                <a href="#" style={socialStyle} aria-label="LinkedIn">
                  <FaLinkedinIn size={16} />
                </a>
                <a href="#" style={socialStyle} aria-label="Instagram">
                  <FaInstagram size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* Bottom bar — copyright only */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © 2026 SkillSphere. All rights reserved.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}