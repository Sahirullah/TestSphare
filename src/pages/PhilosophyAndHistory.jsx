import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { philosophyHistoryData, philosophyHistoryCategories } from '../data/philosophyHistoryData';
import './AllBooks.css';

const PhilosophyAndHistory = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const materials = philosophyHistoryData.map(item => ({
    ...item,
    description: `Download complete study materials for ${item.title} (${item.code}) in PDF Format.`,
    status: 'Updated Materials',
    hasLecture: true
  })).sort((a, b) => a.code.localeCompare(b.code));

  const categories = philosophyHistoryCategories;

  const filteredMaterials = selectedCategory === 'all' 
    ? materials 
    : materials.filter(m => m.category === selectedCategory);

  return (
    <div className="vu-handout-page">
      <Header />
      
      <div className="handout-hero">
        <div className="hero-content">
          <div className="hero-icon">🤔</div>
          <h1>Philosophy & History Materials</h1>
          <p>Complete study materials for Philosophy and History courses.</p>
          <p>Download your study materials in PDF, Doc for free.</p>
          <p>Access comprehensive educational resources.</p>
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
          {filteredMaterials.map(material => (
            <div key={material.id} className="handout-card">
              <div className="card-header">
                <div className="card-icon">{material.image}</div>
                <span className="status-badge">{material.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{material.code}</h3>
                <h4>{material.title}</h4>
                <p>{material.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {material.hasLecture && (
                    <span className="feature-tag">📝 Study Material</span>
                  )}
                </div>
                {material.link ? (
                  <a href={material.link} target="_blank" rel="noopener noreferrer" className="download-btn">
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

        {filteredMaterials.length === 0 && (
          <div className="no-results">
            <p>No materials found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default PhilosophyAndHistory;
