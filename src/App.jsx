import React from 'react';
import Navbar from './components/layout/navbar';
import EvocaCardSlider from './components/home/evocacardslider';
import BiometricSection from './components/home/biometricsection';
import StatueSection from './components/home/statuesection';
import CardsSliderSection from './components/home/cardslidersection';
import CalculatorSection from './components/home/calculatorsection';
import EvocaOnlineMobile from './components/home/evocaonlinemobile';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <EvocaCardSlider />
        <BiometricSection />
        <StatueSection />
        <CardsSliderSection />
        <CalculatorSection />
        <EvocaOnlineMobile/>
      </main>
    </div>
  );
}

export default App;