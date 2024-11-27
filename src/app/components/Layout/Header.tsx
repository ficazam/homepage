import Link from "next/link";

export const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav className="flex justify-center space-x-4">
      <Link href="/">
        <p className="hover:text-pink-500">Home</p>
      </Link>
      <Link href="/portfolio">
        <p className="hover:text-pink-500">Portfolio</p>
      </Link>
      <Link href="/about">
        <p className="hover:text-pink-500">About</p>
      </Link>
      <Link href="/contact">
        <p className="hover:text-pink-500">Contact</p>
      </Link>
    </nav>
  </header>
);
