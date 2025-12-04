// pages/faq.tsx
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useTheme } from "../context/useTheme";

const faqs = [
  {
    question: "O que é o projeto V.I.D.A.S?",
    answer:
      "O V.I.D.A.S é um projeto social que realiza eventos e ações voltados para a comunidade, com o objetivo de gerar aprendizado, integração e bem-estar para todos os participantes.",
  },
  {
    question: "Como os eventos do projeto funcionam?",
    answer:
      "Todos os eventos do V.I.D.A.S são organizados e mantidos graças às doações de pessoas ou empresas que desejam apoiar a causa.",
  },
  {
    question: "Como posso ajudar ou doar para o projeto?",
    answer:
      "Você pode contribuir acessando a página de doações. Sua colaboração permite que mais eventos e ações cheguem a mais pessoas.",
  },
  {
    question: "Quem pode participar das ações do projeto?",
    answer:
      "Todos que tiverem interesse podem participar. Envie uma mensagem para algum dos nossos colaboradores e agende sua visita ao próximo evento.",
  },
  {
    question: "Como posso acompanhar novidades do projeto?",
    answer:
      "Você pode visitar nossas redes sociais e nossa página de fotos, onde divulgamos próximos eventos, fotos e informações sobre as ações do projeto.",
  },
  {
    question: "O projeto é seguro e confiável?",
    answer:
      "Sim! Todas as ações são planejadas com cuidado e responsabilidade, garantindo que os participantes tenham uma experiência positiva e segura.",
  },
];

export default function FAQ() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className={`min-h-screen flex flex-col items-center px-6 py-16 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A] text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-bold mb-12 transition-colors duration-500 ${
          isDark ? "text-indigo-600" : "text-indigo-600"
        }`}
      >
        Perguntas Frequentes sobre o V.I.D.A.S
      </h1>

      <div className="max-w-3xl w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-md transition-colors duration-500 ${
              isDark ? "bg-[#2A2A2A]" : "bg-white"
            }`}
          >
            <button
              onClick={() => toggle(index)}
              className={`w-full flex justify-between items-center p-5 text-left font-medium rounded-2xl transition-colors duration-300 ${
                isDark ? "hover:bg-[#3A3A3A]" : "hover:bg-gray-100"
              }`}
            >
              {faq.question}
              <FiChevronDown
                className={`transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 p-5 pt-0" : "max-h-0"
              }`}
            >
              <p className={`${isDark ? "text-gray-300" : "text-gray-700"}`}>
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ---------------------- NOVA SEÇÃO DE DOAÇÃO ---------------------- */}
      <div className="mt-16 w-full flex flex-col items-center">
        <div
          className={`max-w-3xl text-center p-6 rounded-2xl shadow-md transition-colors duration-500 ${
            isDark ? "bg-[#2A2A2A] text-gray-300" : "bg-white text-gray-700"
          }`}
        >
          <h2
            className={`text-2xl font-semibold mb-3 ${
              isDark ? "text-indigo-500" : "text-indigo-600"
            }`}
          >
            Apoie o projeto V.I.D.A.S 💙
          </h2>

          <p className="text-sm sm:text-base">
            Sua contribuição ajuda a transformar vidas e garantir que mais eventos e ações
            cheguem às nossas crianças. Faça parte dessa causa!
          </p>

          <a
            href="/doacao"
            className={`mt-5 inline-block px-6 py-3 font-medium rounded-xl transition-all duration-300 hover:scale-105 ${
              isDark
                ? "bg-indigo-600 text-white hover:bg-indigo-500"
                : "bg-indigo-600 text-white hover:bg-indigo-500"
            }`}
          >
            Fazer uma Doação
          </a>
        </div>
      </div>
      {/* --------------------------------------------------------------- */}
    </div>
  );
}
