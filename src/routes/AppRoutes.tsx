import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Sobre from "../pages/About";
import FAQ from "../pages/Questions";
import Contact from "../pages/Contact";
import Fotos from "../pages/Photos";
import WithHeaderFooter from "../components/WithHeaderFooter";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WithHeaderFooter Component={Home} />} />
      <Route path="/sobre" element={<WithHeaderFooter Component={Sobre} />} />
      <Route path="/questoes" element={<WithHeaderFooter Component={FAQ} />} />
      <Route path="/contato" element={<WithHeaderFooter Component={Contact} />} />
      <Route path="/fotos" element={<WithHeaderFooter Component={Fotos} />} />

      {/* fallback */}
      <Route path="*" element={<WithHeaderFooter Component={Home} />} />
    </Routes>
  );
}
