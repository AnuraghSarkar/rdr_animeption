import React from "react";
import psVR from "../images/psVR.png";
import oculus from "../images/oculus.jpg";
import steamVR from "../images/steamVR.png";

const About = ({ onCursor }) => {
  return (
    <>
      <section className="about">
        <div className="about__logo container">
          <img src={psVR} alt="psVR" />
          <img src={oculus} alt="oculus" />
          <img src={steamVR} alt="steamVR" />
        </div>
        <div className="about__text container">
          <p>
            Red Dead Animeption is the VR game that has multiple-choice decision
            points as well as more than one ending adapted into anime version
            with the inspiration from Read Dead Redemption series. It has a long
            story you’ve never experienced before with VR. Arthur must deal with
            the decline of the Wild West whilst attempting to survive against
            government forces, rival gangs, and other adversaries. The game's
            epilogue follows fellow gang member Ronoroa Zoro, the protagonist of
            Red Dead Redemption.
          </p>
          <button
            className="btn"
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={onCursor}
          >
            read more
          </button>
        </div>
      </section>
    </>
  );
};

export default About;
