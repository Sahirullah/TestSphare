import { assignmentData, assignmentDataClass10 } from '../data/assignmentData';
import { midtermData } from '../data/midtermData';
import { finalTermData } from '../data/finalTermData';
import { quizzesData } from '../data/quizzesData';
import { vuHandoutsData } from '../data/vuHandoutsData';

// Combine all searchable data
export const getAllSearchableData = () => {
  try {
    const allData = [
      ...(assignmentData || []),
      ...(assignmentDataClass10 || []),
      ...(midtermData || []),
      ...(finalTermData || []),
      ...(quizzesData || []),
      ...(vuHandoutsData || []),
    ];
    return allData;
  } catch (error) {
    console.error('Error loading search data:', error);
    return [];
  }
};

// Search function - case insensitive partial matching
export const searchData = (query) => {
  if (!query || !query.trim()) return [];
  
  const searchTerm = query.toLowerCase().trim();
  const allData = getAllSearchableData();
  
  const results = allData.filter(item => {
    if (!item) return false;
    
    const title = (item.title || '').toLowerCase();
    const code = (item.code || '').toLowerCase();
    const category = (item.category || '').toLowerCase();
    const subject = (item.subject || '').toLowerCase();
    const type = (item.type || '').toLowerCase();
    const className = (item.class || '').toLowerCase();
    
    return (
      title.includes(searchTerm) ||
      code.includes(searchTerm) ||
      category.includes(searchTerm) ||
      subject.includes(searchTerm) ||
      type.includes(searchTerm) ||
      className.includes(searchTerm)
    );
  });

  // Remove duplicates based on id
  const seen = new Set();
  return results.filter(item => {
    if (seen.has(item.id)) return false;
    seen.add(item.id);
    return true;
  });
};
