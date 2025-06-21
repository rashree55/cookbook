'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; 

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); 

  return (
    <nav className="flex items-center gap-6 p-4 shadow-md">
     
      <Link
        href="/"
        className={`pb-1 border-b-2 ${
          pathname === '/' ? 'border-blue-500 text-blue-600' : 'border-transparent'
        }`}
      >
        Home
      </Link>

      <Link
        href="/about"
        className={`pb-1 border-b-2 ${
          pathname === '/about' ? 'border-blue-500 text-blue-600' : 'border-transparent'
        }`}
      >
        About
      </Link>

      <Link
        href="/recipe"
        className={`pb-1 border-b-2 ${
          pathname === '/recipe' ? 'border-blue-500 text-blue-600' : 'border-transparent'
        }`}
      >
        Recipes
      </Link>

      
      <button
        onClick={() => setOpen(!open)}
        className="ml-auto bg-blue-500 text-white px-3 py-1 rounded"
      >
        {open ? 'Close Menu' : 'Open Menu'}
      </button>
    </nav>
  );
}





/*
'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <button onClick={() => setOpen(!open)}>Toggle Menu</button>
    </nav>
  );
}
*/




