import { Link } from "react-router-dom";
import React from "react";
import "./Home.css";
import missionImage from "C:/Desktop/MindBloom_competition/MindBloom/frontend/src/assets/mission.jpg"; // Adjusted import path

function Home() {
  return (
    <div>
      <section className="hero" aria-label="MindBloom introduction">
        <div className="hero-content">
          <h1>Nurture Your Mind with MindBloom</h1>
          <p>Track moods, journal thoughts, and find calm through meditation.</p>
          <div className="button-group">
            <Link to="/mood-tracker" className="button">Log Your Mood</Link>
            <Link to="/journal" className="button">Write in Journal</Link>
            <Link to="/meditations" className="button">Explore Meditations</Link>
          </div>
        </div>
      </section>

      <section className="mission" aria-label="MindBloom mission">
        <div className="mission-container">
          <div className="mission-image">
            <img src={missionImage} alt="Female engineer in a calm workspace" />
          </div>
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              MindBloom empowers female engineering students to prioritize their mental wellness with intuitive tools designed for mindfulness, reflection, and stress relief.
            </p>
            <p>
              We provide a nurturing space where young women can overcome academic pressures and embrace a balanced life through guided meditations, journaling prompts, and motivational insights.
            </p>
            <p>
              Our goal is to foster resilience and support the next generation of female engineers to thrive holistically with a feminine, community-driven approach.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
export default Home;