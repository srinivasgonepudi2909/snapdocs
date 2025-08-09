import React from "react";
import "./CategoryGrid.css";

import study from "../assets/icons/study-certificates.png";
import id from "../assets/icons/id.png";
import property from "../assets/icons/property.png";
import other from "../assets/icons/Docs.png";

const items = [
  { src: study, label: "Study Certificate" },
  { src: id, label: "ID" },
  { src: property, label: "Property" },
  { src: other, label: "Other" },
];


export default function CategoryGrid() {
  return (
    <section className="grid">
      {items.map((it) => (
        <div key={it.label} className="card">
          <img src={it.src} alt={it.label} />
          <span>{it.label}</span>
        </div>
      ))}
    </section>
  );
}
