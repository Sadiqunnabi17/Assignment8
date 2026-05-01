export default function LearningTips() {
  return (
    <div className="py-10 px-6 bg-base-200">
      <h2 className="text-2xl font-bold text-center mb-6">
        💡 Learning Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Tip 1 */}
        <div className="p-5 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold mb-2">
            🧠 Learn by Building Projects
          </h3>
          <p className="text-sm text-gray-600">
            Don’t just watch tutorials. Build real projects like websites, apps,
            or dashboards using tools like React, Next.js, or Excel.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="p-5 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold mb-2">
            🛠 Use Modern Digital Tools
          </h3>
          <p className="text-sm text-gray-600">
            Practice with GitHub, VS Code, Google Colab, and Figma. These tools
            are essential for real-world ICT skills.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="p-5 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold mb-2">
            🔁 Practice with Real Data
          </h3>
          <p className="text-sm text-gray-600">
            Work on datasets using Excel, Python, or Power BI. Real data improves
            your analytical and problem-solving skills.
          </p>
        </div>

        {/* Tip 4 */}
        <div className="p-5 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold mb-2">
            🌐 Learn from Online Platforms
          </h3>
          <p className="text-sm text-gray-600">
            Use platforms like Coursera, freeCodeCamp, and YouTube to explore
            structured ICT learning paths and tutorials.
          </p>
        </div>

        {/* Tip 5 */}
        <div className="p-5 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold mb-2">
            👨‍💻 Code Regularly
          </h3>
          <p className="text-sm text-gray-600">
            Practice coding daily. Even 30 minutes a day in JavaScript, Python,
            or SQL builds strong problem-solving ability.
          </p>
        </div>

        {/* Tip 6 */}
        <div className="p-5 bg-white shadow rounded-lg hover:shadow-md transition">
          <h3 className="font-semibold mb-2">
            🤝 Collaborate & Share
          </h3>
          <p className="text-sm text-gray-600">
            Work with peers, contribute to GitHub projects, and share your work.
            Collaboration improves both skills and confidence.
          </p>
        </div>

      </div>
    </div>
  );
}