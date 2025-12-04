import { useTheme } from "../context/useTheme";
import { HeartHandshake, Users, HelpingHand } from "lucide-react";

export default function Home() {
  const { isDark } = useTheme();

  return (
    <main
      className={`flex flex-col items-center justify-center min-h-[calc(100vh-160px)] px-4 sm:px-6 lg:px-16 py-16 transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A]" : "bg-white"
      }`}
    >
      {/* Hero */}
      <section
        className={`text-center max-w-4xl transition-colors duration-500 ${
          isDark ? "text-gray-100" : "text-gray-800"
        }`}
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Conheça o projeto{" "}
          <span className={`${isDark ? "text-blue-300" : "text-blue-600"}`}>
            V.I.D.A.S
          </span>{" "}
          💙
        </h1>

        <p
          className={`text-base sm:text-lg md:text-lg mb-10 max-w-2xl mx-auto ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          O projeto V.I.D.A.S traz alegria e momentos especiais para crianças
          com câncer, promovendo festas e eventos que ajudam a esquecer, por
          algumas horas, sua realidade.
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4">
          <a
            href="/fotos"
            className={`font-medium px-6 py-3 rounded-full w-full sm:w-auto text-center transition-colors duration-500 ${
              isDark
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            Ver fotos do projeto
          </a>

          <a
            href="/sobre"
            className={`font-medium px-6 py-3 rounded-full w-full sm:w-auto text-center border transition-colors duration-500 ${
              isDark
                ? "border-blue-400 text-blue-400 hover:bg-[#292929]"
                : "border-blue-600 text-blue-600 hover:bg-blue-50"
            }`}
          >
            Saiba mais sobre o projeto
          </a>
        </div>
      </section>

      {/* Banner */}
      <section className="mt-12 sm:mt-16 max-w-5xl w-full">
        <img
          src="https://images.unsplash.com/photo-1580281658629-7c67cf02f286?auto=format&fit=crop&w=1200&q=60"
          alt="Evento do projeto V.I.D.A.S"
          className="w-full rounded-2xl shadow-lg object-cover"
        />
      </section>

      {/* Destaques do Projeto */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-20 max-w-6xl w-full text-center">
        {[
          {
            title: "Alegria e diversão",
            text: "Criamos eventos que fazem as crianças sorrirem e se divertirem.",
            icon: <HeartHandshake className="w-8 h-8" />,
          },
          {
            title: "Integração com famílias",
            text: "Momentos especiais também para pais e familiares.",
            icon: <Users className="w-8 h-8" />,
          },
          {
            title: "Apoio e cuidado",
            text: "Nos preocupamos com o bem-estar emocional e físico das crianças.",
            icon: <HelpingHand className="w-8 h-8" />,
          },
        ].map((item, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-colors duration-500 ${
              isDark ? "bg-[#2A2A2A]" : "bg-white"
            }`}
          >
            <div
              className={`flex justify-center mb-4 ${
                isDark ? "text-blue-300" : "text-blue-600"
              }`}
            >
              {item.icon}
            </div>
            <h3
              className={`text-lg sm:text-xl font-semibold mb-3 ${
                isDark ? "text-blue-200" : "text-blue-600"
              }`}
            >
              {item.title}
            </h3>
            <p
              className={`text-sm sm:text-base ${
                isDark ? "text-gray-300" : "text-gray-600"
              }`}
            >
              {item.text}
            </p>
          </div>
        ))}
      </section>
    </main>
  );
}
