import React from 'react';
import './styles/TopNavBar.scss';
import { Link } from 'react-router-dom';

const TopNav = ({ user, onLogout}) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo"> <Link to='/homepage'>CatYoga</Link> </span>
      <nav className="top-nav-bar__nav">
        <div className="nav-item" ><Link to='/about'>About</Link></div>
        <div className="nav-item"><Link to='/FAQ'>FAQ</Link></div>
        {user ? (
          <>
            <div className="nav-item"><Link to='/profile'>Profile</Link></div>
            <div className="nav-item"><button onClick={onLogout}>Logout</button></div>
          </>
        ) : (
          <div className="nav-item"><Link to='/login'>Login</Link></div>
        )}
        {/* <div className="nav-item"><Link to='/yoga-class-info'>December2023</Link></div> */}
      </nav>
    </div>
  );
};

export default TopNav;