"use client";
import Link from "next/link";
import { useState, useEffect } from 'react';

const MenuIcon = (props) => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
  </svg>
);

const CloseIcon = (props) => (
  <svg
    className="w-8 h-8"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
  </svg>
);

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/cv", label: "C.V." },
    { href: "/projects", label: "PROJECTS" },
    { href: "/art", label: "ART" },
  ];

  const githubSvg = (
    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.11.82-.26.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.652.242 2.873.118 3.176.77.84 1.235 1.91 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.217.694.825.576C20.565 21.795 24 17.3 24 12 24 5.373 18.627 0 12 0z" />
    </svg>
  );

  return (
    <div 
      className={`
        bg-white z-50 border-b-6 border-lightgreen sticky 
        transition-all duration-700 ease-out 
        ${isLoaded ? 'top-0' : '-top-24'} 
      `}
    >
      <header className="p-4 md:p-6">
        <div className="flex justify-between items-center px-2 md:px-6">
          <Link
            href="/"
            className="tracking-wider playfair-400 text-3xl md:text-4xl focus:outline-none hover:text-black"
            style={{ whiteSpace: "pre" }}
          >
            BENNETT TAYLOR
          </Link>
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-4">
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="playfair-400 pr-5 py-3 text-xl font-bold hover:text-lightgreen transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/BennettTaylor"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="text-black hover:text-lightgreen transition-colors duration-300"
                >
                  {githubSvg}
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>
      <nav
        className={`md:hidden w-full bg-white shadow-lg transition-[max-height] duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-screen' : 'max-h-0'
        } overflow-hidden`}
      >
        <ul className="flex flex-col items-center py-4">
          {navItems.map(({ href, label }) => (
            <li key={href} className="w-full text-center border-b last:border-b-0 border-gray-100">
              <Link
                href={href}
                className="tinos-400 block w-full py-3 text-xl font-bold hover:bg-gray-50 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="https://github.com/BennettTaylor"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-black hover:text-lightgreen transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {githubSvg}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}