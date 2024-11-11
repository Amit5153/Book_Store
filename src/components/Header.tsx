import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-800 p-4 text-white flex justify-between items-center">
      <div className="flex items-center">
        <img src="image/logo.png" alt="Logo" className="h-10 mr-3" />
        <h1 className="text-xl font-bold"></h1>
      </div>
      <nav className="flex space-x-6 text-sm">
        <a href="#" className="text-white hover:text-gray-200">Bookkeeping</a>
        <a href="#" className="text-white hover:text-gray-200">White Label Bookkeeping</a>
        <a href="#" className="text-white hover:text-gray-200">Catchup Bookkeeping</a>
        <a href="#" className="text-white hover:text-gray-200">Pricing</a>
        <a href="#" className="text-white hover:text-gray-200">Blog</a>
      </nav>
      <div className="flex items-center space-x-4 text-sm">
        <span>1-800-583-0148</span>
        <img src="image/bbb2.png" alt="BBB Logo" className="h-8" />
        <button className="bg-blue-700 px-4 py-1 rounded hover:bg-blue-600">Member</button>
      </div>
    </header>
  );
};


export default Header;
