import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import WelcomePopup from '../modules/WelcomePopup';
function Home (){
    return(
        <>
            {/* <WelcomePopup /> */}
            <HeroSection />
            <Cards />
        </>
    )
}

export default Home;