import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/navbar';
import EvocaCardSlider from './components/home/evocacardslider';
import BiometricSection from './components/home/biometricsection';
import StatueSection from './components/home/statuesection';
import CardsSliderSection from './components/home/cardslidersection';
import CalculatorSection from './components/home/calculatorsection';
import EvocaOnlineMobile from './components/home/evocaonlinemobile';
import Gortsynkerner from './components/home/gortsynkerner';
import CurrencyAndAddresses from './components/home/currencyandaddresses';
import Hachaxord from './components/home/hachaxord';
import Footer from './components/home/footer';
import AnhatVarker from './components/loans/anhatvarker';

function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <EvocaCardSlider />
        <BiometricSection />
        <StatueSection />
        <CardsSliderSection />
        <CalculatorSection />
        <EvocaOnlineMobile />
        <Gortsynkerner />
        <CurrencyAndAddresses />
        <Hachaxord />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Հիմնական գլխավոր էջ */}
        <Route path="/" element={<HomePage />} />
        
        {/* Վարկերի էջը (React Routing-ով) */}
        <Route path="/loans" element={<AnhatVarker />} />
      </Routes>
    </Router>
  );
}

export default App;