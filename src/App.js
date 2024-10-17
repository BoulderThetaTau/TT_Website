import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/pages/Home';
import Services from './Components/pages/Services';
import Products from './Components/pages/Products';
import SignUp from './Components/pages/SignUp';
import Footer from './Components/Footer';
import Brotherhood from './Components/pages/Brotherhood';
import CommServ from './Components/pages/CommServe';
import ProfDef from './Components/pages/ProfDef';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Home}/>
        <Route path='/services' Component={Services} />
        <Route path='/products' Component={Products} />
        <Route path='/brotherhood' Component={Brotherhood} />
        <Route path='/comm-serve' Component={CommServ} />
        <Route path='prof-def' Component={ProfDef} />
        <Route path='/sign-up' Component={SignUp} />
      </Routes>
      <Footer />
    </Router>
      
    </>
  );
}

export default App;
