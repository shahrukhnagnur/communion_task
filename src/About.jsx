import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>About Our Platform</h1>
        <p>Connecting communities through impactful events and experiences.</p>
      </div>

      <div className="about-content">
        <div className="about-section">
          <h2>🌍 Our Purpose</h2>
          <p>
            We provide a seamless way to discover, organize, and engage in events that bring 
            people together. Our goal is to create an inclusive space where communities 
            can thrive and make meaningful connections.
          </p>
        </div>

        <div className="about-section">
          <h2>✨ What We Offer</h2>
          <ul>
            <li>🎭 Diverse event categories (Social, Religious, Charity, and more)</li>
            <li>📅 Easy event creation and management</li>
            <li>📸 Image uploads for engaging event listings</li>
            <li>⚡ A sleek, modern UI for a seamless user experience</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>🚀 Join Us</h2>
          <p>
            Be part of a growing network of event organizers and attendees. 
            Whether you're hosting an event or looking to join one, we’ve got you covered!
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials">
        <h2>What People Say About Us</h2>
        <div className="testimonial-container">
          <div className="testimonial-card">
            <p>"This platform has completely transformed the way we organize events!"</p>
            <h4>- Sarah Johnson</h4>
          </div>

          <div className="testimonial-card">
            <p>"Super intuitive and easy to use. I found events that I never knew existed!"</p>
            <h4>- Alex Smith</h4>
          </div>

          <div className="testimonial-card">
            <p>"A game-changer for community engagement. Highly recommended!"</p>
            <h4>- Emily Brown</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
