import React from "react";
import { BsArrowRight } from "react-icons/bs";
import release1 from "../assets/release1.png";
import release2 from "../assets/release2.png";
import Card from "./Card";

export default function Release() {
  return (
    <div className="releases">
      <section class="timeline">
        <h1>Road Map</h1>

        <ul>
          <li>
            <h3>Launch Initiated</h3>
            <div class="content">
              <p>
                The 777 Club lifestyle is fast-paced and actively seeks the best
                things in life. The first stage of our club is establishing a
                strong community based on the Clubhouse Founders Collection of
                777 member passes. It’s how we live, and we want to share it
                with you. Throughout late Q1, we will be focused on building our
                community and personally connecting with our followers,
                collaborating with other NFT projects, and creating meaningful
                partnerships.
              </p>
            </div>
          </li>
          <li>
            <h3>Staking</h3>
            <div class="content">
              <p>
                In early Q2, we will mint! We will sell the Clubhouse Collection
                to our founding members, who will reap extra rewards. Soon
                after, we will launch the concierge service, including a social
                networking aspect, and deliver our 777 Clubhouse welcome
                packages to your door. We will sell the Clubhouse Collection to
                our founding members, who will reap extra rewards.
              </p>
            </div>
          </li>
          <li>
            <h3>Merch Live Events</h3>
            <div class="content">
              <p>
                In April, we will purchase a plot of prime meta-estate to launch
                our metaverse social club. A spot where NFT holders can meet,
                display their NFT collections, and help monetize the space for
                more rewards.
              </p>
            </div>
          </li>
          <li>
            <h3>The Crypto Bears</h3>
            <div class="content">
              <p>
                We will begin a merch collab with a top-tier design label in May
                while distributing the 777 Club Friends Airdrop. This will take
                us to our next in-person event, to be announced shortly after
                the sale.
              </p>
            </div>
          </li>
          <li>
            <h3>MetaVerse</h3>
            <div class="content">
              <p>
                In Q3, we are headed to Mykonos because that’s what one does in
                the summer. That will be followed by the casual stop in Ibiza
                before wrapping things up for the fall/winter schedule. Get
                ready for some exciting events + member meet-ups across Europe
                this summer.
              </p>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}
