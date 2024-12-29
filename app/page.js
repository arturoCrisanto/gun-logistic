export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Gun Logistics System
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Manage your inventory and assignments efficiently.
      </p>
      <a
        href="/dashboard"
        className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
      >
        Go to Dashboard
      </a>
    </div>
  );
}
