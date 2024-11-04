import React from 'react';
import { Button } from './Button';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-links'>
        <div className='footer-link-wrapper' style={{gap: '5px'}}>
          <div className='footer-link-items footer-logo'>
            <img src='../public/images/ThetaTauLogo.png'></img>
          </div>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='/'>How it Works</Link>
                <Link to='/'>Mercury Council</Link>
                <Link to='/'>Alumni</Link>
                <Link to='/'>Our Three Pillars</Link>
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
                    <Link to='/'>Contact</Link>
                    <Link to='https://www.instagram.com/boulderthetatau?igsh=eGpweWNub3dpc2I0' target='_blank'>Instagram</Link>
                    <Link to='https://thetatau.org/' target='_blank'>National Theta Tau</Link>
                    <Link to='mailto:central.office@thetatau.org' className='email-link'>central.office@thetatau.org</Link>
            </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
            <small className="website-rights">THETA TAU 2024</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                    <i className="fab fa-facebook-f"></i>
                </Link>
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
                <Link className="social-icon-link youtube"
                to='/'
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
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer
