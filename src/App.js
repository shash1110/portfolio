import React from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';
import Contact from './components/contacts';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
