import React from 'react';
import '../styles/AboutPage.scss';
import Content from '../components/Content';

const AboutPage = () => {
  return (
    <div className='cat-container' >
      <video src="/videos/video-3.mp4" autoPlay loop muted />
   
      <Content /> 
      
    </div>
  );
};

export default AboutPage;


