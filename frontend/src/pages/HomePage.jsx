import React from "react";
import "../App.scss";
import "../styles/HomePage.scss";
import { Button } from "../components/Button";
import Cards from "../components/Cards";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <>
      <div className="cat-container">
        <video src="/videos/video-2.mp4" autoPlay loop muted />
        {/* <img src={`${process.env.PUBLIC_URL} /images/image-1.png`} /> */}
        <h1>RELAXATION AWAITS</h1>
        <p>
          "Unwind and rejuvenate <br /> with a delightful yoga session
          accompanied by playful cats <br /> a perfect blend to soothe your
          body and mind!" <i className="fa-solid fa-cat" />
        </p>

        <div className="cat-btns">
          <Button
            className="btn"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Book Now <i className="fa-solid fa-cat" />
          </Button>
        </div>

    </div>

    <Cards />
    <Footer />
    </>
  );
};

export default HomePage;
