import {FaInstagram} from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useTheme } from "../context/useTheme.ts";

export default function Footer() {
  const { isDark } = useTheme();

  return (
    <footer
      className={`w-full pt-10 pb-6 mt-10 border-t transition-colors duration-500 ${
        isDark
          ? "bg-[#0A0A0A] border-[#1A1A1A] text-gray-300"
          : "bg-gray-50 border-gray-200 text-gray-800"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e descrição */}
        <div>
          <h2
            className={`text-2xl font-bold mb-2 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-blue-600"
            }`}
          >
            V.I.D.A.S
          </h2>
          <p
            className={`text-sm leading-relaxed transition-colors duration-500 ${
              isDark ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Associação que ajuda crianças com câncer e suas famílias a viver momentos de alegria e esperança.
          </p>
        </div>

        {/* Links úteis */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Links úteis
          </h3>
          <ul className="space-y-2 text-sm">
            {[
              { to: "/", label: "Home" },
              { to: "/sobre", label: "Sobre" },
              { to: "/faq", label: "FAQ" },
              { to: "/contato", label: "Contato" },
            ].map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className={`transition-colors duration-500 hover:text-blue-600 ${
                    isDark ? "text-gray-300" : "text-gray-700"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contato */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Contato
          </h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FiPhone className="text-blue-600" />
              <a
                href="tel:+5511982002485"
                className="transition-colors duration-500 hover:text-blue-600"
              >
                +55 (11) 98200 - 2485
              </a>
            </li>
            <li
              className={`transition-colors duration-500 ${
                isDark ? "text-gray-400" : "text-gray-600"
              }`}
            >
              São Paulo, Brasil
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div>
          <h3
            className={`text-lg font-semibold mb-3 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            Siga-nos
          </h3>
          <div className="flex gap-4 text-xl">
            {[FaInstagram].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="transition-colors duration-500 hover:text-blue-600"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <div
        className={`mt-10 pt-4 text-center text-sm transition-colors duration-500 ${
          isDark
            ? "text-[#2A2A2A] border-t border-[#2A2A2A]"
            : "text-gray-500 border-t border-gray-200"
        }`}
      >
        © {new Date().getFullYear()} V.I.D.A.S — Todos os direitos reservados.
      </div>
    </footer>
  );
}
