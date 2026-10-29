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
import Hashivner from './components/home/hashivner'; // Հաշիվների էջի իմպորտ
import Poxancumner from './components/home/poxancumner'; // Փոխանցումների էջի իմպորտ
import Arjetxter from './components/home/arjetxter'; // Արժեթղթերի էջի իմպորտ
import EvocaSalary from './components/home/evocasalary'; // EvocaSALARY էջի իմպորտ

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
        {/* Գլխավոր էջ */}
        <Route path="/" element={<HomePage />} />
        
        {/* Վարկերի էջ */}
        <Route path="/loans" element={<AnhatVarker />} />
        
        {/* Հատուկ Անգրավ սպառողական վարկի մանրամասն էջ */}
        <Route path="/loans/unsecured-consumer-loan" element={<UnsecuredConsumerLoan />} />
        
        {/* Բոլոր մյուս վարկերի ընդհանուր դինամիկ էջը */}
        <Route path="/loans/:id" element={<LoanDetail />} />
        
        {/* Քարտերի էջ (qarter.jsx) */}
        <Route path="/cards" element={<Qarter />} />

        {/* Ավանդների էջ (anhatavandner.jsx) */}
        <Route path="/deposits" element={<AnhatAvandner />} />

        {/* Հաշիվների էջ (hashivner.jsx) */}
        <Route path="/accounts" element={<Hashivner />} />

        {/* Փոխանցումների էջ (poxancumner.jsx) */}
        <Route path="/transfers" element={<Poxancumner />} />

        {/* Արժեթղթերի էջ (arjetxter.jsx) */}
        <Route path="/securities" element={<Arjetxter />} />

        {/* EvocaSALARY էջ (evocasalary.jsx) */}
        <Route path="/evocasalary" element={<EvocaSalary />} />
        
        {/* Վարկային պատմություն և սքոր */}
        <Route path="/credit-history-and-score" element={<CreditHistoryAndScore />} />
        
        {/* Կարևոր տեղեկատվություն */}
        <Route path="/important-information" element={<ImportantInformation />} />
      </Routes>
    </Router>
  );
}

export default App;