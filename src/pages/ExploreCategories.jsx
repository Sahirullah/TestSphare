import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './ExploreCategories.css';

const ExploreCategories = () => {
  const navigate = useNavigate();
  const categories = [
    { id: 1, abbr: 'All', fullName: 'All Courses' },
    { id: 2, abbr: 'ACC', fullName: 'Accounting' },
    { id: 3, abbr: 'ACT', fullName: 'American College Test' },
    { id: 4, abbr: 'BIF', fullName: 'Bioinformatics' },
    { id: 5, abbr: 'BIO', fullName: 'Biology' },
    { id: 6, abbr: 'BNK', fullName: 'Banking' },
    { id: 7, abbr: 'BT', fullName: 'Biotechnology' },
    { id: 8, abbr: 'CHE', fullName: 'Chemistry' },
    { id: 9, abbr: 'CS', fullName: 'Computer Science' },
    { id: 10, abbr: 'ECO', fullName: 'Economics' },
    { id: 11, abbr: 'EDU', fullName: 'Education' },
    { id: 12, abbr: 'ENG', fullName: 'English' },
    { id: 13, abbr: 'ETEA', fullName: 'Entry Test Engineering & Technology' },
    { id: 14, abbr: 'ETH', fullName: 'Ethics' },
    { id: 15, abbr: 'FIN', fullName: 'Finance' },
    { id: 16, abbr: 'GATE', fullName: 'Graduate Aptitude Test in Engineering' },
    { id: 17, abbr: 'GMAT', fullName: 'Graduate Management Admission Test' },
    { id: 18, abbr: 'GRE', fullName: 'Graduate Record Examination' },
    { id: 19, abbr: 'GSC', fullName: 'General Science' },
    { id: 20, abbr: 'HEC', fullName: 'Past Papers & Notes', route: '/hec-past-papers' },
    { id: 21, abbr: 'HRM', fullName: 'Human Resource Management' },
    { id: 22, abbr: 'IELTS', fullName: 'International English Language Testing System' },
    { id: 23, abbr: 'ISL', fullName: 'Islamic Studies' },
    { id: 24, abbr: 'IT', fullName: 'Information Technology' },
    { id: 25, abbr: 'JEE', fullName: 'Joint Entrance Examination' },
    { id: 26, abbr: 'MCAT', fullName: 'Medical College Admission Test' },
    { id: 27, abbr: 'MCM', fullName: 'Mass Communication' },
    { id: 28, abbr: 'MGMT', fullName: 'Management' },
    { id: 29, abbr: 'MGT', fullName: 'Business & Management' },
    { id: 30, abbr: 'MKT', fullName: 'Marketing' },
    { id: 31, abbr: 'MTH', fullName: 'Mathematics' },
    { id: 32, abbr: 'NEET', fullName: 'National Eligibility cum Enhance Test' },
    { id: 33, abbr: 'NMDCAT', fullName: 'National Medical & Dental College Admission Test' },
    { id: 34, abbr: 'PAD', fullName: 'Public Administration' },
    { id: 35, abbr: 'PAK', fullName: 'Pakistan Studies' },
    { id: 36, abbr: 'PHY', fullName: 'Physics' },
    { id: 37, abbr: 'PSC', fullName: 'Political Science' },
    { id: 38, abbr: 'PSY', fullName: 'Psychology' },
    { id: 39, abbr: 'SOC', fullName: 'Sociology' },
    { id: 40, abbr: 'STA', fullName: 'Statistics' }
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
                  onClick={() => handleCategoryClick(category.fullName, category.route)}
                  title={category.fullName}
                >
                  {category.abbr}
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
