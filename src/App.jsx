import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'

// Lazy load pages for better performance
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const AllBooks = lazy(() => import('./pages/AllBooks'))
const PastPapers = lazy(() => import('./pages/PastPaper.jsx'))
const FileHub = lazy(() => import('./pages/FileHub'))
const UniBase = lazy(() => import('./pages/UniBase'))
const Assignment = lazy(() => import('./pages/Assignment'))
const Blogs = lazy(() => import('./pages/Blogs'))
const ImportantSoftwares = lazy(() => import('./pages/ImportantSoftwares'))
const ExamPractice = lazy(() => import('./pages/ExamPractice'))
const HighlightedHandout = lazy(() => import('./pages/HighlightedHandout'))
const Notes = lazy(() => import('./pages/Notes'))
const IslamReligion = lazy(() => import('./pages/IslamReligion'))
const ScienceTechnology = lazy(() => import('./pages/ScienceTechnology'))
const LawPolitics = lazy(() => import('./pages/LawPolitics'))
const PhilosophyHistory = lazy(() => import('./pages/PhilosophyHistory'))
const BusinessFinance = lazy(() => import('./pages/BusinessFinance'))
const ResearchInnovation = lazy(() => import('./pages/ResearchInnovation'))
const ExploreCategories = lazy(() => import('./pages/ExploreCategories'))
const HecPastPapers = lazy(() => import('./pages/HecPastPapers'))

const LoadingFallback = () => <div style={{ padding: '40px', textAlign: 'center', fontWeight: 'bold' }}>Loading...</div>

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/vu-handout" element={<AllBooks />} />
              <Route path="/highlighted-handout" element={<HighlightedHandout />} />
              <Route path="/midterm" element={<PastPapers />} />
              <Route path="/final-term" element={<FileHub />} />
              <Route path="/uni-base" element={<UniBase />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/softwares" element={<ImportantSoftwares />} />
              <Route path="/exam-practice" element={<ExamPractice />} />
              <Route path="/all-books" element={<AllBooks />} />
              <Route path="/past-paper" element={<PastPapers />} />
              <Route path="/islam-other-religion" element={<IslamReligion />} />
              <Route path="/science-technology" element={<ScienceTechnology />} />
              <Route path="/law-politics" element={<LawPolitics />} />
              <Route path="/philosophy-history" element={<PhilosophyHistory />} />
              <Route path="/business-finance" element={<BusinessFinance />} />
              <Route path="/research-innovation" element={<ResearchInnovation />} />
              <Route path="/explore-categories" element={<ExploreCategories />} />
              <Route path="/hec-past-papers" element={<HecPastPapers />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
