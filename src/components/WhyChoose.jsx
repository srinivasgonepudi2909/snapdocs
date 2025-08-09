import React from "react";
import "./WhyChoose.css";
import secureIcon from "../assets/icons/secure.svg";

export default function WhyChoose() {
  return (
    <section className="why-choose">
      <div className="why-card">
        <img src={secureIcon} alt="Secure Storage" />
        <h3>Bank-Grade Security</h3>
        <p>Your documents are encrypted and stored with top-level protection.</p>
      </div>
    </section>
  );
}
