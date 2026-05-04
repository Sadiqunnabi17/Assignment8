export default function Spinner() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white/60 backdrop-blur-sm">
      <div
        className="w-14 h-14 rounded-full border-4 border-indigo-100 border-t-indigo-500 animate-spin"
      />
    </div>
  );
}