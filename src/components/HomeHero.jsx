import React from "react";
import "./HomeHero.css";
import heroLogo from "../assets/icons/SnapDocs_logo.png";

export default function HomeHero() {
  return (
    <section className="hero">
      <img src={heroLogo} alt="SnapDocs" className="hero__logo" />
      <h1>Securely Store Valuable Documents</h1>
      <p>
        Sign up, create folders, and keep your study certificates, IDs, property
        papers and more—safe and organized.
      </p>
      <a className="cta" href="/signup">Get Started</a>
    </section>
  );
}
