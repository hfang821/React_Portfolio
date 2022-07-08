import React, { useState } from 'react';
import Navigation from './components/Navigation';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/pages/About/About';
import Projects from './components/pages/Projects/Projects';
import Contact from './components/pages/Contact/Contact';
import "./App.css"

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // conditionally render the pages to navigate to
  const renderPage = () => {
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Projects') {
      return <Projects />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="portfolio">
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Header />
        <div className="sections">
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
          {renderPage()}
          <Footer />
        </div>
    </div>
  );
}

