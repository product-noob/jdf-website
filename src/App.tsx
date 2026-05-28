import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PastYatrasList from './pages/PastYatrasList';
import PastYatraDetail from './pages/PastYatraDetail';
import TeamPage from './pages/TeamPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <LanguageProvider>
        <div className="min-h-screen bg-alabaster font-sans text-slate selection:bg-primary/20 selection:text-charcoal flex flex-col relative">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/past-yatras" element={<PastYatrasList />} />
            <Route path="/past-yatras/:id" element={<PastYatraDetail />} />
            <Route path="/team" element={<TeamPage />} />
          </Routes>
          <Footer />
        </div>
      </LanguageProvider>
    </Router>
  );
}
