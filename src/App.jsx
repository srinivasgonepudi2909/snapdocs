import React from "react";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import CategoryGrid from "./components/CategoryGrid";
import WhyChoose from "./components/WhyChoose"; // <-- import new section

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <CategoryGrid />
        <WhyChoose /> {/* <-- added here */}
      </main>
    </>
  );
}
