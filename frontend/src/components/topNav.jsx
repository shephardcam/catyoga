import React from 'react';
import './styles/TopNavBar.scss';

const TopNav = () => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">CatYoga</span>
      <nav className="top-nav-bar__nav">
        <div className="nav-item">About</div>
        <div className="nav-item">FAQ</div>
        <div className="nav-item">Profile</div>
        <div className="nav-item">December2023</div>
      </nav>
    </div>
  );
};

export default TopNav;