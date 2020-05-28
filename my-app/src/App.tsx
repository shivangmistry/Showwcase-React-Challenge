import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <AppRouter />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
