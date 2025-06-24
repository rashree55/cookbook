'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './globals.css';
import Link from 'next/link';

/*
export const metadata = {
  title: 'Crave | Recipe App',
  description: 'Delicious recipes at your fingertips',
};
*/

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery) {
      router.push(`/recipe?search=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        {/* Logo */}
        <h1 className="text-2xl font-bold">
          Recipe<span className="text-blue-500">Nest</span>
        </h1>

        {/* Navigation Links */}
        <div className="flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-500">About</Link>
          <Link href="/recipe" className="text-gray-600 hover:text-blue-500">Recipes</Link>
        </div>

        {/* Search & Sign-in */}
        <div className="flex items-center space-x-4">
          <form onSubmit={handleSearch} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search recipes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-64 px-4 py-2 border border-gray-500 rounded-full"
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-1.5 rounded-xl hover:bg-blue-600 transition"
            >
              Search
            </button>
          </form>

          <Link href="/sign-in">
            <button className="bg-blue-500 text-white px-4 py-1.5 rounded-xl hover:bg-blue-600 transition">
              Sign In
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
