import Link from "next/link";

const navLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About Me" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-gray-900"
        >
          Artur Tabor
        </Link>
        <ul className="flex space-x-6 text-sm font-medium text-gray-600">
          {navLinks.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:text-gray-900 transition-colors"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
