import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Header />

      <main className="flex flex-col grow w-full overflow-x-hidden">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
