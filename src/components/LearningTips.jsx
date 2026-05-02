export default function LearningTips() {
  return (
    <div className="py-10 px-6 bg-base-200">
      <h2 className="text-2xl font-bold text-blue-700 text-center mb-6">
        💡 Learning Tips
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Tip 1 */}
        <div className="p-5 bg-red-50 shadow rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold mb-2 text-purple-500">
            🧠 Learn by Building Projects
          </h3>
          <p className="text-sm text-gray-600">
            Build real apps, dashboards, or websites instead of only watching tutorials.
          </p>
        </div>

        {/* Tip 2 */}
        <div className="p-5 bg-indigo-50 shadow rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold mb-2 text-indigo-600">
            🛠 Use Modern Digital Tools
          </h3>
          <p className="text-sm text-gray-600">
            Practice with GitHub, VS Code, Figma, and Google Colab.
          </p>
        </div>

        {/* Tip 3 */}
        <div className="p-5 bg-emerald-50 shadow rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold mb-2 text-emerald-600">
            🔁 Practice with Real Data
          </h3>
          <p className="text-sm text-gray-600">
            Work with datasets using Excel, Python, or Power BI.
          </p>
        </div>

        {/* Tip 4 */}
        <div className="p-5 bg-purple-50 shadow rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold mb-2 text-purple-600">
            🌐 Learn from Online Platforms
          </h3>
          <p className="text-sm text-gray-600">
            Follow structured learning paths from online platforms.
          </p>
        </div>

        {/* Tip 5 */}
        <div className="p-5 bg-pink-50 shadow rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold mb-2 text-pink-600">
            👨‍💻 Code Regularly
          </h3>
          <p className="text-sm text-gray-600">
            Practice coding daily to build strong problem-solving skills.
          </p>
        </div>

        {/* Tip 6 */}
        <div className="p-5 bg-yellow-50 shadow rounded-lg hover:shadow-lg transition">
          <h3 className="font-semibold mb-2 text-yellow-600">
            🤝 Collaborate & Share
          </h3>
          <p className="text-sm text-gray-600">
            Work with peers and share projects on GitHub.
          </p>
        </div>

      </div>
    </div>
  );
}