import React from 'react';
import { Link } from 'react-router-dom';

function RushOver() {
    return (
        <div className="RushOverPage">
            {/* Background overlay with red gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-thetaTauRed/90 to-thetaTauRed/70 z-[1]"></div>
            
            {/* Content */}
            <div className="relative z-[2] flex flex-col items-center justify-center h-full text-center px-4 py-16">
                {/* Main heading with underline effect */}
                <h1 className="text-white text-5xl md:text-7xl font-bold mb-4">
                    Rush has Concluded!
                    <div className="h-1 w-full bg-white mt-2"></div>
                </h1>

                {/* Subheading */}
                <p className="text-white text-xl md:text-2xl mb-12">
                    Check back near the beginning of next semester!
                </p>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                    <Link to="/contact" 
                        className="px-8 py-3 bg-thetaTauRed text-thetaTauGold border-2 border-thetaTauGold rounded-lg 
                                 hover:bg-thetaTauGold hover:text-thetaTauRed transition-all duration-300 
                                 text-lg font-semibold min-w-[200px]">
                        Contact Page
                    </Link>
                    <Link to="/merc" 
                        className="px-8 py-3 bg-thetaTauRed text-thetaTauGold border-2 border-thetaTauGold rounded-lg 
                                 hover:bg-thetaTauGold hover:text-thetaTauRed transition-all duration-300 
                                 text-lg font-semibold min-w-[200px]">
                        Merc Council Page
                    </Link>
                    <Link to="/about" 
                        className="px-8 py-3 bg-thetaTauRed text-thetaTauGold border-2 border-thetaTauGold rounded-lg 
                                 hover:bg-thetaTauGold hover:text-thetaTauRed transition-all duration-300 
                                 text-lg font-semibold min-w-[200px]">
                        About Page
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default RushOver; 