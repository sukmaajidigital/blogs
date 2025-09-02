// src/app/components/Header.tsx
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold hover:text-gray-300">
          MyBlog
        </Link>
        <div>
          <Link href="/" className="px-3 py-2 rounded hover:bg-gray-700">
            Home
          </Link>
          {/* Tambahkan link lain di sini jika perlu */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
