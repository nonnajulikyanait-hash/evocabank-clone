import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';

export default function AkntartayinVcharumner() {
  const [lang, setLang] = useState('hy'); // 'hy', 'ru', 'en'
  const [showHistory, setShowHistory] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedLoanAction, setSelectedLoanAction] = useState(null);
  const [selectedDirectAction, setSelectedDirectAction] = useState(null);
  
  const [selectedMobileSub, setSelectedMobileSub] = useState(null);
  const [selectedMobileAction, setSelectedMobileAction] = useState(null);

  const [selectedUtilitySub, setSelectedUtilitySub] = useState(null);
  const [selectedUtilityAction, setSelectedUtilityAction] = useState(null);

  const [selectedInternetAction, setSelectedInternetAction] = useState(null);

  const [selectedRoadPoliceSub, setSelectedRoadPoliceSub] = useState(null);
  const [selectedRoadPoliceAction, setSelectedRoadPoliceAction] = useState(null);
  const [selectedLoanOrgSub, setSelectedLoanOrgSub] = useState(null);
  const [selectedLoanOrgAction, setSelectedLoanOrgAction] = useState(null);

  // Թարգմանություններ
  const t = {
    hy: {
      onlinePayment: 'Online payment',
      history: 'Պատմություն',
      home: 'Գլխավոր',
      emptyHistory: 'Ձեր վճարումների պատմությունը դատարկ է',
      continue: 'Շարունակել',
      phonePlaceholder: 'Հեռախոսահամար',
      decisionPlaceholder: 'Որոշման համար',
      contractPlaceholder: 'Պայմանագրի համար',
      idPlaceholder: 'Բաժանորդի Id',
      categories: {
        evocabank: 'EVOCABANK',
        international_mobile: 'Միջազգային բջջային օպերատորներ',
        utility: 'Կոմունալ վճարումներ',
        internet_tv: 'Ինտերնետ և TV',
        road_police: 'ՃՈ վճարներ',
        loan_organizations: 'Վարկային կազմակերպություններ',
        events: 'Միջոցառումներ',
      },
      evocabankSub: {
        loan_repayment: 'Վարկի մարում',
        account_replenishment: 'Հաշվի համալրում',
        card_replenishment: 'Քարտի համալրում',
        early_repayment: 'Վարկի մայր գումարի վաղաժամկետ մարում',
        regular_repayment: 'Հերթական մարում',
      },
      mobileSub: {
        goodline: 'Goodline',
        yota: 'Yota',
        georgian: 'Վրացական',
        russian: 'Ռուսական',
        geocell: 'Ջնուսել',
        magti_bank: 'Մագթի Բանկի',
        magti: 'Մագթի',
        beeline_ru: 'Բիլայն Ռուսաստան',
      },
      utilitySub: {
        phone: 'Հեռախոս',
        electricity: 'Լույս',
        water: 'Ջուր',
        gas_consumption: 'Գազի սպառում',
        gas_service: 'Գազի սպասարկում',
        beeline_fixed: 'Ֆիքսված հեռախոսակապ',
        karabakh_telecom: 'Ղարաբաղ Տելեկոմ Ֆիքսված հեռախոսակապ',
      },
      roadPoliceSub: {
        speed_cameras: 'Արագաչափեր և տեսախցիկներ',
      },
      loanOrgSub: {
        bless: 'ԲԼԵՍՍ ՈՒՎԿ',
        premium_credit: 'Պրեմիում Կրեդիտ ՈՒՎԿ',
        finca: 'ՖԻՆՔԱ ՈՒՎԿ',
        mikro_kapital: 'Միկրո Կապիտալ ՈՒՎԿ',
      }
    },
    ru: {
      onlinePayment: 'Online payment',
      history: 'История',
      home: 'Главная',
      emptyHistory: 'История ваших платежей пуста',
      continue: 'Продолжить',
      phonePlaceholder: 'Номер телефона',
      decisionPlaceholder: 'Номер решения',
      contractPlaceholder: 'Номер договора',
      idPlaceholder: 'ID абонента',
      categories: {
        evocabank: 'EVOCABANK',
        international_mobile: 'Международные мобильные операторы',
        utility: 'Коммунальные платежи',
        internet_tv: 'Интернет и TV',
        road_police: 'Штрафы дорожной полиции',
        loan_organizations: 'Кредитные организации',
        events: 'Мероприятия',
      },
      evocabankSub: {
        loan_repayment: 'Погашение кредита',
        account_replenishment: 'Пополнение счета',
        card_replenishment: 'Пополнение карты',
        early_repayment: 'Досрочное погашение основного долга',
        regular_repayment: 'Очередное погашение',
      },
      mobileSub: {
        goodline: 'Goodline',
        yota: 'Yota',
        georgian: 'Грузинские',
        russian: 'Российские',
        geocell: 'Geocell',
        magti_bank: 'Magti Bank',
        magti: 'Magti',
        beeline_ru: 'Билайн Россия',
      },
      utilitySub: {
        phone: 'Телефон',
        electricity: 'Электричество',
        water: 'Вода',
        gas_consumption: 'Потребление газа',
        gas_service: 'Обслуживание газа',
        beeline_fixed: 'Фиксированная связь',
        karabakh_telecom: 'Карабах Телеком Фиксированная связь',
      },
      roadPoliceSub: {
        speed_cameras: 'Радары и камеры',
      },
      loanOrgSub: {
        bless: 'BLESS UCO',
        premium_credit: 'Premium Credit UCO',
        finca: 'FINCA UCO',
        mikro_kapital: 'Micro Kapital UCO',
      }
    },
    en: {
      onlinePayment: 'Online payment',
      history: 'History',
      home: 'Home',
      emptyHistory: 'Your payment history is empty',
      continue: 'Continue',
      phonePlaceholder: 'Phone number',
      decisionPlaceholder: 'Decision number',
      contractPlaceholder: 'Contract number',
      idPlaceholder: 'Subscriber ID',
      categories: {
        evocabank: 'EVOCABANK',
        international_mobile: 'International Mobile Operators',
        utility: 'Utility Payments',
        internet_tv: 'Internet & TV',
        road_police: 'Road Police Fines',
        loan_organizations: 'Credit Organizations',
        events: 'Events',
      },
      evocabankSub: {
        loan_repayment: 'Loan Repayment',
        account_replenishment: 'Account Replenishment',
        card_replenishment: 'Card Replenishment',
        early_repayment: 'Early Loan Principal Repayment',
        regular_repayment: 'Regular Repayment',
      },
      mobileSub: {
        goodline: 'Goodline',
        yota: 'Yota',
        georgian: 'Georgian',
        russian: 'Russian',
        geocell: 'Geocell',
        magti_bank: 'Magti Bank',
        magti: 'Magti',
        beeline_ru: 'Beeline Russia',
      },
      utilitySub: {
        phone: 'Phone',
        electricity: 'Electricity',
        water: 'Water',
        gas_consumption: 'Gas Consumption',
        gas_service: 'Gas Service',
        beeline_fixed: 'Fixed-line Phone',
        karabakh_telecom: 'Karabakh Telecom Fixed-line',
      },
      roadPoliceSub: {
        speed_cameras: 'Speed Cameras',
      },
      loanOrgSub: {
        bless: 'BLESS UCO',
        premium_credit: 'Premium Credit UCO',
        finca: 'FINCA UCO',
        mikro_kapital: 'Micro Kapital UCO',
      }
    }
  };

  const currentT = t[lang];

  const paymentCategories = [
    {
      id: 'evocabank',
      title: currentT.categories.evocabank,
      icon: 'https://resource.evoca.am/images/WebPayment/evoca.png',
      subCategories: [
        {
          id: 'loan_repayment',
          title: currentT.evocabankSub.loan_repayment,
          icon: 'https://resource.evoca.am/images/webPayment/loan.png',
          actions: [
            { id: 'early_repayment', title: currentT.evocabankSub.early_repayment, icon: 'https://resource.evoca.am/images/webPayment/loan.png' },
            { id: 'regular_repayment', title: currentT.evocabankSub.regular_repayment, icon: 'https://resource.evoca.am/images/webPayment/loan.png' },
          ]
        },
        {
          id: 'account_replenishment',
          title: currentT.evocabankSub.account_replenishment,
          icon: 'https://resource.evoca.am/images/webPayment/Account-Replenishment.png',
          inputPlaceholder: currentT.idPlaceholder,
        },
        {
          id: 'card_replenishment',
          title: currentT.evocabankSub.card_replenishment,
          icon: 'https://resource.evoca.am/images/webPayment/cardtocard.png',
          inputPlaceholder: currentT.phonePlaceholder,
        },
      ],
    },
    {
      id: 'international_mobile',
      title: currentT.categories.international_mobile,
      icon: 'https://resource.evoca.am/images/WebPayment/international.png',
      subCategories: [
        { id: 'goodline', title: currentT.mobileSub.goodline, icon: 'https://resource.evoca.am/images/webPayment/goodline.png', inputPlaceholder: currentT.phonePlaceholder },
        { id: 'yota', title: currentT.mobileSub.yota, icon: 'https://resource.evoca.am/images/webPayment/yota.png', inputPlaceholder: currentT.phonePlaceholder },
        {
          id: 'georgian',
          title: currentT.mobileSub.georgian,
          icon: 'https://resource.evoca.am/images/WebPayment/georgian.png',
          actions: [
            { id: 'geocell', title: currentT.mobileSub.geocell, icon: 'https://resource.evoca.am/images/webPayment/geocell.png', inputPlaceholder: currentT.phonePlaceholder },
            { id: 'magti_bank', title: currentT.mobileSub.magti_bank, icon: 'https://resource.evoca.am/images/webPayment/magti.png', inputPlaceholder: currentT.phonePlaceholder },
            { id: 'magti', title: currentT.mobileSub.magti, icon: 'https://resource.evoca.am/images/webPayment/magti.png', inputPlaceholder: currentT.phonePlaceholder },
          ]
        },
        {
          id: 'russian',
          title: currentT.mobileSub.russian,
          icon: 'https://resource.evoca.am/images/WebPayment/russian.png',
          actions: [
            { id: 'beeline_ru', title: currentT.mobileSub.beeline_ru, icon: 'https://resource.evoca.am/images/webPayment/loan.png', inputPlaceholder: currentT.phonePlaceholder }
          ]
        },
      ],
    },
    {
      id: 'utility',
      title: currentT.categories.utility,
      icon: 'https://resource.evoca.am/images/WebPayment/utility.png',
      subCategories: [
        {
          id: 'phone',
          title: currentT.utilitySub.phone,
          icon: 'https://resource.evoca.am/images/WebPayment/phone.png',
          actions: [
            { id: 'beeline_fixed', title: currentT.utilitySub.beeline_fixed, icon: 'https://resource.evoca.am/images/WebPayment/beeline.png', inputPlaceholder: currentT.phonePlaceholder },
            { id: 'karabakh_telecom', title: currentT.utilitySub.karabakh_telecom, icon: 'https://resource.evoca.am/images/webPayment/karabakh.png', inputPlaceholder: currentT.phonePlaceholder },
          ]
        },
        { id: 'electricity', title: currentT.utilitySub.electricity, icon: 'https://resource.evoca.am/images/WebPayment/electricity.png', inputs: ['Բաժանորդի համար', 'Հեռախոս'] },
        { id: 'water', title: currentT.utilitySub.water, icon: 'https://resource.evoca.am/images/WebPayment/water.png', inputs: ['Բաժանորդի համար', 'Հեռախոսահամար'] },
        { id: 'gas_consumption', title: currentT.utilitySub.gas_consumption, icon: 'https://resource.evoca.am/images/WebPayment/gas.png', inputs: ['Բաժանորդի համար', 'Հեռախոսահամար'] },
        { id: 'gas_service', title: currentT.utilitySub.gas_service, icon: 'https://resource.evoca.am/images/WebPayment/gas_service.png', inputs: ['Բաժանորդի համար', 'Հեռախոսահամար'] },
      ]
    },
    {
      id: 'internet_tv',
      title: currentT.categories.internet_tv,
      icon: 'https://resource.evoca.am/images/WebPayment/internettv.png',
      subCategories: [
        { id: 'hypernet', title: 'HyperNet', icon: 'https://resource.evoca.am/images/WebPayment/hypernet.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'beeline_net', title: 'Team ինտերնետ', icon: 'https://resource.evoca.am/images/WebPayment/beeline.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'vivacell_net', title: 'VivaCell MTS Internet', icon: 'https://resource.evoca.am/images/webPayment/vivacell.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'rostelecom', title: 'Rostelekom', icon: 'https://resource.evoca.am/images/webPayment/rostelecom.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'interactive_tv', title: 'Interactive TV', icon: 'https://resource.evoca.am/images/webPayment/interactive.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'ctv', title: 'CTV', icon: 'https://resource.evoca.am/images/webPayment/ctv.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'yournet', title: 'YOURnet', icon: 'https://resource.evoca.am/images/webPayment/yournet.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'arpinet', title: 'Arpinet', icon: 'https://resource.evoca.am/images/webPayment/arpinet.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'kt_internet', title: 'KT Internet', icon: 'https://resource.evoca.am/images/webPayment/karabakh.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'armcom', title: 'Armcom', icon: 'https://resource.evoca.am/images/webPayment/armcom.png', inputPlaceholder: currentT.idPlaceholder },
        { id: 'interlink', title: 'Interlink', icon: 'https://resource.evoca.am/images/webPayment/interlinknew.png', inputPlaceholder: currentT.idPlaceholder },
      ]
    },
    {
      id: 'road_police',
      title: currentT.categories.road_police,
      icon: 'https://resource.evoca.am/images/WebPayment/roadpolice.png',
      subCategories: [
        { id: 'speed_cameras', title: currentT.roadPoliceSub.speed_cameras, icon: 'https://resource.evoca.am/images/WebPayment/roadpolice.png', inputPlaceholder: currentT.decisionPlaceholder }
      ]
    },
    {
      id: 'loan_organizations',
      title: currentT.categories.loan_organizations,
      icon: 'https://resource.evoca.am/images/WebPayment/loan.png',
      subCategories: [
        { id: 'bless', title: currentT.loanOrgSub.bless, icon: 'https://resource.evoca.am/images/WebPayment/bless.png', inputPlaceholder: currentT.contractPlaceholder },
        { id: 'premium_credit', title: currentT.loanOrgSub.premium_credit, icon: 'https://resource.evoca.am/images/WebPayment/premiumcredit.png', inputPlaceholder: currentT.contractPlaceholder },
        { id: 'finca', title: currentT.loanOrgSub.finca, icon: 'https://resource.evoca.am/images/Payment/finca-logo.png', inputPlaceholder: currentT.contractPlaceholder },
        { id: 'mikro_kapital', title: currentT.loanOrgSub.mikro_kapital, icon: 'https://resource.evoca.am/images/Payment/MikroKapital-Logo.png', inputPlaceholder: currentT.contractPlaceholder },
      ]
    },
    {
      id: 'events',
      title: currentT.categories.events,
      icon: 'https://resource.evoca.am/images/WebPayment/event.png',
    },
  ];

  const resetAll = () => {
    setShowHistory(false);
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedLoanAction(null);
    setSelectedDirectAction(null);
    setSelectedMobileSub(null);
    setSelectedMobileAction(null);
    setSelectedUtilitySub(null);
    setSelectedUtilityAction(null);
    setSelectedInternetAction(null);
    setSelectedRoadPoliceSub(null);
    setSelectedRoadPoliceAction(null);
    setSelectedLoanOrgSub(null);
    setSelectedLoanOrgAction(null);
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans flex flex-col justify-between">
      <div>
        {/* Header */}
        <header className="bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex items-center justify-between sticky top-0 z-50">
          <div className="flex items-center space-x-3">
            <div 
              onClick={resetAll}
              className="text-2xl font-extrabold tracking-tight cursor-pointer text-gray-900 flex items-center gap-1.5"
            >
              <span className="text-[#6400dc]">evoca</span>
              <span className="text-purple-600 font-normal text-sm ml-2 hidden sm:inline">{currentT.onlinePayment}</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-gray-600 text-sm hidden md:inline">+374 10 605555</span>
            
            {/* Language Switcher */}
            <div className="relative">
              <button 
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="p-2 rounded-full hover:bg-gray-100 transition flex items-center gap-1 text-sm font-bold text-gray-700"
              >
                🌐 <span className="uppercase">{lang}</span>
              </button>
              {showLangMenu && (
                <div className="absolute right-0 mt-2 w-28 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50 text-xs font-semibold">
                  <button onClick={() => { setLang('hy'); setShowLangMenu(false); }} className={`w-full text-left px-4 py-2 hover:bg-purple-50 ${lang === 'hy' ? 'text-[#6400dc]' : 'text-gray-700'}`}>Հայերեն</button>
                  <button onClick={() => { setLang('ru'); setShowLangMenu(false); }} className={`w-full text-left px-4 py-2 hover:bg-purple-50 ${lang === 'ru' ? 'text-[#6400dc]' : 'text-gray-700'}`}>Русский</button>
                  <button onClick={() => { setLang('en'); setShowLangMenu(false); }} className={`w-full text-left px-4 py-2 hover:bg-purple-50 ${lang === 'en' ? 'text-[#6400dc]' : 'text-gray-700'}`}>English</button>
                </div>
              )}
            </div>

            <button 
              onClick={() => setShowHistory(true)}
              className="bg-[#6400dc] hover:bg-opacity-90 text-white text-xs font-bold px-4 py-2 rounded-full transition shadow-sm cursor-pointer"
            >
              {currentT.history}
            </button>
          </div>
        </header>

        {/* Բովանդակություն */}
        <main className="max-w-6xl mx-auto px-4 pt-10 pb-12">
          
          {showHistory ? (
            /* ՊԱՏՄՈՒԹՅԱՆ ԷՋԸ (Նկարին համապատասխան) */
            <div>
              {/* Breadcrumbs */}
              <div className="text-xs text-gray-400 mb-8 flex items-center justify-center gap-2">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <span className="text-gray-700 font-medium">{currentT.history}</span>
              </div>

              <div className="flex flex-col items-center justify-center py-16 space-y-4">
                <div className="w-20 h-20 flex items-center justify-center text-[#6400dc]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zM7 10h10v2H7zm0 4h7v2H7z"/>
                  </svg>
                </div>
                <p className="text-[#6400dc] text-sm md:text-base font-bold">
                  {currentT.emptyHistory}
                </p>
              </div>
            </div>

          ) : selectedRoadPoliceAction ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8 flex-wrap">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => setSelectedRoadPoliceAction(null)} className="hover:text-[#6400dc] font-medium">{currentT.categories.road_police}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedRoadPoliceAction.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">{selectedRoadPoliceAction.title}</h1>
              <div className="bg-white max-w-xl mx-auto rounded-3xl p-8 shadow-sm border border-gray-100">
                <label className="block text-sm text-gray-600 mb-2 font-medium">{selectedRoadPoliceAction.inputPlaceholder}</label>
                <input type="text" placeholder={selectedRoadPoliceAction.inputPlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6400dc] text-gray-800 mb-6" />
                <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3.5 rounded-xl transition shadow-md">{currentT.continue}</button>
              </div>
            </div>

          ) : selectedCategory && selectedCategory.id === 'road_police' ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{currentT.categories.road_police}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{currentT.categories.road_police}</h1>
              <div className="flex justify-center max-w-4xl mx-auto">
                {selectedCategory.subCategories.map((sub) => (
                  <div key={sub.id} onClick={() => setSelectedRoadPoliceAction(sub)} className="bg-white w-full max-w-sm rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60">
                    <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                      <img src={sub.icon} alt={sub.title} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{sub.title}</h3>
                  </div>
                ))}
              </div>
            </div>

          ) : selectedLoanOrgAction ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8 flex-wrap">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => setSelectedLoanOrgAction(null)} className="hover:text-[#6400dc] font-medium">{currentT.categories.loan_organizations}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedLoanOrgAction.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">{selectedLoanOrgAction.title}</h1>
              <div className="bg-white max-w-xl mx-auto rounded-3xl p-8 shadow-sm border border-gray-100">
                <label className="block text-sm text-gray-600 mb-2 font-medium">{selectedLoanOrgAction.inputPlaceholder}</label>
                <input type="text" placeholder={selectedLoanOrgAction.inputPlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6400dc] text-gray-800 mb-6" />
                <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3.5 rounded-xl transition shadow-md">{currentT.continue}</button>
              </div>
            </div>

          ) : selectedCategory && selectedCategory.id === 'loan_organizations' ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{currentT.categories.loan_organizations}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{currentT.categories.loan_organizations}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto">
                {selectedCategory.subCategories.map((sub, idx) => {
                  const isLast = idx === selectedCategory.subCategories.length - 1;
                  return (
                    <div key={sub.id} onClick={() => setSelectedLoanOrgAction(sub)} className={`bg-white w-full max-w-xs rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60 ${isLast ? 'sm:col-span-2 lg:col-span-3 justify-self-center' : ''}`}>
                      <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                        <img src={sub.icon} alt={sub.title} className="w-16 h-16 object-contain" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{sub.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

          ) : selectedCategory && selectedCategory.id === 'events' ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{currentT.categories.events}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{currentT.categories.events}</h1>
            </div>

          ) : selectedInternetAction ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8 flex-wrap">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => setSelectedInternetAction(null)} className="hover:text-[#6400dc] font-medium">{currentT.categories.internet_tv}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedInternetAction.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">{selectedInternetAction.title}</h1>
              <div className="bg-white max-w-xl mx-auto rounded-3xl p-8 shadow-sm border border-gray-100">
                <label className="block text-sm text-gray-600 mb-2 font-medium">{selectedInternetAction.inputPlaceholder || currentT.idPlaceholder}</label>
                <input type="text" placeholder={selectedInternetAction.inputPlaceholder || currentT.idPlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6400dc] text-gray-800 mb-6" />
                <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3.5 rounded-xl transition shadow-md">{currentT.continue}</button>
              </div>
            </div>

          ) : selectedCategory && selectedCategory.id === 'internet_tv' ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{currentT.categories.internet_tv}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{currentT.categories.internet_tv}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-5xl mx-auto">
                {selectedCategory.subCategories.map((sub) => (
                  <div key={sub.id} onClick={() => setSelectedInternetAction(sub)} className="bg-white w-full max-w-xs rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60">
                    <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                      <img src={sub.icon} alt={sub.title} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{sub.title}</h3>
                  </div>
                ))}
              </div>
            </div>

          ) : selectedUtilityAction ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8 flex-wrap">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => { setSelectedUtilityAction(null); setSelectedUtilitySub(null); }} className="hover:text-[#6400dc] font-medium">{currentT.categories.utility}</button>
                {selectedUtilitySub.actions && (
                  <>
                    <span>/</span>
                    <button onClick={() => setSelectedUtilityAction(null)} className="hover:text-[#6400dc] font-medium">{selectedUtilitySub.title}</button>
                  </>
                )}
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedUtilityAction.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">{selectedUtilityAction.title}</h1>
              <div className="bg-white max-w-xl mx-auto rounded-3xl p-8 shadow-sm border border-gray-100">
                {selectedUtilityAction.inputs ? (
                  selectedUtilityAction.inputs.map((inp, idx) => (
                    <div key={idx} className="mb-4">
                      <label className="block text-sm text-gray-600 mb-2 font-medium">{inp}</label>
                      <input type="text" placeholder={inp} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6400dc] text-gray-800" />
                    </div>
                  ))
                ) : (
                  <div className="mb-4">
                    <label className="block text-sm text-gray-600 mb-2 font-medium">{currentT.phonePlaceholder}</label>
                    <input type="text" placeholder={currentT.phonePlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6400dc] text-gray-800" />
                  </div>
                )}
                <button className="w-full mt-4 bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3.5 rounded-xl transition shadow-md">{currentT.continue}</button>
              </div>
            </div>

          ) : selectedUtilitySub && selectedUtilitySub.actions ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => setSelectedUtilitySub(null)} className="hover:text-[#6400dc] font-medium">{currentT.categories.utility}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedUtilitySub.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{selectedUtilitySub.title}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 justify-items-center max-w-2xl mx-auto">
                {selectedUtilitySub.actions.map((act) => (
                  <div key={act.id} onClick={() => setSelectedUtilityAction(act)} className="bg-white w-full max-w-xs rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60">
                    <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                      <img src={act.icon} alt={act.title} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{act.title}</h3>
                  </div>
                ))}
              </div>
            </div>

          ) : selectedCategory && selectedCategory.id === 'utility' ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{currentT.categories.utility}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{currentT.categories.utility}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto">
                {selectedCategory.subCategories.map((sub, idx) => {
                  const isLast = idx === selectedCategory.subCategories.length - 1;
                  return (
                    <div key={sub.id} onClick={() => {
                      if (sub.actions) {
                        setSelectedUtilitySub(sub);
                      } else {
                        setSelectedUtilitySub(sub);
                        setSelectedUtilityAction({ title: sub.title, inputs: sub.inputs });
                      }
                    }} className={`bg-white w-full max-w-sm rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60 ${isLast ? 'sm:col-span-2 lg:col-span-3 justify-self-center' : ''}`}>
                      <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                        <img src={sub.icon} alt={sub.title} className="w-16 h-16 object-contain" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{sub.title}</h3>
                    </div>
                  );
                })}
              </div>
            </div>

          ) : selectedMobileAction ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8 flex-wrap">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => { setSelectedMobileAction(null); setSelectedMobileSub(null); }} className="hover:text-[#6400dc] font-medium">{currentT.categories.international_mobile}</button>
                {selectedMobileSub.id !== 'goodline' && selectedMobileSub.id !== 'yota' && (
                  <>
                    <span>/</span>
                    <button onClick={() => setSelectedMobileAction(null)} className="hover:text-[#6400dc] font-medium">{selectedMobileSub.title}</button>
                  </>
                )}
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedMobileAction.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">{selectedMobileAction.title}</h1>
              <div className="bg-white max-w-xl mx-auto rounded-3xl p-8 shadow-sm border border-gray-100">
                <label className="block text-sm text-gray-600 mb-2 font-medium">{currentT.phonePlaceholder}</label>
                <input type="text" placeholder={currentT.phonePlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6400dc] text-gray-800 mb-6" />
                <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3.5 rounded-xl transition shadow-md">{currentT.continue}</button>
              </div>
            </div>

          ) : selectedMobileSub && selectedMobileSub.actions ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => setSelectedMobileSub(null)} className="hover:text-[#6400dc] font-medium">{currentT.categories.international_mobile}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedMobileSub.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{selectedMobileSub.title}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto">
                {selectedMobileSub.actions.map((act) => (
                  <div key={act.id} onClick={() => setSelectedMobileAction(act)} className="bg-white w-full max-w-xs rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60">
                    <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                      <img src={act.icon} alt={act.title} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{act.title}</h3>
                  </div>
                ))}
              </div>
            </div>

          ) : selectedCategory && selectedCategory.id === 'international_mobile' ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{currentT.categories.international_mobile}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{currentT.categories.international_mobile}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto">
                {selectedCategory.subCategories.map((sub) => (
                  <div key={sub.id} onClick={() => {
                    if (sub.actions) {
                      setSelectedMobileSub(sub);
                    } else {
                      setSelectedMobileSub(sub);
                      setSelectedMobileAction(sub);
                    }
                  }} className="bg-white w-full max-w-xs rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60">
                    <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                      <img src={sub.icon} alt={sub.title} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{sub.title}</h3>
                  </div>
                ))}
              </div>
            </div>

          ) : selectedDirectAction ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8 flex-wrap">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => setSelectedDirectAction(null)} className="hover:text-[#6400dc] font-medium">{currentT.categories.evocabank}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedDirectAction.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">{selectedDirectAction.title}</h1>
              <div className="bg-white max-w-xl mx-auto rounded-3xl p-8 shadow-sm border border-gray-100">
                <label className="block text-sm text-gray-600 mb-2 font-medium">{selectedDirectAction.inputPlaceholder}</label>
                <input type="text" placeholder={selectedDirectAction.inputPlaceholder} className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6400dc] text-gray-800 mb-6" />
                <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3.5 rounded-xl transition shadow-md">{currentT.continue}</button>
              </div>
            </div>

          ) : selectedLoanAction ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8 flex-wrap">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => { setSelectedLoanAction(null); setSelectedSubCategory(null); }} className="hover:text-[#6400dc] font-medium">{currentT.categories.evocabank}</button>
                <span>/</span>
                <button onClick={() => setSelectedLoanAction(null)} className="hover:text-[#6400dc] font-medium">{currentT.evocabankSub.loan_repayment}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedLoanAction.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-10">{selectedLoanAction.title}</h1>
              <div className="bg-white max-w-xl mx-auto rounded-3xl p-8 shadow-sm border border-gray-100">
                <label className="block text-sm text-gray-600 mb-2 font-medium">Վարկային պայմանագրի համար</label>
                <input type="text" placeholder="TVxxxx" className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#6400dc] text-gray-800 mb-6" />
                <button className="w-full bg-[#6400dc] hover:bg-opacity-90 text-white font-bold py-3.5 rounded-xl transition shadow-md">{currentT.continue}</button>
              </div>
            </div>

          ) : selectedSubCategory ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <button onClick={() => setSelectedSubCategory(null)} className="hover:text-[#6400dc] font-medium">{currentT.categories.evocabank}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{selectedSubCategory.title}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-gray-800 mb-12">{selectedSubCategory.title}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 justify-items-center max-w-2xl mx-auto">
                {selectedSubCategory.actions.map((act) => (
                  <div key={act.id} onClick={() => setSelectedLoanAction(act)} className="bg-white w-full max-w-xs rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60">
                    <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                      <img src={act.icon} alt={act.title} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{act.title}</h3>
                  </div>
                ))}
              </div>
            </div>

          ) : selectedCategory && selectedCategory.id === 'evocabank' ? (
            <div>
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-8">
                <button onClick={resetAll} className="hover:text-[#6400dc] font-medium">{currentT.home}</button>
                <span>/</span>
                <span className="text-gray-400 font-medium">{currentT.categories.evocabank}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-center text-[#6400dc] uppercase tracking-wide mb-12">{currentT.categories.evocabank}</h1>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 justify-items-center max-w-4xl mx-auto">
                {selectedCategory.subCategories.map((sub) => (
                  <div key={sub.id} onClick={() => {
                    if (sub.actions) {
                      setSelectedSubCategory(sub);
                    } else {
                      setSelectedDirectAction(sub);
                    }
                  }} className="bg-white w-full max-w-xs rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[250px] group hover:bg-purple-50/60">
                    <div className="w-24 h-24 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 transition-colors duration-300 p-3">
                      <img src={sub.icon} alt={sub.title} className="w-16 h-16 object-contain" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">{sub.title}</h3>
                  </div>
                ))}
              </div>
            </div>

          ) : (
            /* ԳԼԽԱՎՈՐ ԷՋԸ */
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
                {currentT.home}
              </h1>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center">
                {paymentCategories.map((item, index) => {
                  const isLast = index === paymentCategories.length - 1;

                  return (
                    <div
                      key={item.id}
                      onClick={() => {
                        if (item.subCategories) {
                          setSelectedCategory(item);
                        } else if (item.id === 'events') {
                          setSelectedCategory(item);
                        }
                      }}
                      className={`bg-white w-full max-w-sm rounded-3xl p-8 flex flex-col items-center justify-center shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 cursor-pointer min-h-[260px] group hover:bg-purple-50/60 ${
                        isLast ? 'sm:col-span-2 lg:col-span-3 justify-self-center' : ''
                      }`}
                    >
                      <div className="w-28 h-28 rounded-full bg-purple-50 group-hover:bg-purple-100/80 flex items-center justify-center mb-6 shadow-inner transition-colors duration-300 p-4">
                        <img src={item.icon} alt={item.title} className="w-16 h-16 object-contain" />
                      </div>
                      <h3 className="text-lg font-medium text-gray-800 text-center leading-snug group-hover:text-purple-950 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Ֆուտեր */}
      <Footer />
    </div>
  );
}