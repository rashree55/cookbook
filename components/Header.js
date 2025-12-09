'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session ?? null);
    };
    getSession();
    const { data: sub } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));
    return () => sub?.subscription?.unsubscribe?.();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  return (
    <header className="w-full border-white bg-white">
      <nav className="max-w-10xl mx-auto flex items-center justify-between py-4 px-4">

        {/* LEFT: Logo */}
        <Link href="/" className="text-3xl font-bold tracking-tight">
          <span className="text-black">Recipe</span>
          <span className="text-blue-600">Nest</span>
        </Link>

        {/* RIGHT: Nav Buttons */}
        <div className="flex items-center gap-6">

          <Link
            href="/login"
            className={`${
              pathname === "/login"
                ? "text-blue-600 font-semibold"
                : "text-gray-700 hover:text-black"
            } text-lg`}
          >
            Login
          </Link>

          <Link
            href="/signup"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg text-lg hover:bg-blue-700 transition"
          >
            Signup
          </Link>

        </div>
      </nav>
    </header>
  );
}
