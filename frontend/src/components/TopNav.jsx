import React, { useState, useEffect } from 'react';
import './styles/TopNavBar.scss';
import { Link } from 'react-router-dom';
import { Button } from './Button';

const TopNav = ({ user }) => {

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
  },[])

  window.addEventListener('resize', showButton)

  return (
    <>
    <nav className="topNav">
      <div className="topNav-container">
        <Link to="/" className='topNav-logo' onClick={closeMobileMenu}>CATYOGA <i className="fa-solid fa-cat"/></Link>
      <div className='menu-icon' onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars'}/></div>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
        <li className='nav-item'><Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link></li>
        <li className='nav-item'><Link to='/about' className='nav-links' onClick={closeMobileMenu}>About</Link></li>
        <li className='nav-item'><Link to='/FAQ' className='nav-links' onClick={closeMobileMenu}>FAQ</Link></li>
       
        {/* Handles display if user logged in */}
        {user ? (
          // if user logged in
          <>
            <li className='nav-item'><Link to='/profile' className='nav-links' onClick={closeMobileMenu}>Profile</Link></li>
          </>
        ) : (
          //  if user not logged in
          <div className="nav-item"><Link to='/login' className='nav-links' onClick={closeMobileMenu}>Login</Link></div>
          )}
          <li><Link to='/yoga-class-info' className='nav-links-mobile' onClick={closeMobileMenu}>Book Now</Link></li>
      </ul>

      {button && <Button className="btn--outline" buttonStyle='btn--outline'>Book Now</Button>}
      {/* {button && <Button className="btn--outline" buttonStyle='btn--outline'>Login</Button>} */}
      </div>
    </nav>
    </>
  );
};

export default TopNav;
