import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../context/useTheme.ts";

export default function Menu() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { isDark } = useTheme();

  const links = [
    { to: "/", label: "Início" },
    { to: "/sobre", label: "Sobre" },
    { to: "/fotos", label: "Fotos" },
    { to: "/questoes", label: "Perguntas" },
    { to: "/contato", label: "Contato" },
  ];

  return (
    <div className="relative">
      {/* Botão mobile animado */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Abrir menu"
        className="md:hidden w-8 h-8 flex flex-col justify-center items-center gap-1 z-50"
      >
        <span
          className={`w-6 h-0.5 rounded transition-all duration-500 ${
            isDark ? "bg-gray-100" : "bg-indigo-600"
          } ${
            open ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 rounded transition-all duration-500 ${
            isDark ? "bg-gray-100" : "bg-indigo-600"
          } ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`w-6 h-0.5 rounded transition-all duration-500 ${
            isDark ? "bg-gray-100" : "bg-indigo-600"
          } ${
            open ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Menu desktop */}
      <nav className="hidden md:flex gap-6 items-center text-base font-medium">
        {links.map(({ to, label }) => (
          <Link
            key={to}
            to={to}
            className={`transition-colors duration-500 ${
              location.pathname === to
                ? "text-indigo-500 font-semibold"
                : isDark
                ? "text-gray-300 hover:text-indigo-400"
                : "text-gray-700 hover:text-indigo-500"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {/* Menu mobile – agora nasce do botão */}
      {open && (
        <nav
          className={`absolute top-10 left-0 w-48 rounded-xl shadow-xl flex flex-col gap-1 py-3 px-2 md:hidden transition-colors duration-500 z-40 ${
            isDark
              ? "bg-[#2A2A2A] border border-gray-700"
              : "bg-white border border-gray-100"
          }`}
        >
          {links.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              onClick={() => setOpen(false)}
              className={`block text-center py-2 rounded-lg transition-all duration-300 ${
                location.pathname === to
                  ? isDark
                    ? "bg-[#3A3A3A] text-white font-semibold"
                    : "bg-indigo-100 text-indigo-600 font-semibold"
                  : isDark
                  ? "text-gray-300 hover:bg-[#3A3A3A]"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </div>
  );
}
