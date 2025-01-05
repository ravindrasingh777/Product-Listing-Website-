import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-700 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; 2025 ShopMate. All rights reserved.</p>
          <div className="flex justify-center space-x-4 mt-4">
            <a href="#" className="text-blue-400 hover:text-white">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;
