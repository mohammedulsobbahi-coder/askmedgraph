import React from 'react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 to-blue-500 rounded-lg p-2 lg:p-3 mb-4 text-white animate-fade-in">
      <div className="flex items-center justify-between">
        <div className="flex items-center m-1">
          {/* Logo */}
          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-lg mr-2 lg:mr-4 flex items-center justify-center">
            <img
              src="https://raw.githubusercontent.com/mohammdsobbahi2001/image-hosting/main/QA.png"
              alt="AskMedGraph Logo"
              width="70"
              height="70"
            />
          </div>

          {/* Title */}
          <div>
            <h1 className="text-lg lg:text-2xl font-bold">AskMedGraph</h1>
            <p className="text-blue-100 text-xs lg:text-sm mt-0.5">
              Healthcare Knowledge Graph Q&A
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
