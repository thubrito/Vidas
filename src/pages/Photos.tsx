import { useState } from "react";
import { useTheme } from "../context/useTheme";

const fotosEventos: { [key: string]: { title: string; fotos: string[] } } = {
  evento1: {
    title: "Dia das Crianças 2025",
    fotos: [
      "/assets/evento1/img1.jpg",
      "/assets/evento1/img2.jpg",
      "/assets/evento1/img3.jpg",
    ],
  },
};

export default function Fotos() {
  const { isDark } = useTheme();
  const [aberto, setAberto] = useState<string | null>(null);

  function toggleEvento(key: string) {
    setAberto(aberto === key ? null : key);
  }

  return (
    <div
      className={`min-h-screen px-6 py-16 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A] text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h1
        className={`text-4xl font-bold text-center mb-12 ${
          isDark ? "text-indigo-500" : "text-indigo-600"
        }`}
      >
        Galeria de Fotos do Projeto V.I.D.A.S 📸
      </h1>

      <div className="max-w-6xl mx-auto space-y-6">
        {Object.entries(fotosEventos).map(([key, evento]) => (
          <div
            key={key}
            className={`rounded-2xl shadow-md transition-colors ${
              isDark ? "bg-[#2A2A2A]" : "bg-white"
            }`}
          >
            {/* HEADER DO CARD */}
            <button
              onClick={() => toggleEvento(key)}
              className="w-full px-6 py-5 flex justify-between items-center text-left"
            >
              <h2
                className={`text-xl font-semibold ${
                  isDark ? "text-indigo-400" : "text-indigo-600"
                }`}
              >
                {evento.title}
              </h2>

              <span className="text-2xl">
                {aberto === key ? "−" : "+"}
              </span>
            </button>

            {/* CONTEÚDO EXPANSÍVEL */}
            <div
              className={`overflow-hidden transition-all duration-500 ${
                aberto === key ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {evento.fotos.map((src, index) => (
                  <div
                    key={index}
                    className="rounded-2xl overflow-hidden shadow hover:scale-105 transition-transform duration-300"
                  >
                    <img
                      src={src}
                      alt={`foto-${index}`}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <p
        className={`mt-14 text-center max-w-3xl mx-auto ${
          isDark ? "text-gray-300" : "text-gray-700"
        }`}
      >
        Esses registros mostram momentos especiais de alegria, união e impacto
        positivo na vida das nossas crianças 💛
      </p>
    </div>
  );
}
