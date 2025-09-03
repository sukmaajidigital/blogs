// src/app/components/Footer.tsx
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Ikon solid untuk logo
import { faCode } from "@fortawesome/free-solid-svg-icons";

// Ikon brand untuk sosial media
import { faGithub, faLinkedin, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-gray-100 border-t border-gray-200 dark:bg-gray-900 dark:border-gray-900">
      <div className="container mx-auto px-6 text-center">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold flex items-center justify-center text-black hover:opacity-80 transition-opacity dark:text-white"
        >
          <div className="bg-gradient-to-r from-gray-600 to-gray-400 p-2 rounded-lg mr-3 dark:from-accent dark:to-accent-light">
            <FontAwesomeIcon icon={faCode} className="text-white" />
          </div>
          <span>
            Sukma<span className="text-accent">Aji</span>Digital
          </span>
        </Link>

        {/* Bio Singkat */}
        <p className="text-gray-700 mt-4 max-w-2xl mx-auto dark:text-slate-300">
          Seorang mahasiswa Sistem Informasi yang berfokus pada pembuatan aplikasi web yang efisien,
          skalabel, dan user-friendly.
        </p>

        {/* Ikon Sosial Media */}
        <div className="flex justify-center space-x-6 my-6">
          <a
            href="https://github.com/sukmaajidigital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-accent text-2xl transition-all dark:text-slate-300 dark:hover:text-accent"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a
            href="https://www.linkedin.com/in/sukma-aji-08b470286/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-accent text-2xl transition-all dark:text-slate-300 dark:hover:text-accent"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://instagram.com/sukmaaji.digital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-accent text-2xl transition-all dark:text-slate-300 dark:hover:text-accent"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a
            href="https://x.com/sukmaajidigital"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-accent text-2xl transition-all dark:text-slate-300 dark:hover:text-accent"
            aria-label="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>

        {/* Hak Cipta */}
        <p className="text-sm text-gray-700 dark:text-slate-300">
          &copy; {currentYear} Muhammad Aji Sukma. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
