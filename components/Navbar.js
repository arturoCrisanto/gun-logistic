"use client";
import { useEffect, useState } from "react";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white font-semibold text-xl">
          Gun Logistic
        </a>
        <ul className="flex space-x-4">
          <li>
            <a href="/inventory" className="text-white">
              Inventory
            </a>
          </li>
          <li>
            <a href="/assignments" className="text-white">
              Assignments
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
