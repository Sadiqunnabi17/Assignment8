import Link from "next/link";

export default function HeroSection() {
  return (
    <>
      <style>{`
        .hero-section {
          min-height: 80vh;
          display: flex;
          align-items: center;
          background: linear-gradient(135deg, #f5f3ff 0%, #ede9fe 50%, #e0e7ff 100%);
          padding: 4rem 1.5rem;
          font-family: 'Segoe UI', sans-serif;
          overflow: hidden;
          position: relative;
        }

        .hero-blob-1 {
          position: absolute;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%);
          top: -100px;
          right: -100px;
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-blob-2 {
          position: absolute;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%);
          bottom: -80px;
          left: -80px;
          border-radius: 50%;
          pointer-events: none;
        }

        .hero-inner {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 3rem;
          position: relative;
          z-index: 1;
        }

        .hero-text {
          flex: 1;
          max-width: 560px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: white;
          color: #6366f1;
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: 999px;
          border: 1.5px solid #c7d2fe;
          margin-bottom: 1.25rem;
          letter-spacing: 0.03em;
          box-shadow: 0 2px 8px rgba(99,102,241,0.1);
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.25rem);
          font-weight: 800;
          line-height: 1.15;
          color: #1e1b4b;
          margin: 0 0 1.25rem;
          letter-spacing: -0.5px;
        }

        .hero-title .highlight {
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-desc {
          font-size: 1.1rem;
          color: #4b5563;
          line-height: 1.7;
          margin: 0 0 1rem;
          max-width: 480px;
        }

        .hero-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 2rem;
        }

        .hero-tag {
          background: white;
          color: #6366f1;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.3rem 0.75rem;
          border-radius: 999px;
          border: 1px solid #e0e7ff;
        }

        .hero-btns {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-primary-hero {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.85rem 1.75rem;
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          font-weight: 700;
          font-size: 1rem;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(99,102,241,0.35);
          transition: transform 0.2s, box-shadow 0.2s;
        }

        .btn-primary-hero:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(99,102,241,0.4);
        }

        .btn-secondary-hero {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 0.85rem 1.5rem;
          background: white;
          color: #374151;
          font-weight: 600;
          font-size: 1rem;
          border-radius: 12px;
          text-decoration: none;
          border: 1.5px solid #e5e7eb;
          transition: border-color 0.2s, transform 0.2s;
        }

        .btn-secondary-hero:hover {
          border-color: #6366f1;
          color: #6366f1;
          transform: translateY(-2px);
        }

        .hero-image-wrapper {
          flex: 1;
          max-width: 480px;
          position: relative;
        }

        .hero-image-card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 25px 60px rgba(99,102,241,0.2);
        }

        .hero-image-card img {
          width: 100%;
          height: 380px;
          object-fit: cover;
          display: block;
        }

        @media (max-width: 900px) {
          .hero-inner { flex-direction: column; text-align: center; }
          .hero-tags { justify-content: center; }
          .hero-btns { justify-content: center; }
          .hero-image-wrapper { max-width: 100%; width: 100%; }
        }
      `}</style>

      <section className="hero-section">
        <div className="hero-blob-1" />
        <div className="hero-blob-2" />

        <div className="hero-inner">

          {/* Left: Text */}
          <div className="hero-text">
            <div className="hero-badge">
              🚀 #1 Platform for Skill Growth
            </div>

            <h1 className="hero-title">
              Upgrade Your Skills <br />
              <span className="highlight">Today & Tomorrow</span>
            </h1>

            <p className="hero-desc">
              Learn from industry experts and master real-world skills
              at your own pace — from beginner to professional.
            </p>

            <div className="hero-tags">
              <span className="hero-tag">💻 Web Development</span>
              <span className="hero-tag">🎨 UI/UX Design</span>
              <span className="hero-tag">📈 Marketing</span>
              <span className="hero-tag">+ More</span>
            </div>

            <div className="hero-btns">
              <Link href="/courses" className="btn-primary-hero">
                Explore Courses →
              </Link>
              <Link href="/register" className="btn-secondary-hero">
                ▶ Get Started Free
              </Link>
            </div>
          </div>

          {/* Right: Image */}
          <div className="hero-image-wrapper">
            <div className="hero-image-card">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
                alt="Students learning online"
              />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}