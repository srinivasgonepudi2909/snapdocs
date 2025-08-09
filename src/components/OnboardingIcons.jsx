import React from "react";
import "./OnboardingIcons.css";

import studyIcon from "../assets/icons/study-certificate.png";
import idIcon from "../assets/icons/id.png";
import propertyIcon from "../assets/icons/property.png";
import otherIcon from "../assets/icons/Docs.png";

export default function OnboardingIcons() {
  const icons = [
    { src: studyIcon, label: "Study Certificate" },
    { src: idIcon, label: "ID" },
    { src: propertyIcon, label: "Property" },
    { src: otherIcon, label: "Other" }
  ];

  return (
    <div className="onboarding-container">
      {icons.map((icon, i) => (
        <div className="icon-box" key={i}>
          <img src={icon.src} alt={icon.label} className="icon-img" />
          <div className="icon-label">{icon.label}</div>
        </div>
      ))}
    </div>
  );
}
