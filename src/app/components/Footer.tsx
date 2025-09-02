// src/app/components/Footer.tsx
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {currentYear} MyBlog. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
