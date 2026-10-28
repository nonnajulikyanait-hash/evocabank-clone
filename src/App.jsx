import React from 'react';
import Navbar from './components/layout/navbar';
import EvocaCardSlider from './components/home/evocacardslider';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <EvocaCardSlider />
      </main>
    </div>
  );
}

export default App;