export default function LearningTips() {
  return (
    <div className="py-10 px-6 bg-base-200">
      <h2 className="text-2xl font-bold text-center mb-6">
        📌 Learning Tips
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Time Management</h3>
          <p>Plan your study schedule effectively.</p>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Active Practice</h3>
          <p>Apply what you learn through projects.</p>
        </div>

        <div className="p-4 bg-white shadow rounded">
          <h3 className="font-semibold">Consistency</h3>
          <p>Study daily for better retention.</p>
        </div>

      </div>
    </div>
  );
}