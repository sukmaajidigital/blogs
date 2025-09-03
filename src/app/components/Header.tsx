// src/app/components/Header.tsx
"use client"; // <-- Tambahkan ini untuk menggunakan hook seperti useState

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // State untuk mengontrol visibilitas menu mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 bg-dark-300/90 backdrop-blur-md border-b border-dark-100">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dan Nama Brand */}
        <Link
          href="/"
          className="text-xl font-bold flex items-center text-white hover:opacity-80 transition-opacity"
        >
          <div className="bg-gradient-to-r from-accent to-accent-light p-2 rounded-lg mr-3">
            <FontAwesomeIcon icon={faCode} className="text-white" />
          </div>
          <span>
            Sukma<span className="text-accent">Aji</span>Digital
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="https://sukmaaji.my.id/"
            className="text-slate-dark hover:text-white transition"
          >
            Homepage
          </Link>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-xl bg-dark-200 p-2 rounded-lg text-slate-light"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />
        </button>
      </nav>

      {/* Tampilan Menu Mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-dark-200 border-t border-dark-100 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <Link
            href="https://sukmaaji.my.id/"
            className="py-2 text-slate-dark hover:text-white transition"
            onClick={toggleMobileMenu}
          >
            Homepage
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
