import React from "react";

import "./Footer.css"; 

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <h1>Communion</h1>
          <p>
            Discover the power of connection with Communion. Uniting diverse communities 
            through spirituality and innovation, we foster inclusivity, collaboration, 
            and social cohesion for a better world.
          </p>
        </div>

        <div className="footer-middle">
          <h2>Company</h2>
          <p><a href="/">Home</a></p>
          <p><a href="/about">About</a></p>
          <p><a href="/events">Events</a></p>
        </div>

        <div className="footer-right">
          <h2>Contact</h2>
          <p><a href="mailto:contact@communionhub.org">contact@communionhub.org</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Communion. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
