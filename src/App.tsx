import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/layout/Navbar';
import { ScrollToTop } from './Components/layout/ScrollToTop';
import { Footer } from './Components/layout/Footer';
import { Home } from './Pages/Home';
import { About } from './Pages/About';

// Import Tailwind output
import './output.css';
import './fonts.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Old page imports - will be replaced with TypeScript versions
import Contact from './Components/pages/Contact';
import SignUp from './Components/pages/SignUp';
import Brotherhood from './Components/pages/Brotherhood';
import CommServ from './Components/pages/CommServe';
import ProfDef from './Components/pages/ProfDef';
import Merc from './Components/pages/Merc';
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
        <Route path="/brotherhood" element={<Brotherhood />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/comm-serve" element={<CommServ />} />
        <Route path="/prof-dev" element={<ProfDef />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/merc" element={<Merc />} />
        <Route path="/rush" element={<Rush />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
