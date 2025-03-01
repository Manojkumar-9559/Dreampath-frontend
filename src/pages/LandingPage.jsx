import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import { Link } from "react-router-dom";


const LandingPage = () => {
  return (
    <div className="landing-container bg-info d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        {/* Logo Animation */}
        <Zoom duration={2000}>
          <img src="/assets/DreamPath-modified.png" alt="DreamPath Logo" className="logo" />
        </Zoom>

        {/* Text Animation */}
        <Slide direction="down">
          <h1 className="animated-text">WELCOME TO DREAMPATH</h1>
        </Slide>

        {/* Button Fade-In */}
        <Fade delay={700}>     

<Link to="/home" className="btn bg-dark text-white mt-3">
  Get Started
</Link>

        </Fade>
      </div>
    </div>
  );
};

export default LandingPage;
