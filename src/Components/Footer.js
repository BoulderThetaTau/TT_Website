import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

const particlesInit = async (main) => {
  // This loads the full tsParticles bundle
  await loadFull(main);
};

function Footer() {
  return (
    <div className='footer-container relative'>
      <Particles
        className="absolute inset-0 z-0" // Ensure it fills the parent
        id="tsparticles"
        init={particlesInit}
        options={{
          fullScreen:{
            enable: false
          },
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            links: { enable: true, color: "#ffffff", opacity: 0.50, distance: 125},
            move: { enable: true, speed: 2, out_mode: {default: "bounce"}},
            size: { value: 3 },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: {
              repulse: { distance: 100 },
              push: { quantity: 0 },
            },
          },
          detectRetina: true,
        }}
        style={{
          height: "100%", // Constrain to parent height
          width: "100%", // Constrain to parent width
        }}
      />
      <div className='footer-links z-10'>
        <div className='footer-link-wrapper' style={{gap: '5px'}}>
          <div className='footer-link-items footer-logo'>
            <img src='../public/images/ThetaTauLogo.png' alt='Theta Tau Logo'></img>
          </div>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/about'>About Us</Link>
                <Link to='/rush'>Rush</Link>
                <Link to='/merc'>Mercury Council</Link>
                {/* <Link to='/'>Alumni</Link> */}
                <Link to='/about#core-pillars'>Our Three Pillars</Link>
            </div>
            {/* Once we get more social media platforms, we can uncomment this out 
              <div className='footer-link-items'>
                <h2>Social Media</h2>
                    <Link to='https://www.instagram.com/boulderthetatau?igsh=eGpweWNub3dpc2I0' target='_blank'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
            </div> */}
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                    <Link to='/contact'>Contact</Link>
                    <Link to='https://www.instagram.com/boulderthetatau?igsh=eGpweWNub3dpc2I0' target='_blank'>Instagram</Link>
                    <Link to='https://thetatau.org/' target='_blank'>National Theta Tau</Link>
                    <Link to='mailto:central.office@thetatau.org' className='email-link'>central.office@thetatau.org</Link>
            </div>
            <div className='footer-link-items-socials'>
                <Link to='https://store.thetatau.org/' target='_blank' className='socials-items'>Theta Tau Shop</Link>
                <Link to='https://thetatau25.itemorder.com/' target='_blank' className='socials-items'>Chapter Shop</Link>
                <div className="social-icons">
                <Link className="social-icon-link instagram"
                to='https://www.instagram.com/boulderthetatau?igsh=eGpweWNub3dpc2I0'
                target='_blank'
                aria-label='Instagram'
                >
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link linkedin"
                to='https://www.linkedin.com/groups/12112612/'
                target='_blank'
                aria-label='Linkedin'
                >
                    <i className="fab fa-linkedin"></i>
                </Link>
              </div>
            </div>
        </div>
      </div>
      <section className="social-media z-10">
        <div className="social-media-wrap">
            <small className="website-rights">THETA TAU ETA GAMMA CHAPTER 2025</small>
            
            <div className="social-icons">
              {/* Once we have more social media sites, more of these can be enabled with their links 

                <Link className="social-icon-link instagram"
                to='https://www.instagram.com/boulderthetatau?igsh=eGpweWNub3dpc2I0'
                target='_blank'
                aria-label='Instagram'
                >
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link linkedin"
                to='/'
                target='_blank'
                aria-label='Linkedin'
                >
                    <i className="fab fa-linkedin"></i>
                </Link>
                

                <Link className="social-icon-link facebook"
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                    <i className="fab fa-facebook-f"></i>
                </Link>
                <Link className="social-icon-link youtube"
                to='https://www.linkedin.com/groups/12112612/'
                target='_blank'
                aria-label='YouTube'
                >
                    <i className="fab fa-youtube"></i>
                </Link>
                <Link className="social-icon-link twitter"
                to='/'
                target='_blank'
                aria-label='Twitter'
                >
                    <i className="fab fa-twitter"></i>
                </Link> */}
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
