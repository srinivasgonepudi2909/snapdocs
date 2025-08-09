import React from "react";
import "./CategoryGrid.css";

import study from "../assets/icons/A_vector_icon_in_black_and_white_depicts_a_certifi.png";
import id from "../assets/icons/A_black_and_white_vector_icon_depicts_an_identific.png";
import property from "../assets/icons/A_vector_graphic_icon_in_black_and_white_features_.png";
import other from "../assets/icons/A_vector_icon_in_black_and_white_depicts_a_documen.png";

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
