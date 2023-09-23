import React from 'react';
import { BsArrowRight } from "react-icons/bs";

function Font() {
  return (
    <div className="container-fluid">
      <div className="logo">
        <span id="arrow">What We Offer <BsArrowRight /> </span>
      </div>
      <div className="container" id="font">
        <span >Complete Software</span><br />
        <span data-aos="fade-down-right">Development And Digital</span><br />
        <span data-aos="fade-down-right">Marketing Solution</span>
        <div className="container description" id="pp">
          <p>We Offer A Complete Software And Digital Marketing Solution Bespoke To The</p>
          <p>Needs Of Your Business. From Ideation To Creation And Implementation Of</p>
          <p>Solutions That Are Tailored To Meet Your Requirements, With Services Such</p>
          <p>As Ecommerce Website Designing Services. Complete Mobile Application</p>
          <p>Development, Digital Marketing Solutions, As Well As Web Design</p>
          <p>And Development. We Are Your One-Stop Shop For All Your IT And Digital</p>
          <p>Marketing Needs.</p>
          <p>Our Team Is Studded With Well-Experienced And Passionate Web Designers,</p>
          <p>Mobile Application Developers, Web Developers, Graphic Designers, Content</p>
          <p>Writers, As Well As Well-Experienced Digital Marketers, That Are Committed</p>
          <p>To Offering Best-In-Class Service That Is Result-Oriented.</p>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Font;