import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import Counter from './components/Counter';

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Welcome to the Counter App!</h1>
      <Header />
      <MainContent />
      <Footer />
      <Counter />
    </div>
  );
}

export default App;
