"use client";
import { useEffect, useState } from "react";

export default function GunList() {
  const [guns, setGuns] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGuns = async () => {
      try {
        const res = await fetch("/api/inventory");

        // Handle non-200 responses
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await res.json();

        // Check if data is an array
        if (Array.isArray(data)) {
          setGuns(data); // Set the guns data from the API
        } else {
          throw new Error("Data is not an array");
        }

        setLoading(false); // Turn off loading state
      } catch (err) {
        setError("Error fetching data: " + err.message); // Capture error message
        setLoading(false); // Turn off loading state
        console.error("Error fetching data", err);
      }
    };

    fetchGuns();
  }, []);

  // Handle loading state
  if (loading) {
    return (
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Loading...</h2>
      </div>
    );
  }

  // Handle error state
  if (error) {
    return (
      <div className="bg-white rounded shadow p-4">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Error</h2>
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Guns Inventory
      </h2>
      <ul className="divide-y divide-gray-200">
        {guns.map((gun) => (
          <li key={gun._id} className="py-2">
            <span className="font-medium">{gun.type}</span> -
            <span className="text-gray-600"> {gun.serialNo}</span> -
            <span
              className={`ml-2 inline-block px-2 py-1 text-sm rounded ${
                gun.status === "Available"
                  ? "bg-green-100 text-green-700"
                  : gun.status === "Assigned"
                  ? "bg-yellow-100 text-yellow-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {gun.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
