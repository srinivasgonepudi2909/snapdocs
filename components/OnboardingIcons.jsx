import React from 'react';
import uploadIcon from '../assets/icons/upload.png';
import secureIcon from '../assets/icons/secure.svg';
import shareIcon from '../assets/icons/share.svg';
import './OnboardingIcons.css';

const OnboardingIcons = () => {
  const steps = [
    { icon: uploadIcon, alt: 'Upload' },
    { icon: secureIcon, alt: 'Secure' },
    { icon: shareIcon, alt: 'Share' },
  ];

  return (
    <div className="onboarding-container">
      {steps.map((step, index) => (
        <div
          key={index}
          className="icon-box fade-in"
          style={{ '--i': index }}
        >
          <img src={step.icon} alt={step.alt} className="icon-img" />
          <div className="icon-label">{step.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default OnboardingIcons;
