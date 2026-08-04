import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { vuHandoutsData, vuCategories } from '../data/vuHandoutsData';
import './VUHandout.css';

const VUHandout = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handouts = vuHandoutsData.map(item => ({
    ...item,
    description: `Download complete VU updated handouts for ${item.title} (${item.code}) in PDF Format.`,
    status: 'Updated Handouts',
    hasLecture: true
  })).sort((a, b) => a.code.localeCompare(b.code));

  const categories = vuCategories;

  const filteredHandouts = selectedCategory === 'all' 
    ? handouts 
    : handouts.filter(h => h.category === selectedCategory);

  return (
    <div className="vu-handout-page">
      <Header />
      
      <div className="handout-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1>VU HANDOUT</h1>
          <p>Virtual University Complete Study Materials</p>
        </div>
      </div>

      <div className="handout-container">
        <div className="category-filter">
          <h2>Select Category</h2>
          <div className="filter-buttons">
            {categories.map(cat => (
              <button
                key={cat.id}
                className={`filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="handouts-grid">
          {filteredHandouts.map(handout => (
            <div key={handout.id} className="handout-card">
              <div className="card-header">
                <div className="card-icon">{handout.image}</div>
                <span className="status-badge">{handout.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{handout.code}</h3>
                <h4>{handout.title}</h4>
                <p>{handout.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {handout.hasLecture && (
                    <span className="feature-tag">📝 Lecture-wise</span>
                  )}
                </div>
                {handout.link ? (
                  <a href={handout.link} target="_blank" rel="noopener noreferrer" className="download-btn">
                    📥 Download PDF
                  </a>
                ) : (
                  <button className="download-btn" disabled>
                    📥 Coming Soon
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredHandouts.length === 0 && (
          <div className="no-results">
            <p>No handouts found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default VUHandout;
