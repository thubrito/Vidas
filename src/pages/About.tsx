// pages/About.tsx
import { useTheme } from "../context/useTheme";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";
import { Link } from "react-router-dom";

export default function About() {
  const { isDark } = useTheme();

  const distribuicaoAcoes = [
    { name: "Festas Temáticas", value: 40 },
    { name: "Eventos Comemorativos", value: 30 },
    { name: "Ações em Hospitais", value: 20 },
    { name: "Datas Especiais", value: 10 },
  ];

  const cores = ["#2563EB", "#3B82F6", "#60A5FA", "#93C5FD"];

  const impactoProjeto = [
    { ano: "2022", criancas: 40 },
    { ano: "2023", criancas: 85 },
    { ano: "2024", criancas: 140 },
    { ano: "2025", criancas: 210 },
  ];

  const vidas = [
    {
      letra: "V",
      palavra: "Vitória",
      img: "/assets/vidas/Vitoria.png",},
    {
      letra: "I",
      palavra: "Igualdade",
      img: "/assets/vidas/Igualdade.png",
    },
    {
      letra: "D",
      palavra: "Deus",
      img: "/assets/vidas/Deus.png",
    },
    {
      letra: "A",
      palavra: "Amor",
      img: "/assets/vidas/Amor.png",
    },
    {
      letra: "S",
      palavra: "Saúde",
      img: "/assets/vidas/Saude.png",
    },
  ];

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        isDark ? "bg-[#1A1A1A] text-gray-200" : "bg-gray-50 text-gray-900"
      }`}
    >
      {/* HERO */}
      <section
        className={`py-24 px-6 text-center ${
          isDark ? "bg-[#1A1A1A]" : "bg-blue-50"
        }`}
      >
        <h1
          className={`text-5xl font-extrabold mb-6 ${
            isDark ? "text-blue-400" : "text-blue-600"
          }`}
        >
          Sobre o Projeto V.I.D.A.S
        </h1>
        <p
          className={`max-w-3xl mx-auto text-lg ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          O V.I.D.A.S é um projeto social que leva alegria, esperança e amor para
          crianças com câncer, promovendo festas, eventos e momentos que ajudam
          a sair um pouco da dura realidade do tratamento.
        </p>
      </section>

      {/* SIGNIFICADO VIDAS */}
      <section className="max-w-7xl mx-auto py-20 px-6">
        <h2
          className={`text-4xl font-extrabold text-center mb-12 ${
            isDark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          O significado de V.I.D.A.S
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {vidas.map((item, i) => (
            <div
              key={i}
              className={`flex flex-col items-center text-center rounded-3xl shadow-xl p-8 transition-transform duration-300 hover:scale-105 ${
                isDark ? "bg-[#2A2A2A]" : "bg-white"
              }`}
            >
              <img
                src={item.img}
                alt={item.palavra}
                className="w-20 h-20 mb-4 object-contain"
              />

              <h3
                className={`text-2xl font-bold ${
                  isDark ? "text-blue-300" : "text-blue-600"
                }`}
              >
                {item.letra}
              </h3>

              <p
                className={`mt-1 ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                {item.palavra}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* GRÁFICOS */}
      <section className="max-w-7xl mx-auto py-20 px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div
          className={`rounded-3xl shadow-2xl p-8 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 ${
              isDark ? "text-blue-300" : "text-blue-600"
            }`}
          >
            Tipos de Ações Realizadas
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={distribuicaoAcoes}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {distribuicaoAcoes.map((_e, i) => (
                  <Cell key={i} fill={cores[i % cores.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div
          className={`rounded-3xl shadow-2xl p-8 ${
            isDark ? "bg-[#2A2A2A]" : "bg-white"
          }`}
        >
          <h3
            className={`text-2xl font-bold mb-6 ${
              isDark ? "text-blue-300" : "text-blue-600"
            }`}
          >
            Crescimento do Impacto
          </h3>

          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={impactoProjeto}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="ano" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="criancas"
                stroke="#2563EB"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section
        className={`py-20 px-6 text-center ${
          isDark ? "bg-[#1A1A1A]" : "bg-blue-50"
        }`}
      >
        <h2
          className={`text-4xl font-extrabold mb-6 ${
            isDark ? "text-blue-300" : "text-blue-600"
          }`}
        >
          Ajudar o próximo é um ato de Amor!
        </h2>

        <p
          className={`max-w-2xl mx-auto mb-8 ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          Faça parte você também, nos ajude a compartilhar sorrisos 💙
        </p>

        <Link
          to="/contato"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-xl shadow-lg transition-all"
        >
          Quero Ajudar
        </Link>
      </section>
    </div>
  );
}
