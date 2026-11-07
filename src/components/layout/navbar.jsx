import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  // Dropdown states
  const [isOnlineAppOpen, setIsOnlineAppOpen] = useState(false);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('ENG');
  
  // Modal states
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  
  // Search modal state
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Full Screen Mega Menu State
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenuTab, setActiveMenuTab] = useState('Anhat');

  const handleCallSubmit = (e) => {
    e.preventDefault();
    alert(`Zangi patver@ uxxarkvec: +374 ${phoneNumber}`);
    setIsCallModalOpen(false);
    setPhoneNumber('');
  };

  const isMerMasinPage = 
    location.pathname.startsWith('/mer-masin') || 
    location.pathname === '/hashvetvutyunner' || 
    location.pathname === '/haytararutyunner';

  const isKarieraPage = 
    location.pathname.startsWith('/kariera') || 
    location.pathname === '/aravelutyunner' || 
    location.pathname === '/harcer' || 
    location.pathname === '/yndunum' ||
    location.pathname === '/praktika' ||
    location.pathname === '/usumnakan' ||
    location.pathname === '/evocabridge';

  const isNorutyunnerPage = 
    location.pathname === '/norutyunner' || 
    location.pathname.startsWith('/bolor-norutyunner');

  const isBlogPage = 
    location.pathname === '/blog' || 
    location.pathname.startsWith('/blog/');

  const isBusinessSection = 
    !isMerMasinPage && !isKarieraPage && !isNorutyunnerPage && !isBlogPage && (
      location.pathname.startsWith('/business') || 
      location.pathname === '/biznesvarker' || 
      location.pathname === '/leasing' || 
      location.pathname === '/special-offer' ||
      location.pathname === '/business-accounts' ||
      location.pathname === '/business-unallocated-metal-accounts' ||
      location.pathname === '/business-deposits' ||
      location.pathname === '/business-securities' ||
      location.pathname === '/bonds' ||
      location.pathname === '/cda-services' ||
      location.pathname === '/repo-reverse-repo' ||
      location.pathname === '/evocainvest-service' ||
      location.pathname === '/trade-finance' ||
      location.pathname === '/factoring' ||
      location.pathname === '/creditive' ||
      location.pathname === '/inkaso' ||
      location.pathname === '/dijital' ||
      location.pathname === '/terminal' ||
      location.pathname === '/sakagner' ||
      location.pathname === '/hayt' ||
      location.pathname === '/mobilepos' ||
      location.pathname === '/ayl' ||
      location.pathname === '/aylpoxancumner'
    );

  const isLoansPage = location.pathname.startsWith('/loans') || location.pathname.startsWith('/varker');
  const isCardsPage = location.pathname.startsWith('/cards') || location.pathname.startsWith('/qarter');
  const isDepositsPage = location.pathname.startsWith('/deposits') || location.pathname.startsWith('/avandner');
  const isAccountsPage = location.pathname.startsWith('/accounts') || location.pathname.startsWith('/hashivner');
  const isTransfersPage = location.pathname.startsWith('/transfers') || location.pathname.startsWith('/poxancumner');
  const isSecuritiesPage = location.pathname.startsWith('/securities') || location.pathname.startsWith('/arjetghter');
  const isSalaryPage = location.pathname.startsWith('/evocasalary');
  const isTouchPage = location.pathname.startsWith('/evocatouch');

  const isLeasingSub = location.pathname === '/leasing' || location.pathname === '/special-offer';
  const isAccountsSub = location.pathname === '/business-accounts' || location.pathname === '/business-unallocated-metal-accounts';
  const isSecuritiesSub = 
    location.pathname === '/business-securities' || 
    location.pathname === '/bonds' || 
    location.pathname === '/cda-services' || 
    location.pathname === '/repo-reverse-repo' ||
    location.pathname === '/evocainvest-service';
  const isTradeFinanceSub = 
    location.pathname === '/trade-finance' || 
    location.pathname === '/factoring' || 
    location.pathname === '/creditive' ||
    location.pathname === '/inkaso';
  const isDijitalSub = 
    location.pathname === '/dijital' || 
    location.pathname === '/terminal' || 
    location.pathname === '/sakagner' ||
    location.pathname === '/hayt' ||
    location.pathname === '/mobilepos';
  const isAylSub = location.pathname === '/ayl' || location.pathname === '/aylpoxancumner';

  const isAnhatPage = !isBusinessSection && !isMerMasinPage && !isKarieraPage && !isNorutyunnerPage && !isBlogPage;

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* Top Bar */}
      <div className="bg-[#f8f9fa] border-b border-gray-100 text-[11px] text-gray-600 py-1.5 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex gap-5 font-normal">
            <Link 
              to="/" 
              className={`pb-1 cursor-pointer transition ${isAnhatPage ? 'text-[#6400dc] border-b-2 border-[#6400dc] font-semibold' : 'hover:text-[#6400dc]'}`}
            >
              Անհատ
            </Link>

            <span 
              onClick={() => navigate('/business-loans')}
              className={`cursor-pointer transition ${isBusinessSection ? 'text-[#6400dc] border-b-2 border-[#6400dc] font-semibold' : 'hover:text-[#6400dc]'}`}
            >
              Բիզնես
            </span>

            <Link 
              to="/akntartayinvcharumner" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-[#6400dc] transition cursor-pointer"
            >
              Ակնթարթային վճարումներ
            </Link>
            
            <Link 
              to="/mer-masin" 
              className={`transition ${isMerMasinPage ? 'text-[#6400dc] font-semibold border-b-2 border-[#6400dc]' : 'hover:text-[#6400dc]'}`}
            >
              Մեր մասին
            </Link>

            <Link 
              to="/norutyunner" 
              className={`transition ${isNorutyunnerPage ? 'text-[#6400dc] font-semibold border-b-2 border-[#6400dc]' : 'hover:text-[#6400dc]'}`}
            >
              Նորություններ
            </Link>

            <Link 
              to="/blog" 
              className={`transition ${isBlogPage ? 'text-[#6400dc] font-semibold border-b-2 border-[#6400dc]' : 'hover:text-[#6400dc]'}`}
            >
              Բլոգ
            </Link>
            
            <Link 
              to="/kariera" 
              className={`transition ${isKarieraPage ? 'text-[#6400dc] font-semibold border-b-2 border-[#6400dc]' : 'hover:text-[#6400dc]'}`}
            >
              Կարիերա
            </Link>
          </div>

          <div className="flex items-center gap-6">
            {/* Առցանց հայտեր Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsOnlineAppOpen(true)}
              onMouseLeave={() => setIsOnlineAppOpen(false)}
            >
              <span className="text-[#6400dc] font-medium cursor-pointer flex items-center gap-1 select-none py-1">
                Առցանց հայտեր ▾
              </span>
              {isOnlineAppOpen && (
                <div className="absolute right-0 top-full w-52 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 text-neutral-800 text-xs">
                  <Link to="/smuz-varkavorum" className="block px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition">ՓՄՁ վարկավորում</Link>
                  <Link to="/qarter" state={{ cardTitle: "Visa Infinite" }} className="block px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition">Visa Infinite</Link>
                  <Link to="/qarter" state={{ cardTitle: "Mastercard Gold" }} className="block px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition">MasterCard Gold</Link>
                  <Link to="/qarter" state={{ cardTitle: "Visa Gold" }} className="block px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition">Visa Gold</Link>
                </div>
              )}
            </div>

            {/* Հետադարձ կապ Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsFeedbackOpen(true)}
              onMouseLeave={() => setIsFeedbackOpen(false)}
            >
              <span className="text-[#6400dc] font-medium cursor-pointer flex items-center gap-1 select-none py-1">
                Հետադարձ կապ ▾
              </span>
              {isFeedbackOpen && (
                <div className="absolute right-0 top-full w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-50 text-neutral-800 text-xs font-semibold">
                  <div className="px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">+374 10 605555</div>
                  <div className="px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">+374 98 205555</div>
                  <div className="px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer">+374 99 605555</div>
                  <div className="px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer border-t border-gray-100 mt-1 pt-2">8444</div>
                  <div 
                    onClick={() => {
                      setIsFeedbackOpen(false);
                      setIsCallModalOpen(true);
                    }}
                    className="px-4 py-2 hover:bg-purple-50 hover:text-[#6400dc] transition cursor-pointer text-[#6400dc]"
                  >
                    Պատվիրել զանգ
                  </div>
                </div>
              )}
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4 text-gray-500 ml-2">
              <Link to="/qartez" className="cursor-pointer inline-flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwoY50aiSYY_HihVHo6AXDde2PN9vsQfWiQwCE0ZLCaA&s=10" alt="Location" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition" />
              </Link>

              <Link to="/footerharcer" className="cursor-pointer inline-flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZgomt6LOx3Q5D-yOJFdIXXizAzApLiU8yT4Zm7KzRXg&s=10" alt="Help" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition" />
              </Link>

              {/* Search Icon (Fixed with direct image link) */}
              <span onClick={() => setIsSearchOpen(true)} className="cursor-pointer inline-flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4s9QViADSn4yd8_bLjD2XGOAliNo3bNdcshMRvmTVg&s=10" alt="Search" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition" />
              </span>

              {/* Language dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setIsLangOpen(true)}
                onMouseLeave={() => setIsLangOpen(false)}
              >
                <span className="cursor-pointer inline-flex items-center">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTytoBQmKQaYjpTL6CJlzRNSlEjF-zMFM7LbiFgIMygzQ&s=10" alt="Language" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition" />
                </span>

                {isLangOpen && (
                  <div className="absolute right-0 top-full w-24 bg-[#6400dc] text-white rounded-xl shadow-xl py-2 z-50 text-xs font-bold flex flex-col items-center space-y-1">
                    <div onClick={() => { setCurrentLang('ՀԱՅ'); setIsLangOpen(false); }} className={`w-full text-center py-1.5 cursor-pointer hover:bg-white/20 transition ${currentLang === 'ՀԱՅ' ? 'bg-white/10 underline' : ''}`}>ՀԱՅ</div>
                    <div onClick={() => { setCurrentLang('ENG'); setIsLangOpen(false); }} className={`w-full text-center py-1.5 cursor-pointer hover:bg-white/20 transition ${currentLang === 'ENG' ? 'bg-white/10 underline' : ''}`}>ENG</div>
                    <div onClick={() => { setCurrentLang('РУС'); setIsLangOpen(false); }} className={`w-full text-center py-1.5 cursor-pointer hover:bg-white/20 transition ${currentLang === 'РУС' ? 'bg-white/10 underline' : ''}`}>РУС</div>
                  </div>
                )}
              </div>

              {/* Menu icon - Opens Mega Menu Overlay */}
              <span onClick={() => setIsMenuOpen(true)} className="cursor-pointer inline-flex items-center">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSskqKoU9CXrPFsrcvFQPYZqweeHfycPcnR-DJtSABUHg&s=10" alt="Menu" className="w-5 h-5 object-contain opacity-70 hover:opacity-100 transition" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto py-3 px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-1.5 cursor-pointer">
          <span className="text-2xl font-black text-[#6400dc] tracking-tighter">evoca</span>
          <span className="w-2 h-2 bg-[#6400dc] rounded-full"></span>
        </Link>

        {isKarieraPage ? (
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-bold text-gray-800">
            <Link to="/kariera" className={`transition ${location.pathname === '/kariera' || location.pathname === '/aravelutyunner' || location.pathname === '/harcer' || location.pathname === '/yndunum' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Evoca Լայֆ</Link>
            <Link to="/praktika" className={`transition ${location.pathname === '/praktika' || location.pathname === '/usumnakan' || location.pathname === '/evocabridge' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Աշխատանք և պրակտիկա</Link>
          </nav>
        ) : isMerMasinPage ? (
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-gray-800">
            <Link to="/mer-masin" className={`transition ${location.pathname === '/mer-masin' || (location.pathname.startsWith('/mer-masin/') && location.pathname !== '/hashvetvutyunner') ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Evoca-ի մասին</Link>
            <Link to="/hashvetvutyunner" className={`transition ${location.pathname === '/hashvetvutyunner' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Հաշվետվություններ</Link>
            <Link to="/haytararutyunner" className={`transition ${location.pathname === '/haytararutyunner' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Հայտարարություններ</Link>
          </nav>
        ) : isBusinessSection ? (
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-gray-800">
            <Link to="/business-loans" className={`transition ${location.pathname === '/business-loans' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Վարկեր</Link>
            <Link to="/leasing" className={`transition ${isLeasingSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Լիզինգ</Link>
            <Link to="/business-accounts" className={`transition ${isAccountsSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Հաշիվներ</Link>
            <Link to="/business-deposits" className={`transition ${location.pathname === '/business-deposits' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Ավանդներ</Link>
            <Link to="/business-securities" className={`transition ${isSecuritiesSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Արժեթղթերի շուկա</Link>
            <Link to="/trade-finance" className={`transition ${isTradeFinanceSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Առևտրի ֆինանսավորում</Link>
            <Link to="/dijital" className={`transition ${isDijitalSub ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Դիջիթալ</Link>
            <Link to="/ayl" className={`transition ${location.pathname === '/ayl' ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Այլ</Link>
          </nav>
        ) : (
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-bold text-gray-800">
            <Link to="/loans" className={`transition ${isLoansPage ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Վարկեր</Link>
            <Link to="/qarter" className={`transition ${isCardsPage ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Քարտեր</Link>
            <Link to="/deposits" className={`transition ${isDepositsPage ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Ավանդներ</Link>
            <Link to="/accounts" className={`transition ${isAccountsPage ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Հաշիվներ</Link>
            <Link to="/transfers" className={`transition ${isTransfersPage ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Փոխանցումներ</Link>
            <Link to="/securities" className={`transition ${isSecuritiesPage ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>Արժեթղթեր</Link>
            <Link to="/evocasalary" className={`transition ${isSalaryPage ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>EvocaSALARY</Link>
            <Link to="/evocatouch" className={`transition ${isTouchPage ? 'text-[#6400dc]' : 'hover:text-[#6400dc]'}`}>EvocaTOUCH</Link>
          </nav>
        )}

        <Link 
          to="/evocaonline" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-[11px] px-4 py-2 rounded-full transition shadow-sm cursor-pointer inline-block text-center"
        >
          EvocaONLINE
        </Link>
      </div>

      {/* Sub-Bar */}
      {isBusinessSection && (
        <div className="bg-[#6400dc] text-white px-12 text-xs font-bold border-b border-white">
          <div className="container mx-auto pl-6 flex gap-8 items-center h-12 overflow-x-auto">
            {isDijitalSub ? (
              <>
                <Link to="/dijital" className={`h-full flex items-center transition whitespace-nowrap ${location.pathname === '/dijital' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>V-POS Տերմինալ</Link>
                <Link to="/terminal" className={`h-full flex items-center transition whitespace-nowrap ${location.pathname === '/terminal' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>POS Տերմինալ</Link>
                <Link to="/sakagner" className={`h-full flex items-center transition whitespace-nowrap ${location.pathname === '/sakagner' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Սակագներ</Link>
                <Link to="/hayt" className={`h-full flex items-center transition whitespace-nowrap ${location.pathname === '/hayt' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Տերմինալի տեղադրման հայտ</Link>
                <Link to="/mobilepos" className={`h-full flex items-center transition whitespace-nowrap ${location.pathname === '/mobilepos' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Evoca Mobile POS' mPOS</Link>
              </>
            ) : isAylSub ? (
              <>
                <Link to="/ayl" className={`h-full flex items-center transition whitespace-nowrap ${location.pathname === '/ayl' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Պահատուփեր</Link>
                <Link to="/aylpoxancumner" className={`h-full flex items-center transition whitespace-nowrap ${location.pathname === '/aylpoxancumner' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Փոխանցումներ</Link>
              </>
            ) : isLeasingSub ? (
              <>
                <Link to="/leasing" className={`h-full flex items-center transition ${location.pathname === '/leasing' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Evoca Leasing</Link>
                <Link to="/special-offer" className={`h-full flex items-center transition ${location.pathname === '/special-offer' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Հատուկ առաջարկ</Link>
              </>
            ) : isAccountsSub ? (
              <>
                <Link to="/business-accounts" className={`h-full flex items-center transition ${location.pathname === '/business-accounts' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Հաշիվների բացում և սպասարկում</Link>
                <Link to="/business-unallocated-metal-accounts" className={`h-full flex items-center transition ${location.pathname === '/business-unallocated-metal-accounts' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Առարկայազուրկ մետաղական հաշիվներ</Link>
              </>
            ) : isSecuritiesSub ? (
              <>
                <Link to="/business-securities" className={`h-full flex items-center transition ${location.pathname === '/business-securities' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Ներդրումային ծառայություններ</Link>
                <Link to="/bonds" className={`h-full flex items-center transition ${location.pathname === '/bonds' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Պարտատոմսեր</Link>
                <Link to="/cda-services" className={`h-full flex items-center transition ${location.pathname === '/cda-services' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>ՀԿԴ ծառայություններ</Link>
                <Link to="/repo-reverse-repo" className={`h-full flex items-center transition ${location.pathname === '/repo-reverse-repo' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Ռեպո/Հակադարձ ռեպո գործարքներ</Link>
                <Link to="/evocainvest-service" className={`h-full flex items-center transition ${location.pathname === '/evocainvest-service' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>EvocaINVEST</Link>
              </>
            ) : isTradeFinanceSub ? (
              <>
                <Link to="/trade-finance" className={`h-full flex items-center transition ${location.pathname === '/trade-finance' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Երաշխիք</Link>
                <Link to="/factoring" className={`h-full flex items-center transition ${location.pathname === '/factoring' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Ֆակտորինգային ֆինանսավորում</Link>
                <Link to="/creditive" className={`h-full flex items-center transition ${location.pathname === '/creditive' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Ակրեդիտիվ</Link>
                <Link to="/inkaso" className={`h-full flex items-center transition ${location.pathname === '/inkaso' ? 'border-b-2 border-white text-white font-black' : 'text-purple-200 hover:text-white'}`}>Ինկասո</Link>
              </>
            ) : (
              <div className="h-full flex items-center border-b-2 border-white text-white font-black">
                {location.pathname === '/business-deposits' ? 'Բիզնես ավանդներ' : 'Բիզնես վարկեր'}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Full-Screen Mega Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] flex bg-black">
          {/* Left Dark Sidebar */}
          <div className="w-1/3 bg-[#0a0a0c] text-white flex flex-col justify-between p-12 relative border-r border-white/10">
            <div>
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="inline-block mb-16">
                <span className="text-3xl font-black text-white tracking-tighter">evoca</span>
                <span className="w-2.5 h-2.5 bg-[#6400dc] rounded-full inline-block ml-1"></span>
              </Link>

              <div className="flex flex-col space-y-6 text-xl font-extrabold">
                <button 
                  onClick={() => setActiveMenuTab('Anhat')} 
                  className={`text-left transition ${activeMenuTab === 'Anhat' ? 'text-[#6400dc]' : 'text-white hover:text-purple-300'}`}
                >
                  Անհատ
                </button>
                <button 
                  onClick={() => setActiveMenuTab('Business')} 
                  className={`text-left transition ${activeMenuTab === 'Business' ? 'text-[#6400dc]' : 'text-white hover:text-purple-300'}`}
                >
                  Բիզնես
                </button>
                <Link 
                  to="/akntartayinvcharumner" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-left text-white hover:text-purple-300 transition"
                >
                  Ակնթարթային վճարումներ
                </Link>
                <button 
                  onClick={() => setActiveMenuTab('MerMasin')} 
                  className={`text-left transition ${activeMenuTab === 'MerMasin' ? 'text-[#6400dc]' : 'text-white hover:text-purple-300'}`}
                >
                  Մեր մասին
                </button>
                <Link 
                  to="/norutyunner" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-left text-white hover:text-purple-300 transition"
                >
                  Նորություններ
                </Link>
                <Link 
                  to="/blog" 
                  onClick={() => setIsMenuOpen(false)} 
                  className="text-left text-white hover:text-purple-300 transition"
                >
                  Բլոգ
                </Link>
                <button 
                  onClick={() => setActiveMenuTab('Kariera')} 
                  className={`text-left transition ${activeMenuTab === 'Kariera' ? 'text-[#6400dc]' : 'text-white hover:text-purple-300'}`}
                >
                  Կարիերա
                </button>
              </div>
            </div>
          </div>

          {/* Right Purple Content Panel */}
          <div className="w-2/3 bg-[#6400dc] text-white p-16 relative overflow-y-auto flex flex-col justify-between">
            {/* Close Button */}
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white hover:opacity-80 text-3xl font-bold cursor-pointer"
            >
              ✕
            </button>

            {/* Dynamic Content Based on Active Menu Tab */}
            <div className="mt-8">
              {activeMenuTab === 'Anhat' && (
                <div className="grid grid-cols-2 gap-12 text-sm">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-black mb-3">Վարկեր</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/loans" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Վարկեր</Link>
                        <Link to="/varker" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Վարկային պատմություն և սքոր</Link>
                        <Link to="/loans" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Կարևոր տեղեկատվություն</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Ավանդներ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/deposits" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ավանդներ</Link>
                        <Link to="/deposits" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Կարևոր տեղեկատվություն</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Փոխանցումներ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/transfers" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Դրամական փոխանցումներ</Link>
                        <Link to="/transfers" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Վճարային համակարգեր</Link>
                      </div>
                    </div>
                    <div>
                      <Link to="/evocasalary" onClick={() => setIsMenuOpen(false)} className="text-xl font-black block hover:underline">EvocaSALARY</Link>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-black mb-3">Քարտեր</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/qarter" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Քարտեր</Link>
                        <Link to="/qarter" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Քարտերի տրամադրում և սպասարկում</Link>
                        <Link to="/qarter" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Սոցիալական ապահովության վճարային քարտեր</Link>
                        <Link to="/qarter" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Evoca Benefits</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Հաշիվներ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/accounts" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Evoca խնայողական հաշիվ</Link>
                        <Link to="/accounts" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Հաշիվների բացում և սպասարկում</Link>
                        <Link to="/accounts" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Առարկայազուրկ մետաղական հաշիվներ</Link>
                        <Link to="/accounts" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ոչ ռեզիդենտ հաճախորդների հեռավար սպասարկում</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Արժեթղթեր</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/securities" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ներդրումային ծառայություններ</Link>
                        <Link to="/bonds" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Պարտատոմսեր</Link>
                        <Link to="/cda-services" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">ՀԿԴ ծառայություններ</Link>
                        <Link to="/repo-reverse-repo" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ռեպո/Հակադարձ Ռեպո գործարքներ</Link>
                        <Link to="/evocainvest-service" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">EvocaINVEST</Link>
                      </div>
                    </div>
                    <div>
                      <Link to="/evocatouch" onClick={() => setIsMenuOpen(false)} className="text-xl font-black block hover:underline">EvocaTOUCH</Link>
                    </div>
                  </div>
                </div>
              )}

              {activeMenuTab === 'Business' && (
                <div className="grid grid-cols-2 gap-12 text-sm">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-black mb-3">Վարկեր</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/business-loans" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Բիզնես վարկեր</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Հաշիվներ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/business-accounts" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Հաշիվների բացում և սպասարկում</Link>
                        <Link to="/business-unallocated-metal-accounts" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Առարկայազուրկ մետաղական հաշիվներ</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Արժեթղթերի շուկա</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/business-securities" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ներդրումային ծառայություններ</Link>
                        <Link to="/bonds" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Պարտատոմսեր</Link>
                        <Link to="/cda-services" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">ՀԿԴ ծառայություններ</Link>
                        <Link to="/repo-reverse-repo" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ռեպո/Հակադարձ ռեպո գործարքներ</Link>
                        <Link to="/evocainvest-service" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">EvocaINVEST</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Դիջիթալ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/dijital" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">V-POS Տերմինալ</Link>
                        <Link to="/terminal" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">POS Տերմինալ</Link>
                        <Link to="/sakagner" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Սակագներ</Link>
                        <Link to="/hayt" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Տերմինալի տեղադրման հայտ</Link>
                        <Link to="/mobilepos" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Evoca Mobile POS' mPOS</Link>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-black mb-3">Լիզինգ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/leasing" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Evoca Leasing</Link>
                        <Link to="/special-offer" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Հատուկ առաջարկ</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Ավանդներ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/business-deposits" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Դասական ավանդ</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Առևտրի ֆինանսավորում</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/trade-finance" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Երաշխիք</Link>
                        <Link to="/factoring" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ֆակտորինգային ֆինանսավորում</Link>
                        <Link to="/creditive" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ակրեդիտիվ</Link>
                        <Link to="/inkaso" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ինկասո</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Այլ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/ayl" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Պահատուփեր</Link>
                        <Link to="/aylpoxancumner" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Փոխանցումներ</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeMenuTab === 'MerMasin' && (
                <div className="grid grid-cols-2 gap-12 text-sm">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-black mb-3">Evoca-ի մասին</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/mer-masin" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ընդհանուր</Link>
                        <Link to="/mer-masin" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Կառուցվածք</Link>
                        <Link to="/mer-masin" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Բաժնետերեր</Link>
                        <Link to="/mer-masin" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ղեկավարություն</Link>
                        <Link to="/mer-masin" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Գործընկերներ</Link>
                        <Link to="/mer-masin" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Մրցանակներ</Link>
                        <Link to="/mer-masin" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">CSR</Link>
                        <Link to="/mer-masin" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Էվոկա ֆինանսական խումբ</Link>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-black mb-3">Հաշվետվություններ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/hashvetvutyunner" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Աուդիտորական եզրակացություն</Link>
                        <Link to="/hashvetvutyunner" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ֆինանսական հաշվետվություններ</Link>
                        <Link to="/hashvetvutyunner" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ներդրողների համար</Link>
                        <Link to="/hashvetvutyunner" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Կիսամյակային հաշվետվություն</Link>
                        <Link to="/hashvetvutyunner" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Տարեկան հաշվետվություն</Link>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Link to="/haytararutyunner" onClick={() => setIsMenuOpen(false)} className="text-xl font-black block hover:underline">Հայտարարություններ</Link>
                    </div>
                  </div>
                </div>
              )}

              {activeMenuTab === 'Kariera' && (
                <div className="grid grid-cols-2 gap-12 text-sm">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-black mb-3">Evoca Լայֆ</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/kariera" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Մշակույթ</Link>
                        <Link to="/aravelutyunner" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Առավելություններ</Link>
                        <Link to="/harcer" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Հաճախ տրվող հարցեր</Link>
                        <Link to="/yndunum" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ինչպես ընդունվել աշխատանքի Evocabank-ում</Link>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-black mb-3">Աշխատանք և պրակտիկա</h4>
                      <div className="flex flex-col space-y-2 opacity-80 text-xs">
                        <Link to="/praktika" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Աշխատանք Evoca-ում</Link>
                        <Link to="/usumnakan" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">Ուսումնական պրակտիկա</Link>
                        <Link to="/evocabridge" onClick={() => setIsMenuOpen(false)} className="hover:opacity-100">EvocaBRIDGE</Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Search Modal Window */}
      {isSearchOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-start justify-center pt-20 p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 relative shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-gray-200 pb-4">
              <div className="flex items-center gap-3 w-full mr-4">
                <span className="text-gray-400 text-lg">🔍</span>
                <input 
                  type="text" 
                  autoFocus
                  placeholder="Որոնում..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full text-lg font-semibold text-neutral-900 focus:outline-none bg-transparent"
                />
              </div>
              <button 
                onClick={() => setIsSearchOpen(false)}
                className="text-gray-400 hover:text-gray-700 text-xl font-bold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 max-h-80 overflow-y-auto text-sm text-gray-600">
              {searchQuery.trim() === '' ? (
                <p className="text-gray-400 text-center py-6">Մուտքագրեք որոնելու բառը...</p>
              ) : (
                <div className="space-y-2">
                  <div onClick={() => { setIsSearchOpen(false); navigate('/loans'); }} className="p-3 hover:bg-purple-50 rounded-xl cursor-pointer transition flex justify-between items-center">
                    <span className="font-semibold text-neutral-900">Վարկեր (Անհատ)</span>
                    <span className="text-xs text-[#6400dc]">Անցնել ➔</span>
                  </div>
                  <div onClick={() => { setIsSearchOpen(false); navigate('/qarter'); }} className="p-3 hover:bg-purple-50 rounded-xl cursor-pointer transition flex justify-between items-center">
                    <span className="font-semibold text-neutral-900">Քարտեր և տեսակներ</span>
                    <span className="text-xs text-[#6400dc]">Անցնել ➔</span>
                  </div>
                  <div onClick={() => { setIsSearchOpen(false); navigate('/qartez'); }} className="p-3 hover:bg-purple-50 rounded-xl cursor-pointer transition flex justify-between items-center">
                    <span className="font-semibold text-neutral-900">Բանկի հասցեները և մասնաճյուղերը</span>
                    <span className="text-xs text-[#6400dc]">Անցնել ➔</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hetadardz Zangi Patver Modal */}
      {isCallModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-8 relative shadow-2xl space-y-6">
            <button 
              onClick={() => setIsCallModalOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-gray-700 text-xl font-bold cursor-pointer"
            >
              ✕
            </button>

            <div className="space-y-2">
              <h3 className="text-xl font-black text-neutral-950">Հետզանգի պատվեր</h3>
              <p className="text-gray-500 text-xs leading-relaxed">
                Խնդրում ենք մուտքագրել Ձեր հեռախոսահամարը, և մեր մասնագետները հնարավորինս արագ կապ կհաստատեն Ձեզ հետ:
              </p>
            </div>

            <form onSubmit={handleCallSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-neutral-700 block">Հեռախոսահամար</label>
                <div className="flex">
                  <span className="bg-gray-100 border border-r-0 border-gray-300 rounded-l-xl px-3 py-3 text-xs text-gray-600 flex items-center font-bold">+374</span>
                  <input 
                    type="tel" 
                    required
                    placeholder="XX XX XX XX"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="w-full border border-gray-300 rounded-r-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6400dc]" 
                  />
                </div>
              </div>

              <div className="flex justify-center">
                <button 
                  type="submit"
                  className="bg-[#6400dc] hover:bg-opacity-90 text-white font-bold text-xs uppercase px-8 py-3.5 rounded-xl transition shadow-sm cursor-pointer w-full"
                >
                  Հաստատել
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </header>
  );
}