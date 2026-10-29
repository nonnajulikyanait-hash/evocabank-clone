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
import AnhatVarker from './components/home/anhatvarker';
import CreditHistoryAndScore from './components/home/credithistoryandscore';
import ImportantInformation from './components/home/importantinformation';
import UnsecuredConsumerLoan from './components/home/unsecuredconsumerloan';
import LoanDetail from './components/home/loandetail';
import Qarter from './components/home/qarter';
import AnhatAvandner from './components/home/anhatavandner';
import Hashivner from './components/home/hashivner'; 
import Poxancumner from './components/home/poxancumner'; 
import Arjetxter from './components/home/arjetxter'; 
import EvocaSalary from './components/home/evocasalary'; 
import EvocaTouch from './components/home/evocatouch'; 
import EvocaOnline from './components/home/evocaonline';
import BiznesVarker from './components/home/biznesvarker';
import Lizing from './components/home/lizing';
import HatukArajark from './components/home/hatukarajark';
import BiznesHashivner from './components/home/bizneshashivner';

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
        <Route path="/" element={<HomePage />} />
        <Route path="/loans" element={<AnhatVarker />} />
        <Route path="/loans/unsecured-consumer-loan" element={<UnsecuredConsumerLoan />} />
        <Route path="/loans/:id" element={<LoanDetail />} />
        <Route path="/cards" element={<Qarter />} />
        <Route path="/deposits" element={<AnhatAvandner />} />
        <Route path="/accounts" element={<Hashivner />} />
        <Route path="/transfers" element={<Poxancumner />} />
        <Route path="/securities" element={<Arjetxter />} />
        <Route path="/evocasalary" element={<EvocaSalary />} />
        <Route path="/evocatouch" element={<EvocaTouch />} />
        <Route path="/evocaonline" element={<EvocaOnline />} />
        <Route path="/business-loans" element={<BiznesVarker />} />
        <Route path="/leasing" element={<Lizing />} />
        <Route path="/special-offer" element={<HatukArajark />} />
        <Route path="/business-accounts" element={<BiznesHashivner />} />
        <Route path="/business-unallocated-metal-accounts" element={<BiznesHashivner />} />
        <Route path="/credit-history-and-score" element={<CreditHistoryAndScore />} />
        <Route path="/important-information" element={<ImportantInformation />} />
      </Routes>
    </Router>
  );
}

export default App;