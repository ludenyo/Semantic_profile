import { useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/form", label: "Feedback" },
  { to: "/thank-you", label: "Thank You" },
];

export default function SiteLayout() {
  const location = useLocation();
  const previousPath = useRef(location.pathname);

  useEffect(() => {
    if (previousPath.current === location.pathname) return;
    previousPath.current = location.pathname;
    document.getElementById("main-content")?.focus();
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-paper font-sans text-ink">
      <a
        className="skip-link fixed left-4 top-4 z-50 -translate-y-24 rounded-lg bg-ink px-4 py-3 font-semibold text-white shadow-lg focus:translate-y-0"
        href="#main-content"
      >
        Skip to main content
      </a>
      <header className="border-b border-line bg-white">
        <div className="mx-auto flex w-full max-w-layout flex-wrap items-center justify-between gap-4 px-5 py-4 sm:px-8 lg:px-10">
          <NavLink className="text-lg font-bold tracking-tight text-ink" to="/" end>
            Kairos Spatial Solutions
          </NavLink>
          <nav aria-label="Main navigation">
            <ul className="flex flex-wrap items-center gap-2 text-sm font-semibold sm:gap-3">
              {links.map((link) => (
                <li key={link.to}>
                  <NavLink
                    className={({ isActive }) =>
                      `inline-flex min-h-11 items-center rounded-lg px-3 py-2 transition-colors ${
                        isActive
                          ? "bg-ink text-white"
                          : "text-ink hover:bg-cream"
                      }`
                    }
                    to={link.to}
                    end={link.end}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
      <footer className="border-t border-line px-5 py-5 text-center text-xs text-muted">
        Kairos Spatial Solutions · Logo concepts
      </footer>
    </div>
  );
}
