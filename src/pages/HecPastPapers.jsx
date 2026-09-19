import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { hecPastPapersData, hecPastPapersCategories } from '../data/hecPastPapersData';
import './AllBooks.css';

const HecPastPapers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const papers = hecPastPapersData.map(item => ({
    ...item,
    description: `Download HEC Past Papers and Notes for ${item.title} in PDF Format.`,
    status: 'Available',
    hasLecture: true
  })).sort((a, b) => a.code.localeCompare(b.code));

  const categories = hecPastPapersCategories;

  const filteredPapers = selectedCategory === 'all' 
    ? papers 
    : papers.filter(p => p.category === selectedCategory);

  return (
    <div className="vu-handout-page">
      <Header />
      
      <div className="handout-hero">
        <div className="hero-content">
          <div className="hero-icon">📚</div>
          <h1>HEC Past Papers & Notes</h1>
          <p>Complete HEC Study Materials and Past Papers for your preparation.</p>
          <p>Download past papers, notes and solutions in PDF format for free.</p>
          <p>100000+ resources available.</p>
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
          {filteredPapers.map(paper => (
            <div key={paper.id} className="handout-card">
              <div className="card-header">
                <div className="card-icon">{paper.image}</div>
                <span className="status-badge">{paper.status}</span>
              </div>
              
              <div className="card-body">
                <h3>{paper.code}</h3>
                <h4>{paper.title}</h4>
                <p>{paper.description}</p>
              </div>

              <div className="card-footer">
                <div className="card-features">
                  {paper.hasLecture && (
                    <span className="feature-tag">📝 Complete Notes</span>
                  )}
                </div>
                {paper.link && paper.link !== '#' ? (
                  <a href={paper.link} target="_blank" rel="noopener noreferrer" className="download-btn">
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

        {filteredPapers.length === 0 && (
          <div className="no-results">
            <p>No papers found in this category.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default HecPastPapers;
