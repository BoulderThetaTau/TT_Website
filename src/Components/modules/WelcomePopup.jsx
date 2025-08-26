import React, { useState, useEffect } from 'react';

function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [isClosing, setIsClosing] = useState(false);
  const [isOpening, setIsOpening] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsOpening(false);
    }, 100);
  }, []);

  const closePopup = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return isOpen ? (
    <div className={`fixed inset-0 bg-black transition-opacity duration-300 ease-in-out flex justify-center items-center z-50
      ${isOpening ? 'bg-opacity-0' : isClosing ? 'bg-opacity-0' : 'bg-opacity-50'}`}>
      <div className={`bg-white p-8 rounded-lg shadow-xl max-w-md w-full mx-4 relative 
        transform transition-all duration-300 ease-in-out
        ${isOpening ? 'opacity-0 scale-95' : isClosing ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold text-thetaTauRed mb-4">Spring 2025 Regional Conference</h2>
        <p className="text-gray-700 mb-4">
          This weekend, we're hosting the Spring 2025 Regional Conference! 
          You can find more information <a href="https://drive.google.com/file/d/1U42tsnTio3A_xuyYTKJ8cAPlc7YHPYTs/view?usp=sharing" className="text-thetaTauRed hover:text-thetaTauRed/80" target='_blank' rel='noreferrer'>here</a>.
        </p>
        <div className="flex justify-end">
          <button
            onClick={closePopup}
            className="bg-thetaTauRed text-white px-4 py-2 rounded hover:bg-red-900 transition-colors"
          >
            Got it!
          </button>
        </div>
      </div>
    </div>
  ) : null;
}

export default WelcomePopup;
