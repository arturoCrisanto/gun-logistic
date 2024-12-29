"use client";
import { useEffect, useState } from "react";

export default function AssignmentList() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    fetch("/api/assignments")
      .then((res) => res.json())
      .then((data) => setAssignments(data));
  }, []);

  return (
    <div className="bg-white rounded shadow p-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Assignments</h2>
      <ul className="divide-y divide-gray-200">
        {assignments.map((assignment) => (
          <li key={assignment._id} className="py-2">
            <span className="font-medium">{assignment.employeeName}</span> -
            <span className="text-gray-600"> {assignment.gunId}</span> -
            <span
              className={`ml-2 inline-block px-2 py-1 text-sm rounded ${
                assignment.status === "Issued"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {assignment.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
