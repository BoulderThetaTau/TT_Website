import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/pages/About';
import Contact from './Components/pages/Contact';
import Home from './Components/pages/Home';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';
import Brotherhood from './Components/pages/Brotherhood';
import CommServ from './Components/pages/CommServe';
import ProfDef from './Components/pages/ProfDef';
import Merc from './Components/pages/Merc';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { app, analytics } from './Firebase'; // Import Firebase configuration

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/about' Component={About}/>
        <Route path='/brotherhood' Component={Brotherhood} />
        <Route path='/contact' Component={Contact} />
        <Route path='/comm-serve' Component={CommServ} />
        <Route path='/prof-def' Component={ProfDef} />
        <Route path='/sign-up' Component={SignUp} />
        <Route path='/merc' Component={Merc} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  );
}

export default App;
