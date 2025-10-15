// components/NavBar.tsx
import Link from "next/link";

export default function NavBar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo / Brand */}
        <Link href="/" className="text-xl font-bold tracking-tight">
          Solaranosis
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6 text-sm">
          <li><Link href="/" className="hover:underline">Home</Link></li>
          <li><Link href="/about" className="hover:underline">About</Link></li>
          <li><Link href="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}
