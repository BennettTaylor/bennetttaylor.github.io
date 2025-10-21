import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 mt-auto">
      <div className="container mx-auto text-center px-4 lg:px-100">
        <p className="tinos-400 text-sm">
          © {new Date().getFullYear()} Bennett Taylor. All rights reserved.
        </p>
        <div className="flex justify-center space-x-3 sm:space-x-4 mt-2">
          <a href="https://github.com/bennetttaylor" target="_blank" rel="noopener noreferrer" className="text-white tinos-400 text-bold text-xs sm:text-sm hover:text-lightgreen">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/bennettetaylor/" target="_blank" rel="noopener noreferrer" className="text-white tinos-400 text-bold text-xs sm:text-sm hover:text-lightgreen">
            LinkedIn
          </a>
          <a href="mailto:betaylor83@gmail.com" className="text-white tinos-400 text-bold text-xs sm:text-sm hover:text-lightgreen">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;