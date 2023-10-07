import React from 'react';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';
// import Content from './components/Content';
import Footer from './components/Footer';


// JSX structure representing the entire application
function App() {
  return (
    <>
    <Header />
    <main>
     < Outlet />
    </main>
    <footer />
    </>
  );
}

export default App;