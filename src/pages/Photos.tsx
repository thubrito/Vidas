import { useTheme } from "../context/useTheme";

// Lista de eventos e fotos (adicione aqui os caminhos das fotos)
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

  return (
    <div className={`min-h-screen px-6 py-16 transition-colors duration-500 ${isDark ? "bg-[#1A1A1A] text-gray-200" : "bg-gray-50 text-gray-900"}`}>
      <h1 className={`text-4xl font-bold text-center mb-12 transition-colors duration-500 ${isDark ? "text-indigo-500" : "text-indigo-600"}`}>
        Galeria de Fotos do Projeto V.I.D.A.S 📸
      </h1>

      {Object.entries(fotosEventos).map(([key, evento]) => (
        <section key={key} className="mb-16">
          <h2 className={`text-2xl font-semibold mb-6 text-center ${isDark ? "text-indigo-400" : "text-indigo-600"}`}>
            {evento.title}
          </h2>

          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {evento.fotos.map((src, index) => (
              <div key={index} className={`rounded-2xl shadow-md overflow-hidden transition-transform duration-500 hover:scale-105 ${isDark ? "bg-[#2A2A2A]" : "bg-white"}`}>
                <img src={src} alt={`foto-${index}`} className="w-full h-64 object-cover" />
              </div>
            ))}
          </div>
        </section>
      ))}

      <p className={`mt-14 text-center max-w-3xl mx-auto text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-700"}`}>
        Essas fotos representam momentos especiais de alegria, união e impacto positivo na vida das nossas crianças. 💛  
        Continue acompanhando as redes sociais para mais atualizações!
      </p>
    </div>
  );
}
