// pages/contact.tsx
import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";
import { useTheme } from "../context/useTheme";

export default function Contact() {
  const { isDark } = useTheme();

  return (
    <section
      className={`min-h-screen py-16 px-6 text-center transition-colors duration-500 ${
        isDark
          ? "bg-[#1A1A1A] text-gray-200"
          : "bg-linear-to-b from-blue-50 to-white text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-10 transition-colors duration-500 ${
          isDark ? "text-indigo-600" : "text-blue-600"
        }`}
      >
        Entre em Contato
      </h1>

      <p
        className={`max-w-2xl mx-auto mb-12 transition-colors duration-500 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Fale com a equipe <strong>V.I.D.A.S</strong>. Estamos prontos para ouvir suas ideias, dúvidas ou sugestões sobre os eventos e ações do projeto!
      </p>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Email */}
        <div
          className={`shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-500 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <FiMail className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3
            className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            E-mail
          </h3>
          <p className={`transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            contato@vidas.com
          </p>
        </div>

        {/* Telefone */}
        <div
          className={`shadow-xl rounded-2xl p-6 hover:scale-105 transition-transform duration-500 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <FiPhone className="text-5xl text-indigo-600 mx-auto mb-4" />
          <h3
            className={`text-xl font-semibold mb-2 transition-colors duration-500 ${
              isDark ? "text-gray-100" : "text-gray-800"
            }`}
          >
            Telefone
          </h3>
          <p className={`transition-colors duration-500 ${isDark ? "text-gray-300" : "text-gray-600"}`}>
            +55 (11) 99999-9999
          </p>
        </div>
      </div>

      {/* Instagram com destaque */}
      <div className="flex justify-center mt-12">
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-500 transform hover:scale-105 ${
            isDark
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          <FiInstagram size={28} />
          <span className="font-semibold text-lg">Siga-nos no Instagram</span>
        </a>
      </div>
    </section>
  );
}
