import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { searchData } from '../utils/searchUtils';
import './SearchResults.css';

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  
  const query = searchParams.get('q') || '';
  
  useEffect(() => {
    setLoading(true);
    // Simulate async operation
    const timer = setTimeout(() => {
      if (query) {
        const searchResults = searchData(query);
        setResults(searchResults);
      }
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [query]);
  
  const handleBack = () => {
    navigate('/');
  };
  
  return (
    <div className="search-results-container">
      <div className="search-results-header">
        <button className="back-btn" onClick={handleBack}>← Back</button>
        <h1>Search Results</h1>
        <p className="search-query">Results for: <strong>"{query}"</strong></p>
        {results.length > 0 && <p className="result-count">{results.length} result(s) found</p>}
      </div>
      
      {loading ? (
        <div className="loading">Searching...</div>
      ) : results.length > 0 ? (
        <div className="results-grid">
          {results.map(result => (
            <div key={result.id} className="result-card">
              <div className="result-image">{result.image || '📄'}</div>
              <div className="result-content">
                <h3 className="result-title">{result.title}</h3>
                {result.code && <p className="result-code">{result.code}</p>}
                {result.category && <p className="result-category">{result.category}</p>}
                {result.subject && <p className="result-subject">{result.subject}</p>}
                {result.type && <p className="result-type">{result.type}</p>}
                {(result.link || result.links) && <p className="result-available">✓ Files available</p>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No results found for "{query}"</p>
          <p className="no-results-hint">Try searching with different keywords:</p>
          <div className="search-hints">
            <span>CS101</span>
            <span>English</span>
            <span>Mathematics</span>
            <span>handout</span>
            <span>exam</span>
            <span>quiz</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
