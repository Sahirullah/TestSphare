import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ExploreCategories.css';

const ExploreCategories = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 1, name: 'All Courses', icon: '📚' },
    { id: 2, name: 'ACC - Accounting', icon: '💰' },
    { id: 3, name: 'ACT - American College Test', icon: '✏️' },
    { id: 4, name: 'BIF - Bioinformatics', icon: '🧬' },
    { id: 5, name: 'BIO - Biology', icon: '🔬' },
    { id: 6, name: 'BNK - Banking', icon: '🏦' },
    { id: 7, name: 'BT - Biotechnology', icon: '🧪' },
    { id: 8, name: 'CHE - Chemistry', icon: '⚗️' },
    { id: 9, name: 'CS - Computer Science', icon: '💻' },
    { id: 10, name: 'ECO - Economics', icon: '📊' },
    { id: 11, name: 'EDU - Education', icon: '🎓' },
    { id: 12, name: 'ENG - English', icon: '📖' },
    { id: 13, name: 'ETEA - Entry Test Engineering & Technology', icon: '🔧' },
    { id: 14, name: 'ETH - Ethics', icon: '⚖️' },
    { id: 15, name: 'FIN - Finance', icon: '💵' },
    { id: 16, name: 'GATE - Graduate Aptitude Test in Engineering', icon: '🏆' },
    { id: 17, name: 'GMAT - Graduate Management Admission Test', icon: '📈' },
    { id: 18, name: 'GRE - Graduate Record Examination', icon: '🎯' },
    { id: 19, name: 'GSC - General Science', icon: '🌍' },
    { id: 20, name: 'HEC - Past Papers & Notes', icon: '📝', route: '/hec-past-papers' },
    { id: 21, name: 'HRM - Human Resource Management', icon: '👥' },
    { id: 22, name: 'IELTS - International English Language Testing System', icon: '🌐' },
    { id: 23, name: 'ISL - Islamic Studies', icon: '🕌' },
    { id: 24, name: 'IT - Information Technology', icon: '🖥️' },
    { id: 25, name: 'JEE - Joint Entrance Examination', icon: '🚀' },
    { id: 26, name: 'MCAT - Medical College Admission Test', icon: '⚕️' },
    { id: 27, name: 'MCM - Mass Communication', icon: '📢' },
    { id: 28, name: 'MGMT - Management', icon: '📋' },
    { id: 29, name: 'MGT - Business & Management', icon: '🏢' },
    { id: 30, name: 'MKT - Marketing', icon: '🎨' },
    { id: 31, name: 'MTH - Mathematics', icon: '🔢' },
    { id: 32, name: 'NEET - National Eligibility cum Enhance Test', icon: '🔬' },
    { id: 33, name: 'NMDCAT - National Medical & Dental College Admission Test', icon: '🏥' },
    { id: 34, name: 'PAD - Public Administration', icon: '🏛️' },
    { id: 35, name: 'PAK - Pakistan Studies', icon: '🇵🇰' },
    { id: 36, name: 'PHY - Physics', icon: '⚡' },
    { id: 37, name: 'PSC - Political Science', icon: '🗳️' },
    { id: 38, name: 'PSY - Psychology', icon: '🧠' },
    { id: 39, name: 'SOC - Sociology', icon: '👫' },
    { id: 40, name: 'STA - Statistics', icon: '📊' }
  ];

  const handleCategoryClick = (categoryName, route) => {
    if (route) {
      navigate(route);
    } else {
      console.log(`Clicked on ${categoryName}`);
      // Future: Add navigation to category-specific pages
    }
  };

  // Debug: Log categories count
  console.log('Total categories:', categories.length);

  return (
    <div className="explore-categories-page">
      <Header />
      
      <main className="explore-categories-main">
        <section className="explore-hero">
          <div className="explore-container">
            <h1 className="explore-title">Explore All Categories</h1>
            <p className="explore-subtitle">
              Browse through our comprehensive collection of academic subjects and courses
            </p>
          </div>
        </section>

        <section className="explore-content">
          <div className="explore-container">
            <div className="categories-buttons-grid">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className="category-button"
                  onClick={() => handleCategoryClick(category.name, category.route)}
                  title={category.name}
                >
                  <span className="category-button-icon">{category.icon}</span>
                  <span className="category-button-name">{category.name}</span>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ExploreCategories;
