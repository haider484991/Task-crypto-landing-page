import React from "react";
import "../sass/sections/_signup.scss";
import photo from "../assets/Group 142.png";
export default function Signup() {
  return (
    <div className="signup">
      <div className="container">
        <div className="image-container">
          <div className="image">
            <img src={photo} alt="home image" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
        <div className="content">
          <h1 className="title">The 777 Club</h1>
          <p className="description">
            We are the 777Club, a global collective of like-minded individuals
            with a DeFi lifestyle who appreciate access to the finest things in
            life. We have a lot planned. The wildest events, real-world benefits
            like none-other, a metaverse social club, connections to new
            business opportunities, and a ton more. Our NFT collection is a
            launchpad to the best things in life and we want to give you the
            chance to share it with us. Getting in early on the 777Club will
            give you more benefits, more utility, and more opportunities to
            enhance your lifestyle.
          </p>
          <button>Connect Wallet</button>
        </div>
      </div>
    </div>
  );
}
