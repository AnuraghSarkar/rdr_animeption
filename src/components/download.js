import React from "react";
import tc7 from "../images/zo7.jpg";
import tc8 from "../images/zo8.jpg";
import download from "../images/down.jpg";
import downArrow from "../images/down-arrow.svg";

const Download = ({ onCursor }) => {
  return (
    <>
      <section className="download">
        <div className="container">
          <div className="download__trial">
            <div className="demo">
              <h2>TRIAL DEMO</h2>
              <button
                className="btn"
                onMouseLeave={onCursor}
                onMouseEnter={() => onCursor("hovered")}
              >
                Epic & steam
              </button>
            </div>
            <img src={tc7} alt="" />
          </div>
        </div>
        <div className="download__now">
          <div className="cta">
            <h1>download now</h1>
            <div className="cta__link">
              <img src={download} alt="download" />
              <img
                className="arrow"
                src={downArrow}
                alt=""
                onMouseLeave={onCursor}
                onMouseEnter={() => onCursor("hovered")}
              />
            </div>
          </div>
          <div className="img">
            <img src={tc8} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Download;
