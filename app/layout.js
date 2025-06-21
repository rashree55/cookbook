import './globals.css'; 
import Link from 'next/link';

export const metadata = {
  title: 'Crave | Recipe App',
  description: 'Delicious recipes at your fingertips',
};


function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center max-w-8xl mx-auto">
        
        
        <h1 className="text-2xl font-bold">
          Recipe<span className="text-blue-500">Nest</span>
        </h1>

        
        <div className="flex space-x-8">
          <Link href="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link href="/about" className="text-gray-600 hover:text-blue-500">About</Link>
          <Link href="/recipe" className="text-gray-600 hover:text-blue-500">Recipes</Link>
        </div>

        
        <div className="flex items-center space-x-7">
          <input
            type="text"
            placeholder="Search recipes..."
            className="w-64 px-4 py-2 border border-gray-500 rounded-full"
          />

          <Link href= '/sign-in'>
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
        <Navbar/>
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}