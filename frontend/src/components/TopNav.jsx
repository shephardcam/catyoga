import React from 'react';
import './styles/TopNavBar.scss';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo"> <Link to='/homepage'>CatYoga</Link> </span>
      <nav className="top-nav-bar__nav">
        <div className="nav-item" ><Link to='/about'>About</Link></div>
        <div className="nav-item"><Link to='/FAQ'>FAQ</Link></div>
        <div className="nav-item"><Link to='/Profile'>Profile</Link></div>
        <div className="nav-item"><Link to='/yoga-classes'>December2023</Link></div>
      </nav>
    </div>
  );
};

export default TopNav;