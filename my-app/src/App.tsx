import React from 'react';

import { Provider } from 'react-redux';
import store from './redux/store'

import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header/Header';
import AppRouter from './AppRouter';
import Footer from './components/Footer/Footer';

import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <div className="App">
          <AppRouter />
        </div>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
