import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
              <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                <i className='logo' /> ETA GAMMA
              </Link>
              <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
              </div>
              <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                {/* Want to add this component for buttons, but complete on another branch
                transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-red-800 */}
                <li className='nav-item'>
                  <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/comm-serve' className='nav-links' onClick={closeMobileMenu}>
                    Community Service
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/brotherhood' className='nav-links' onClick={closeMobileMenu}>
                    Brotherhood
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link to='/prof-def' className='nav-links' onClick={closeMobileMenu}>
                    Professional Development
                  </Link>
                </li>
                {/* Will need to figure out due to formatting is messed up for this button (grid issue) */}
                {/* <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                      Contact Us
                    </Link>
                  </li> */}
              </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
