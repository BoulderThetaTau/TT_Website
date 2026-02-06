import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/components/layout/Navbar';
import { ScrollToTop } from '@/components/layout/ScrollToTop';
import { Footer } from '@/components/layout/Footer';
import { Home } from '@/pages/home/Home';
import { About } from '@/pages/about/About';
import { Members } from '@/pages/members/Members';
import { Brotherhood } from '@/pages/brotherhood/Brotherhood';
import { CommunityService } from '@/pages/community-service/CommunityService';
import { ProfessionalDevelopment } from '@/pages/professional-development/ProfessionalDevelopment';

// Import styles
import '../output.css';
import '../fonts.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Old page imports - will be replaced with TypeScript versions
import Rush from '../components/pages/Rush';

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
