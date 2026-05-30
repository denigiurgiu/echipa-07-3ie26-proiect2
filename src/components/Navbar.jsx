import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Members", path: "/members" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-950/95 backdrop-blur border-b border-slate-200 dark:border-slate-800">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-extrabold shadow-lg">
            E7
          </div>
          <div>
            <p className="font-extrabold text-xl text-blue-600 leading-none">
              Echipa 7
            </p>
            <p className="mono text-xs text-slate-500 dark:text-slate-400">
              FEAA Web Dev
            </p>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => (
            <Link key={link.path} to={link.path} className="hover:text-blue-600">
              {link.name}
            </Link>
          ))}

          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-3 rounded-xl border border-slate-300 dark:bg-slate-900 dark:border-slate-700"
          />

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold"
          >
            {darkMode ? "Light" : "Dark"}
          </button>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="md:hidden text-3xl font-bold"
        >
          ☰
        </button>
      </nav>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          />

          <aside className="absolute right-0 top-0 h-full w-80 max-w-[85%] bg-white dark:bg-slate-950 p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-10">
              <p className="text-2xl font-bold text-blue-600">Meniu</p>
              <button onClick={() => setOpen(false)} className="text-4xl">
                ×
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className="text-xl font-semibold"
                >
                  {link.name}
                </Link>
              ))}

              <input
                type="text"
                placeholder="Search..."
                className="px-4 py-3 rounded-xl border border-slate-300 dark:bg-slate-900 dark:border-slate-700"
              />

              <button
                onClick={() => setDarkMode(!darkMode)}
                className="px-5 py-3 rounded-xl bg-blue-600 text-white font-semibold"
              >
                {darkMode ? "Light Mode" : "Dark Mode"}
              </button>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}