import React from "react";
import group1 from "../assets/Group 100.png";
import group2 from "../assets/Group 101.png";
import group3 from "../assets/Group 102.png";
export default function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="content">
          <h1 className="title">
            777 Clubhouse
            <br />
            Founders
            <br />
            Collection
          </h1>
          <p className="description">Elivate your lifestyle</p>
          <button>CONNECT WALLET</button>
        </div>
        <div className="image-container">
          <div className="image">
            <div className="grid-container">
              <div className="grid-item">
                <img src={group1} alt="home image" />
              </div>
              <div className="grid-item">
                <img src={group2} alt="home image" />
              </div>
              <div className="grid-item">
                <img src={group3} alt="home image" />
              </div>
              <div className="grid-item">
                <img src={group3} alt="home image" />
              </div>
              <div className="grid-item">
                <img src={group1} alt="home image" />
              </div>
              <div className="grid-item">
                <img src={group2} alt="home image" />
              </div>
              <div className="grid-item">
                <img src={group1} alt="home image" />
              </div>
              <div className="grid-item">
                <img src={group2} alt="home image" />
              </div>
              <div className="grid-item">
                <img src={group3} alt="home image" />
              </div>
            </div>
          </div>

          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
