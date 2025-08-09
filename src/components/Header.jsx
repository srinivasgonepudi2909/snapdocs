import React from "react";
import "./HomeHero.css";
import logo from "../assets/icons/SnapDocs_logo.png";

export default function HomeHero() {
  return (
    <section className="hero">
      <div className="hero__logo">
        <img src={logo} alt="SnapDocs Logo" />
      </div>
      <h1>Securely Store Valuable Documents</h1>
      <p>
        Sign up, create folders, and keep your study certificates, IDs, property papers and more—
        safe and organized.
      </p>
      <a className="cta" href="/signup">Get Started</a>
    </section>
  );
}
