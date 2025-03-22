import React from "react";
import "./index.css";
import Gallery from "./Gallery";
import AccordionComponent from "./AccordionComponent";
import { Link } from 'react-router-dom';

const Home = () => {
    const accordionData = [
        {
            title: "What is Communion?",
            content: "Communion is a platform that fosters meaningful connections across faiths and interests."
        },
        {
            title: "How to Join?",
            content: "You can sign up by visiting our Join page and filling out the registration form."
        },
        {
            title: "What kind of events are hosted?",
            content: "We host events related to culture, spirituality, networking, and more."
        }
    ];

    return (
        <div className="home-container">
            <div className="content">
                <h1 className="fw-bold text-dark">Connecting People Across Faiths & Interests</h1>
                <p className="fs-5 text-dark">
                    Join a thriving community that bridges gaps, fosters understanding, and connects
                    people through meaningful events.
                </p>
                <Link className="btn-connect" to='/event'>Explore Events</Link>
            </div>

            <div className="why-choose-us">
                <div className="about-communion">
                    <h2 className="fw-bold text-light">Why Communion?</h2>
                    <p className="text-light">
                        Communion is a platform that brings people together by fostering meaningful
                        connections across different faiths and interests. Whether you're looking to
                        engage in enriching discussions, attend unique events, or build strong
                        relationships, Communion provides a space for inclusivity and understanding.
                    </p>
                </div>

                <div className="features-container">
                    <div className="feature-box">
                        <h3>🌎 Global Community</h3>
                        <p>Connect with people from all around the world and share meaningful experiences.</p>
                    </div>
                    <div className="feature-box">
                        <h3>🎉 Exclusive Events</h3>
                        <p>Attend events tailored to your interests and interact with like-minded individuals.</p>
                    </div>
                    <div className="feature-box">
                        <h3>🤝 Stronger Bonds</h3>
                        <p>Build lasting friendships and collaborate on impactful initiatives.</p>
                    </div>
                </div>

                <div className="ready-to-connect">
                    <h2 className="slogan">"Your next great connection starts here!"</h2>
                    <Link className="btn-connect" to="/event">Ready to Connect</Link>
                </div>
            </div>

            <Gallery />

            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <AccordionComponent items={accordionData} />
            </div>
        </div>
    );
};

export default Home;
