import React from 'react';
// Using card images from assets folder
import card1 from '../assets/card1.js';
import card2 from '../assets/card2.js';
import card3 from '../assets/card3.js';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            Premium Educational Resources & Study Materials
          </h1>
          <p className="hero-subtitle">
            Discover thousands of high-quality handouts, assignments, and study materials 
            for Virtual Uni Hub and Allama Iqbal University students.
          </p>
          <div className="hero-search">
            <input 
              type="text" 
              placeholder="Search for handouts, assignments, past papers..."
              className="search-input"
            />
            <button className="search-btn">Search</button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10K+</span>
              <span className="stat-label"><i className="fas fa-book"></i> Study Materials</span>
            </div>
            <div className="stat">
              <span className="stat-number">5K+</span>
              <span className="stat-label"><i className="fas fa-smile"></i> Happy Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">50K+</span>
              <span className="stat-label"><i className="fas fa-download"></i> Downloads</span>
            </div>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-graphic">
            <div className="floating-card card-1">
              <img src={card1} alt="E-commerce Theme Preview" className="card-image" />
            </div>
            <div className="floating-card card-2">
              <img src={card2} alt="Portfolio Theme Preview" className="card-image" />
            </div>
            <div className="floating-card card-3">
              <img src={card3} alt="Business Theme Preview" className="card-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;