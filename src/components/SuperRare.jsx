import React from "react";
import group1 from "../assets/Group 100.png";
import group2 from "../assets/Group 101.png";
import group3 from "../assets/Group 102.png";
export default function SuperRare() {
  return (
    <div className="super-rare">
      <div className="title-container">
        <h2 className="title">Sneak Peak</h2>
      </div>
      <div className="gallery__wrapper">
        <div className="img_wrapper">
          <img className="item1" src={group1} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group2} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group3} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group3} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group1} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group2} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group1} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group2} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group3} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group1} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group2} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group3} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group3} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group1} alt="home image" />
        </div>
        <div className="img_wrapper">
          <img src={group2} alt="home image" />
        </div>
      </div>
    </div>
  );
}
