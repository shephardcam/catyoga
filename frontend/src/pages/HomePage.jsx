import React from "react";
import '../App.scss';
import "../styles/HomePage.scss";
import { Button } from "../components/Button";

const HomePage = () => {
  return (
    <div className="cat-container">
      {/* <video src="/videos/video-1.0.mp4" autoPlay loop muted /> */}
      <h1>RELAXATION AWAITS</h1>
      <p>"Unwind and rejuvenate, <br/> with a delightful yoga session accompanied by playful cats, <br/> a perfect blend to soothe your body and mind!" <i className="fa-solid fa-cat"/></p>

      <div className="cat-btns">
        <Button 
        className='btns' 
        buttonStyle='btn--outline'
        buttonSize='btn--large'> 
        Book Now</Button>

      </div>
     
     
      {/* <img className="catSleep" src={`${process.env.PUBLIC_URL} /images/catSleep.ipeg`} />
      <img src={`${process.env.PUBLIC_URL} /images/cat yoga pose.webp`} />
      <img src={`${process.env.PUBLIC_URL} /images/cat yoga.jpeg`} />
      <img src={`${process.env.PUBLIC_URL} /images/cat.jpeg`} />      */}


     
    </div>
  );
};

export default HomePage;

