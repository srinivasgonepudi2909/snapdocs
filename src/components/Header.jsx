import React from "react";
import "./Header.css";
import logo from "../assets/icons/snapdocs-logo.png";

export default function Header() {
  return (
    <header className="sd-header">
      {/* Left side: Logo + App name */}
      <a href="/" className="sd-brand" aria-label="SnapDocs Home">
        <img src={logo} alt="SnapDocs logo" className="sd-brand__logo" />
        <span className="sd-brand__name">SnapDocs</span>
      </a>

      {/* Right side: Navigation */}
      <nav className="sd-nav-right" aria-label="Main navigation">
        <a className="sd-btn sd-btn--blue-outline" href="/login">
          Login
        </a>
        <a className="sd-btn sd-btn--blue" href="/signup">
          Sign up
        </a>
      </nav>
    </header>
  );
}
