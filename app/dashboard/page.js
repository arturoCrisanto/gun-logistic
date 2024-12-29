import GunList from "../../components/Gunlist"; // fixed import path to dashboard

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="p-6">
        <GunList />
      </main>
    </div>
  );
}
