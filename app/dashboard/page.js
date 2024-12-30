"use client"; // Ensure this is treated as a Client Component
import { useRouter } from "next/navigation"; // Correct import for the app directory
import GunList from "/components/GunList"; // Import GunList component

export default function Dashboard() {
  const router = useRouter(); // Initialize useRouter from next/navigation

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-200 text-white py-4">
        <h1 className="text-center text-2xl font-bold">Dashboard</h1>
      </header>
      <main className="p-6">
        <GunList />
      </main>
    </div>
  );
}
