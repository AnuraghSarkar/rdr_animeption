import React from "react";
import tc4 from "../images/zo3.jpg";
import tc5 from "../images/zo4.jpg";
import tc6 from "../images/zo5.jpg";

const Cards = () => {
  return (
    <>
      <section className="cards container">
        <div className="cards__1">
          <img src={tc4} alt="tc4" />
          <div className="text">
            <h3>Best VR experience</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit debitis praesentium eaque, aperiam recusandae eum earum, omnis ipsam mollitia, sed quo reiciendis adipisci amet. Asperiores?
            </p>
          </div>
        </div>

        <div className="cards__2">
          <img src={tc5} alt="tc4" />
          <div className="text">
            <h3>Long story</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nostrum esse cum quas totam, cumque aliquid? Saepe temporibus eius, harum ipsum illum fuga non nemo!
            </p>
          </div>
        </div>

        <div className="cards__3">
          <img src={tc6} alt="tc4" />
          <div className="text">
            <h3>Weekly updates</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi voluptatem omnis cumque molestiae itaque sunt. Similique ipsa animi sed quis reiciendis. Illum incidunt magni officia.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
