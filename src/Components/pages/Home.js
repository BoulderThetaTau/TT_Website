import React from 'react';
import '../../App.css';
import '../../fonts.css';
import './pagesCSS/Home.css';
import TTGearLogo from '../../assets/images/TT-Gear-RGW.svg';
import FlatironSunset from '../../assets/images/Flatiron-Sunset-cropped.svg';

function Home() {
    return (
        <>
            {/* Hero Section */}
            <section className="hero-section" style={{backgroundImage: `url(${FlatironSunset})`}}>
                <div className="hero-content">
                    <div className="hero-text">
                        <h1 className="hero-title">THETA TAU</h1>
                        <h2 className="hero-subtitle">ETA GAMMA CHAPTER</h2>
                        <p className="hero-description">UNIVERSITY OF COLORADO BOULDER</p>
                    </div>
                    <div className="hero-menu">
                        <button className="menu-toggle">MENU</button>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">ABOUT US</h2>
                        <p className="section-description">
                            Theta Tau is the oldest, largest, and foremost Fraternity for Engineers. Since its founding at the University of Minnesota in 1904, over 40,000 brothers have been initiated over the years. With emphasis on quality and a strong fraternal bond, the Fraternity has chapters only at ABET (American Board for Engineering & Technology) accredited schools. The Eta Gamma chapter of the Theta Tau Fraternity that was established in the Spring of 1997. We are based at the University of Colorado - Boulder creating a diverse home for all engineers.
                        </p>
                    </div>
                    <div className="about-logo">
                        <img src={TTGearLogo} alt="Theta Tau Gear Logo" className="gear-logo" />
                    </div>
                </div>
                <div className="about-images">
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                    <div className="image-placeholder"></div>
                </div>
                <div className="about-menu">
                    <button className="menu-toggle">MENU</button>
                </div>
            </section>

            {/* Community Stats Section */}
            <section className="community-section">
                <div className="community-content">
                    <h2 className="section-title community-title">OUR COMMUNITY</h2>
                    <div className="stats-container">
                        <div className="stat-item">
                            <div className="stat-number">483</div>
                            <div className="stat-label">members</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">15</div>
                            <div className="stat-label">different majors</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">3.2+</div>
                            <div className="stat-label">average gpa</div>
                        </div>
                    </div>
                </div>
                <div className="community-menu">
                    <button className="menu-toggle">MENU</button>
                </div>
            </section>

            {/* Alumni Section */}
            <section className="alumni-section">
                <div className="alumni-content">
                    <h2 className="section-title alumni-title">OUR ALUMNI</h2>
                    <div className="alumni-carousel">
                        <button className="carousel-arrow carousel-prev">&lt;</button>
                        <div className="alumni-images">
                            <div className="image-placeholder"></div>
                            <div className="image-placeholder"></div>
                            <div className="image-placeholder"></div>
                        </div>
                        <button className="carousel-arrow carousel-next">&gt;</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;