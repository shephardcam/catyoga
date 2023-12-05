import React from 'react';
import '../styles/AboutPage.scss';


const AboutPage = () => {
  return (
    <>
    <div className='about-container' >
       <h1>Welcome to CatYoga<i className="fa-solid fa-cat" /></h1>
      <h2>Where Mindfulness Meets Whiskers!</h2>
      <video src="/videos/video-3.mp4" autoPlay loop muted />
      
    </div>

<div className='second-container'>
   

<h3><u>About Us</u> </h3>
<h4>At CatYoga, we believe in the harmony of companionship and the art of yoga. <br/> Nestled in the heart of the community, our studio is a sanctuary where you can stretch, strengthen, and unwind alongside our friendly feline guides. </h4>

<h5>Our Philosophy: </h5>
  <li>
  Our journey began with a simple idea: to create a space where yoga's tranquility meets the playful charm of cats. Our philosophy intertwines the mindfulness of yoga with the calming purrs of cats, fostering a unique experience that nurtures the soul and brings joy to the heart.
  </li>

  <h5>Our Space: </h5>
  <li>
Our studio is a purr-fect retreat designed with your comfort and relaxation in mind. Soothing colors, and gentle lighting set the stage for a truly zen experience. And, of course, our cats are always ready to join in, offering cuddles and companionship as you flow through your practice.
  </li>

  <h5>Our Community: </h5>
  <li>
CatYoga is more than just a yoga studio; it's a community. We are a diverse group of yogis, cat enthusiasts, and those seeking a moment of peace in their busy lives. Our doors are open to all, whether you're an experienced yogi or trying yoga for the first time.
</li>

<h5> Our Promise: </h5>
<li>
To provide a safe, joyful, and inclusive environment where you can practice yoga and enjoy the company of our affectionate cats. We are committed to the well-being of our feline friends, working closely with local shelters to ensure they live happily and healthily.
</li>

<h6><u>Join Us:</u></h6>
<p>
We invite you to roll out a mat, breathe in positivity, and embrace the gentle purr of companionship. Whether you come for the cats, the yoga, or the warm embrace of community, you'll leave with a lighter heart and a renewed spirit.

Come for the yoga, stay for the purrs.
</p>

</div>
    
    </>
  );
};

export default AboutPage;


