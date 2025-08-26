import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
function Home (){
    return(
        <>
            {/* <WelcomePopup /> Regionals 2025, no longer needed */}
            <HeroSection />
            <Cards />
        </>
    )
}

export default Home;