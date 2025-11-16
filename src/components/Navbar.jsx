import { Menu, HeartHandshake } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Impact", href: "#impact" },
    { label: "Get Involved", href: "#get-involved" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur bg-white/70 border-b border-orange-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="h-9 w-9 grid place-content-center rounded-full bg-gradient-to-br from-amber-500 to-rose-500 text-white shadow">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <span className="font-extrabold tracking-wide text-lg text-rose-700">
              Pillars of Light
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-700 hover:text-rose-700 transition"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white px-5 py-2 text-sm font-semibold shadow hover:shadow-md transition"
            >
              Donate
            </a>
          </nav>

          <button
            className="md:hidden p-2 rounded-md border border-slate-200 text-slate-700"
            onClick={() => setOpen((s) => !s)}
            aria-label="Toggle menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 grid gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-700 hover:text-rose-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#donate"
              onClick={() => setOpen(false)}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-rose-500 text-white px-5 py-2 text-sm font-semibold shadow"
            >
              Donate
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
