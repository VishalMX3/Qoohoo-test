import React from "react";
import Navbar from "./Navbar";
import Hero from '../images/hero.png'
import Image from '../images/tick-vector.png'
import Tick from "./tick";
import Circle from '../images/circle.png'
import Star from '../images/star.png'

function Header() {
  return (
    <>
      <Navbar />
     
        <div className="name">
          <img src={Hero} id="pic" alt="" />
          <div className="header-content">
          <h1>
            <span>Get Ready</span> to grow with us
            {/* <img src={Star} id="star" alt="" /> */}
          </h1>
          <p className="details">Start with us today</p>
          <a href="#" className="cv-btn">
        View all courses -&gt;
          </a>
          </div>
        </div>
        <div className="circle">
          <img src={Circle} alt="" />
          <img src={Circle} alt="" />
          <img src={Circle} alt="" />
        </div>
        <div className="header-ticks">
            <Tick image={Image} title='500+ happy customers'/>
            <Tick image={Image} title='Learn as you go'/>
            <Tick image={Image} title='Self-paced learning'/>
        </div>
     
    </>
  );
}

export default Header;
