// pages/contact.tsx
import {
  FiPhone,
  FiInstagram,
  FiDollarSign,
  FiHeart,
  FiUsers,
  FiShare2,
} from "react-icons/fi";
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
      {/* TÍTULO */}
      <h1
        className={`text-4xl font-bold mb-8 transition-colors duration-500 ${
          isDark ? "text-indigo-500" : "text-blue-600"
        }`}
      >
        Entre em contato conosco
      </h1>

      <p
        className={`max-w-2xl mx-auto mb-12 transition-colors duration-500 ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Fale com a equipe <strong>V.I.D.A.S</strong>. Estamos prontos para ouvir
        ideias, dúvidas, sugestões e também para receber quem deseja fazer parte
        das nossas ações.
      </p>

      {/* EMAIL E TELEFONE */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div
          className={`shadow-xl rounded-2xl p-6 transition-transform duration-500 hover:scale-105 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <FiPhone className="text-5xl text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Telefone</h3>
          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            +55 (11) 98200 - 2485
          </p>
        </div>
      </div>

      {/* DOAÇÕES */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-6 transition-colors duration-500 ${
            isDark ? "text-indigo-500" : "text-blue-600"
          }`}
        >
          Doações
        </h2>

        <p
          className={`mb-6 transition-colors duration-500 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Ao contribuir com as nossas ações, você estará ajudando a realizar
          sonhos e transformar dores em sorrisos.
        </p>

        <p
          className={`mb-10 transition-colors duration-500 ${
            isDark ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Todo valor arrecadado é destinado à compra de alimentos, locação de
          espaços, brinquedos, entretenimento, decoração, transporte e tudo o que
          for necessário para a realização de cada ação.
          <br />
          <strong>Ajudar o próximo é um ato de amor.</strong>
        </p>

        {/* PIX */}
        <div
          className={`shadow-xl rounded-2xl p-6 max-w-md mx-auto transition-transform duration-500 hover:scale-105 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <FiDollarSign className="text-5xl text-indigo-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">PIX</h3>

          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
            Chave: <strong>11 98200 2485</strong>

          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}></p>
            Nome: <strong>Andreia da Silva Barbosa Martins</strong>

          <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}></p>
            Banco: <strong>NUBANK</strong>
          </p>

          <button
            onClick={() =>
              navigator.clipboard.writeText("11982002485")
            }
            className={`mt-4 px-5 py-2 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            Copiar chave PIX
          </button>
        </div>
      </div>

      {/* COMO AJUDAR */}
      <div className="mt-20 max-w-4xl mx-auto">
        <h2
          className={`text-3xl font-bold mb-10 transition-colors duration-500 ${
            isDark ? "text-indigo-500" : "text-blue-600"
          }`}
        >
          Como ajudar?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div
            className={`rounded-2xl p-6 shadow-xl ${
              isDark ? "bg-[#2A2A2A]" : "bg-white"
            }`}
          >
            <FiShare2 className="text-4xl text-indigo-500 mx-auto mb-4" />
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Divulgando, seguindo e compartilhando nossas redes sociais e ações.
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 shadow-xl ${
              isDark ? "bg-[#2A2A2A]" : "bg-white"
            }`}
          >
            <FiHeart className="text-4xl text-indigo-500 mx-auto mb-4" />
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Doando itens, recursos ou oferecendo algum tipo de serviço.
            </p>
          </div>

          <div
            className={`rounded-2xl p-6 shadow-xl ${
              isDark ? "bg-[#2A2A2A]" : "bg-white"
            }`}
          >
            <FiUsers className="text-4xl text-indigo-500 mx-auto mb-4" />
            <p className={`${isDark ? "text-gray-300" : "text-gray-600"}`}>
              Com o seu tempo — você será sempre bem-vindo(a) para ajudar e ver
              de perto o que fazemos.
            </p>
          </div>
        </div>
      </div>

      {/* INSTAGRAM */}
      <div className="flex justify-center mt-20">
        <a
          href="https://www.instagram.com/_v.i.d.a.s_/"
          target="_blank"
          rel="noreferrer"
          className={`flex items-center gap-3 px-6 py-3 rounded-full transition-all duration-500 hover:scale-105 ${
            isDark
              ? "bg-indigo-600 text-white hover:bg-indigo-500"
              : "bg-blue-500 text-white hover:bg-blue-600"
          }`}
        >
          <FiInstagram size={28} />
          <span className="font-semibold text-lg">
            Siga-nos no Instagram
          </span>
        </a>
      </div>
    </section>
  );
}
