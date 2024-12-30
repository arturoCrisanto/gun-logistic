import Login from "./login/page";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <main className="p-6">
        <Login />
      </main>
    </div>
  );
}
