import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
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
              isDark ? "text-gray-100" : "text-[#00A67E]"
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
            <li>
              <Link
                to="/"
                className={`transition-colors duration-500 hover:text-[#00A67E] ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={`transition-colors duration-500 hover:text-[#00A67E] ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className={`transition-colors duration-500 hover:text-[#00A67E] ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={`transition-colors duration-500 hover:text-[#00A67E] ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Contato
              </Link>
            </li>
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
              <FiMail className="text-[#00A67E]" />
              <a
                href="mailto:contato@vidas.org"
                className="transition-colors duration-500 hover:text-[#00A67E]"
              >
                contato@vidas.org
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
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-500 hover:text-[#00A67E]"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-500 hover:text-[#00A67E]"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="transition-colors duration-500 hover:text-[#00A67E]"
            >
              <FaLinkedinIn />
            </a>
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
