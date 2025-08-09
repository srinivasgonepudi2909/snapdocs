import React from "react";
import Header from "./components/Header";
import HomeHero from "./components/HomeHero";
import CategoryGrid from "./components/CategoryGrid";
import WhyChooseUs from "./components/WhyChoose"; // ✅ Add this

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <CategoryGrid />
        <WhyChooseUs /> {/* ✅ Added */}
      </main>
    </>
  );
}
