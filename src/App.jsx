import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { ThemeProvider } from './context/ThemeContext'
import Home from './pages/Home'

// Lazy load pages for better performance
const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const VUHandout = lazy(() => import('./pages/VUHandout'))
const MidtermFiles = lazy(() => import('./pages/MidtermFiles'))
const FinalTermFiles = lazy(() => import('./pages/FinalTermFiles'))
const Quizzes = lazy(() => import('./pages/Quizzes'))
const Assignment = lazy(() => import('./pages/Assignment'))
const MidtermReviews = lazy(() => import('./pages/MidtermReviews'))
const Blogs = lazy(() => import('./pages/Blogs'))
const ImportantSoftwares = lazy(() => import('./pages/ImportantSoftwares'))
const ExamPractice = lazy(() => import('./pages/ExamPractice'))
const MidtermPractice = lazy(() => import('./pages/MidtermPractice'))
const FinalTermPractice = lazy(() => import('./pages/FinalTermExamPractice'))
const HighlightedHandout = lazy(() => import('./pages/HighlightedHandout'))
const Notes = lazy(() => import('./pages/Notes'))

const LoadingFallback = () => <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app">
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/vu-handout" element={<VUHandout />} />
              <Route path="/highlighted-handout" element={<HighlightedHandout />} />
              <Route path="/midterm" element={<MidtermFiles />} />
              <Route path="/final-term" element={<FinalTermFiles />} />
              <Route path="/quizzes" element={<Quizzes />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/midterm-reviews" element={<MidtermReviews />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/notes" element={<Notes />} />
              <Route path="/softwares" element={<ImportantSoftwares />} />
              <Route path="/exam-practice" element={<ExamPractice />} />
              <Route path="/midterm-practice" element={<MidtermPractice />} />
              <Route path="/final-term-practice" element={<FinalTermPractice />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
