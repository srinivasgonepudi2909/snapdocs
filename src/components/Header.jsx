import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="sd-header">
      {/* Left side brand removed */}
      <div></div> 

      {/* Right side navigation */}
      <div className="sd-nav-right">
        <a href="/login" className="sd-btn sd-btn--blue-outline">Login</a>
        <a href="/signup" className="sd-btn sd-btn--blue">Sign Up</a>
      </div>
    </header>
  );
}
