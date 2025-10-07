import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto text-center px-100">
        <p className="chicle-regular text-sm">
          © {new Date().getFullYear()} Bennett Taylor. All rights reserved.
        </p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="https://github.com/bennetttaylor" target="_blank" rel="noopener noreferrer" className="text-white chicle-regular text-bold hover:text-lightgreen">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/bennettetaylor/" target="_blank" rel="noopener noreferrer" className="text-white chicle-regular text-bold hover:text-lightgreen">
            LinkedIn
          </a>
          <a href="mailto:betaylor83@gmail.com" className="text-white chicle-regular text-bold hover:text-lightgreen">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;