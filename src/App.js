import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

// Necessary for setting up client-side routing for React app
import { BrowserRouter as Router } from 'react-router-dom';

// JSX structure representing the entire application
function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Content />
        <Footer />
      </div>
    </Router>
  );
}

export default App;