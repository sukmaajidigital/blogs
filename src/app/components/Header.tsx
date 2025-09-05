// src/app/components/Header.tsx
"use client"; // <-- Tambahkan ini untuk menggunakan hook seperti useState

import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // State untuk mengontrol visibilitas menu mobile
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Fungsi untuk toggle menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed w-full z-50 border-b backdrop-blur-md bg-white/90 border-gray-200 dark:bg-gray-950/90 dark:border-gray-900">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo dan Nama Brand */}
        <Link
          href="/"
          className="text-xl font-bold flex items-center text-black hover:opacity-80 transition-opacity dark:text-white"
        >
          <div className="bg-gradient-to-r from-gray-600 to-gray-400 p-2 rounded-lg mr-3 dark:from-accent dark:to-accent-light">
            <FontAwesomeIcon icon={solidIcons.faCode} className="text-white" />
          </div>
          <span>
            Sukma<span className="text-accent">Aji</span>Digital
          </span>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <Link
            href="/"
            className="text-blue-950 hover:text-blue-600 transition dark:text-slate-300 dark:hover:text-white bg-blue-300 px-3 py-2 rounded-lg shadow-md hover:shadow-lg"
          >
            Blog
          </Link>
          <Link
            href="https://sukmaaji.my.id/"
            className="text-blue-950 hover:text-blue-600 transition dark:text-slate-300 dark:hover:text-white bg-blue-300 px-3 py-2 rounded-lg shadow-md hover:shadow-lg"
          >
            Homepage
          </Link>
        </div>

        {/* Tombol Menu Mobile */}
        <button
          id="mobile-menu-button"
          className="md:hidden text-xl bg-gray-100 p-2 rounded-lg text-gray-700 dark:bg-gray-900 dark:text-slate-200"
          onClick={toggleMobileMenu}
        >
          <FontAwesomeIcon icon={isMobileMenuOpen ? solidIcons.faTimes : solidIcons.faBars} />
        </button>
      </nav>

      {/* Tampilan Menu Mobile */}
      <div
        id="mobile-menu"
        className={`md:hidden bg-gray-100 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-800 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <Link
            href="https://sukmaaji.my.id/"
            className="py-2 text-gray-700 hover:text-black transition dark:text-slate-300 dark:hover:text-white"
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
