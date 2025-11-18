import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/layout/Navbar';
import { ScrollToTop } from './Components/layout/ScrollToTop';
import { Footer } from './Components/layout/Footer';
import { Home } from './Pages/Home';
import { About } from './Pages/About';
import { Members } from './Pages/Members';
import { Brotherhood } from './Pages/Brotherhood';
import { CommunityService } from './Pages/CommunityService';
import { ProfessionalDevelopment } from './Pages/ProfessionalDevelopment';

// Import Tailwind output
import './output.css';
import './fonts.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Old page imports - will be replaced with TypeScript versions
import Contact from './Components/pages/Contact';
import Rush from './Components/pages/Rush';

/**
 * Main App Component
 *
 * Root component with routing configuration.
 * Uses React Router v6 for navigation.
 */
const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/members" element={<Members />} />
        <Route path="/brotherhood" element={<Brotherhood />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comm-serve" element={<CommunityService />} />
        <Route path="/prof-dev" element={<ProfessionalDevelopment />} />
        <Route path="/rush" element={<Rush />} />
        {/* Legacy route - redirect /merc to /members */}
        <Route path="/merc" element={<Members />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
