"use client";
import { useEffect, useState } from "react";

export default function GunList() {
  const [guns, setGuns] = useState([]);

  useEffect(() => {
    fetch("/api/inventory")
      .then((res) => res.json())
      .then((data) => setGuns(data));
  }, []);

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
