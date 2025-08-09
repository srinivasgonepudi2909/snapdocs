import React from "react";
import "./Header.css";
import logo from "../assets/icons/snapdocs-logo.png";

export default function Header() {
  return (
    <header className="sd-header">
      {/* Left side: Logo + App name */}
      <div className="sd-brand">
        <img src={logo} alt="SnapDocs logo" className="sd-brand__logo" />
        <span className="sd-brand__name">SnapDocs</span>
      </div>

      {/* Right side: Login & Sign Up */}
      <nav className="sd-nav-right">
        <a className="sd-btn sd-btn--blue-outline" href="/login">Login</a>
        <a className="sd-btn sd-btn--blue" href="/signup">Sign up</a>
      </nav>
    </header>
  );
}
