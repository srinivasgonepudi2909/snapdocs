import React from "react";
import "./HomeHero.css";

export default function HomeHero() {
  return (
    <section className="hero">
      <img src={heroLogo} alt="SnapDocs" className="hero-logo-mini" />
      <h1>Securely Store Valuable Documents</h1>
      <p>
        Sign up, create folders, and keep your study certificates, IDs, property
        papers and more—safe and organized.
      </p>
      <a className="cta" href="/signup">Get Started</a>
    </section>
  );
}
