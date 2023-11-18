import React, { useState } from 'react';
import TopNav from '../components/TopNav'
import '../styles/HomeRoute.scss';

const HomeRoute = ({ photos, topics, setIsModalOpen, handlePhotoClick, likes, toggleLike }) => {
  return (
    <div className="home-route">
      <TopNav/>
    </div>
  );
};

export default HomeRoute;
