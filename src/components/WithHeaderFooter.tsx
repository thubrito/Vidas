import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  Component: React.ComponentType;
}

export default function WithHeaderFooter({ Component }: Props) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-160px)]">
        <Component />
      </main>
      <Footer />
    </>
  );
}
