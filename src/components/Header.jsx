import React from "react";
import "./Header.css";
import logo from "../icons/snapdocs-logo.png"; // put your logo here (see step 4)

export default function Header() {
  return (
    <header className="sd-header">
      <div className="sd-header__spacer" />
      <div className="sd-header__right">
        <div className="sd-brand">
          <img src={logo} alt="SnapDocs logo" className="sd-brand__logo" />
          <span className="sd-brand__name">SnapDocs</span>
        </div>

        <nav className="sd-nav">
          <a className="sd-btn sd-btn--ghost" href="/login">Login</a>
          <a className="sd-btn sd-btn--primary" href="/signup">Sign up</a>
        </nav>
      </div>
    </header>
  );
}
