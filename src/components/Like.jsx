import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/Group 180.png";
import release2 from "../assets/Group 181.png";
import release from "../assets/unnamed (1).png";
import Card from "./Card";

export default function Like() {
  return (
    <div className="releases">
      <div className="release orange">
        <div className="image">
          <img src={release1} alt="release" />
          <div className="ellipse pink"></div>
        </div>
        <div className="content">
          <h2 className="title">Meet Our Founding Team</h2>

          <p className="description">
            10+ years of experience in the hospitality/entertainment industry
            The latest venture is currently in Ycombinator’s Winter ‘22 Class BA
            in Finance, loves to stay fit, travel, & live life to the fullest.
          </p>
        </div>
      </div>
      <div className="release orange">
        <div className="content">
          <h2 className="title">Meet Our Founding Team</h2>

          <p className="description">
            Hospitality Tech Founder + Crypto/Web3 Investor Holder of BAYC,
            MAYC, Meebits, & more Avid golfer
          </p>
        </div>
        <div className="image">
          <img src={release2} alt="release" />
          <div className="ellipse pink"></div>
        </div>
      </div>
      <div className="release orange">
        <div className="image">
          <img src={release} alt="release" />
          <div className="ellipse pink"></div>
        </div>
        <div className="content">
          <h2 className="title">Meet Our Founding Team</h2>

          <p className="description">
            https://www.artstation.com/vaxopipia
            https://www.artstation.com/dazdud
            https://www.artstation.com/bachibacho
          </p>
        </div>
      </div>
    </div>
  );
}
