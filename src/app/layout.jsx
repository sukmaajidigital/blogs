// src/app/layout.jsx
import { Inter } from "next/font/google";
import "./styles/globals.css";
// import Header from './components/Header';
// import Footer from './components/Footer';

const inter = Inter({ subsets: ["latin"] });

// SEO Metadata Default
export const metadata = {
  title: "My Awesome Blog - By John Doe",
  description: "A blog about web development and technology.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://your-github-username.github.io/my-blog/", // Ganti dengan URL Anda
    siteName: "My Awesome Blog",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
