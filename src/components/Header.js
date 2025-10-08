import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white p-8 top-4 z-50">
      <div className="flex justify-between items-center">
        <Link
          href="/"
          className="tracking-wider chicle-regular text-5xl focus:outline-none hover:text-black"
          style={{ whiteSpace: "pre" }}
        >
          BENNETT TAYLOR
        </Link>
        <nav>
          <ul className="flex space-x-4">
            {[
              { href: "/", label: "HOME" },
              { href: "/cv", label: "C.V." },
              { href: "/projects", label: "PROJECTS" },
              { href: "/art", label: "ART" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="chicle-regular px-5 py-3 text-2xl font-bold hover:animate-bounce"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}