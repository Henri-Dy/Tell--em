import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import Connexion from './Pages/Connexion';
import Inscription from './Pages/Inscription';
import CreateTold from './Pages/CreateTold';
import OpenSource from './Pages/OpenSource';


function App() {
  return (
    <Router>
      <Navbar />
      <main className ='relative '>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path='/Connexion' element={<Connexion/>} />
          <Route path='/Inscription' element = {<Inscription />} />
          <Route path='/OpenSource' element = {<OpenSource />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
