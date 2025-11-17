'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full bg-white shadow-md">
      <nav className="max-w-6xl mx-auto flex items-center justify-between py-4 px-6">

        {/* LEFT: Logo */}
        <Link href="/" className="text-2xl font-bold">
          <span className="text-black">Recipe</span>
          <span className="text-blue-500">Nest</span>
        </Link>

        {/* RIGHT: Nav buttons */}
        <div className="flex items-center gap-6">

          <Link
            href="/login"
            className={`${
              pathname === "/login"
                ? "text-blue-500 font-semibold"
                : "text-gray-700 hover:text-black"
            }`}
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
          >
            Signup
          </Link>

        </div>
      </nav>
    </header>
  );
}
