import { Outlet } from "react-router-dom";
import Header from "./src/components/Header.tsx";
import Footer from "./src/components/Footer.tsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-col grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
