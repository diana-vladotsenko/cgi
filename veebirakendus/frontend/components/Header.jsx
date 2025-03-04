/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link href="/" className="logo-link">
          <img className="logo-img" src="/images/logo.jpg" alt="logo" />
          <p>CutyeStickers</p>
        </Link>
      </div>
      <ul id="nav" className="nav">
        <li><Link href="/" className="tapped-nav-link">Home</Link></li>
        <li><Link href="/#products" className="nav-link">Products</Link></li>
        <li><Link href="/#about" className="nav-link">About</Link></li>
        <li><Link href="/#contacts" className="nav-link">Contacts</Link></li>
      </ul>
    </header>
  );
};

export default Header;
