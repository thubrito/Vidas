import { Link } from "react-router-dom";
import { FiSettings, FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import Menu from "./Menu";
import logo from "/favicon.png";
import { useTheme } from "../context/useTheme.ts";

export default function Header() {
  const { isDark, toggleTheme } = useTheme();
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header
      className={`w-full shadow-md sticky top-0 z-50 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A] text-gray-200" : "bg-gray-50 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo V.I.D.A.S" className="h-10 w-10" />
          <h1 className="text-xl md:text-2xl font-semibold text-blue-600">
            V.I.D.A.S
          </h1>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:block">
          <Menu />
        </div>

        {/* Botão de Configurações */}
        <div className="relative">
          <button
            onClick={() => setMenuAberto(!menuAberto)}
            className={`p-2 rounded-full transition-colors duration-500 ${
              isDark ? "hover:bg-[#4A4A4A]" : "hover:bg-gray-100"
            }`}
          >
            <FiSettings
              className={`text-xl transition-colors duration-500 ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            />
          </button>

          {/* Menu Configurações */}
          {menuAberto && (
            <div
              className={`absolute right-0 top-12 w-56 shadow-lg rounded-lg border transition-colors duration-500 z-50 ${
                isDark
                  ? "bg-[#3A3A3A] border-[#1A1A1A]"
                  : "bg-white border-gray-200"
              } animate-fadeIn`}
            >
              <div className="flex flex-col py-2">

                {/* Alternar Tema */}
                <button
                  onClick={toggleTheme}
                  className={`flex items-center justify-between px-4 py-2 transition-colors duration-500 ${
                    isDark
                      ? "hover:bg-[#4A4A4A] text-gray-200"
                      : "hover:bg-gray-50 text-gray-700"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {isDark ? <FiMoon /> : <FiSun />} Tema
                  </span>

                  {/* Switch */}
                  <div
                    className={`w-10 h-5 flex items-center rounded-full p-1 transition-colors duration-500 ${
                      isDark ? "bg-indigo-600" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform duration-500 ${
                        isDark ? "translate-x-5" : ""
                      }`}
                    ></div>
                  </div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Menu Mobile */}
      <div
        className={`md:hidden border-t transition-colors duration-500 ${
          isDark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-gray-50"
        } px-4 py-2`}
      >
        <Menu />
      </div>
    </header>
  );
}
