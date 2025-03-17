import React from 'react';
import { ChatbotProvider } from './store/chatbotContext';
import Chatbot from './components/Chatbot';
import { GlobalStyles } from './styles/globalStyles';

function App() {
  return (
    <>
      <GlobalStyles />
      <div className="app">
        <header className="university-header">
          <h1>University of Excellence</h1>
          <nav className="main-nav">
            <ul>
              <li><a href="#academics">Academics</a></li>
              <li><a href="#admissions">Admissions</a></li>
              <li><a href="#campus">Campus Life</a></li>
              <li><a href="#research">Research</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </nav>
        </header>
        
        <main className="university-content">
          <section className="hero-section">
            <div className="hero-content">
              <h2>Welcome to the University of Excellence</h2>
              <p>Empowering minds, shaping futures. Discover a world-class education that prepares you for success.</p>
              <button className="cta-button">Apply Now</button>
            </div>
          </section>
          
          <section id="academics" className="content-section">
            <h2>Academic Programs</h2>
            <p>Explore our diverse range of undergraduate and graduate programs designed to challenge and inspire.</p>
          </section>
          
          <section id="admissions" className="content-section">
            <h2>Admission Information</h2>
            <p>Learn about our admission process, requirements, and deadlines for the upcoming academic year.</p>
          </section>
        </main>
        
        <ChatbotProvider>
          <Chatbot />
        </ChatbotProvider>
      </div>
    </>
  );
}

export default App;