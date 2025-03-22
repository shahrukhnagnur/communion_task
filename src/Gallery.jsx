import React from "react";
import "./Gallery.css";
import img1 from './images/10001.jpg';
import img2 from './images/10002.jpg';
import img3 from './images/10003.jpg';
import img4 from './images/10004.jpg';
import img5 from './images/10005.jpg';
import img6 from './images/10006.jpg';
const galleryData = [
    { image: img1, title: "Shared Service Projects", description: "Make a difference by supporting impactful projects." },
    { image: img2, title: "Community Celebrations", description: "Experience the joy of shared festivities and traditions." },
    { image: img3, title: "Volunteer Gatherings", description: "Join meaningful initiatives and build lasting connections." },
    { image: img4, title: "Educational Workshops", description: "Inspiring sessions to educate and innovate." },
    { image: img5, title: "Networking Events", description: "Connect with professionals and creatives." },
    { image: img6, title: "Meeting Professionals", description: "being professional for better tomorrow"},

];

const Gallery = () => {
  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Capturing Moments, Creating Bonds</h2>
      <p className="gallery-text fw-bold">
        Explore the experiences that bring people together, inspire ideas, and build strong communities.
      </p>

      <div className="gallery-grid">
        {galleryData.map((item, index) => (
          <div key={index} className="gallery-item">
            <img src={item.image} alt={item.title} />
            <div className="gallery-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
