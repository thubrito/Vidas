import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import ScrollToTop from "./components/ScrollToTop.tsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      {/* ScrollToTop garante que a página vá para o topo ao navegar */}
      <ScrollToTop />

      <main className="flex flex-col grow">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
