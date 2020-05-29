import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <AppRouter />
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
