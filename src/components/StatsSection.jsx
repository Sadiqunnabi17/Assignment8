export default function StatsSection() {
  const stats = [
    { icon: "🎓", number: "12,000+", label: "Students Enrolled" },
    { icon: "📚", number: "200+",    label: "Courses Available" },
    { icon: "👨‍🏫", number: "50+",     label: "Expert Instructors" },
    { icon: "⭐", number: "4.9/5",   label: "Average Rating" },
    { icon: "🌍", number: "30+",     label: "Countries Reached" },
  ];

  return (
    <>
      <style>{`
        .stats-section {
          background: white;
          border-top: 1px solid #f3f4f6;
          border-bottom: 1px solid #f3f4f6;
          padding: 3rem 1.5rem;
          font-family: 'Segoe UI', sans-serif;
        }

        .stats-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
          min-width: 140px;
        }

        .stat-icon {
          font-size: 1.75rem;
          margin-bottom: 0.5rem;
        }

        .stat-number {
          font-size: 1.75rem;
          font-weight: 800;
          color: #1e1b4b;
          line-height: 1;
          margin-bottom: 0.35rem;
        }

        .stat-label {
          font-size: 0.875rem;
          color: #9ca3af;
          font-weight: 500;
        }

        /* Divider between items */
        .stat-divider {
          width: 1px;
          height: 48px;
          background: #f3f4f6;
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .stat-divider { display: none; }
          .stats-inner { justify-content: center; }
          .stat-item { min-width: 120px; }
        }
      `}</style>

      <section className="stats-section">
        <div className="stats-inner">
          {stats.map((stat, index) => (
            <>
              <div className="stat-item" key={stat.label}>
                <div className="stat-icon">{stat.icon}</div>
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>

              {/* Divider between items, not after last */}
              {index < stats.length - 1 && (
                <div className="stat-divider" key={`divider-${index}`} />
              )}
            </>
          ))}
        </div>
      </section>
    </>
  );
}