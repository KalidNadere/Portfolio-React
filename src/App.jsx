import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';


// JSX structure representing the entire application
function App() {
  return (
    <>
    <Header />
    <main>
     < Outlet />
    </main>
    <Footer />
    </>
  );
}

export default App;