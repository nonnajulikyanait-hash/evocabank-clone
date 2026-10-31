import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Mrcanakner() {
  const [currentPage, setCurrentPage] = useState(1);

  // Page 1 awards (1 to 8)
  const page1Awards = [
    { year: '2026 թ.', title: 'Դեպոզիտարիայի ավտոմատացված համակարգերի կիրառման լավագույն գործընկեր', img: 'https://www.evoca.am/images-cache/awards/1/17823898849383/140x65.png' },
    { year: '2026 թ.', title: 'Լավագույն ՓՄՁ բանկը Հայաստանում', img: 'https://www.evoca.am/images-cache/awards/1/17793449348871/140x65.png' },
    { year: '2026 թ.', title: 'Excellence in Travel Segment Innovation', img: 'https://www.evoca.am/images-cache/awards/1/17793444931672/140x65.png' },
    { year: '2025 թ.', title: 'Best AI-Powered Mobile App', img: 'https://www.evoca.am/images-cache/awards/1/17701876298505/140x65.png' },
    { year: '2025 թ.', title: 'Highest Cashless Achievement', img: 'https://www.evoca.am/images-cache/awards/1/17696923392309/140x65.png' },
    { year: '2025 թ.', title: 'Լավագույն թվային բանկը Հայաստանում 2025', img: 'https://www.evoca.am/images-cache/awards/1/17635322442852/140x65.png' },
    { year: '2025 թ.', title: 'Ամենանորարար ՓՄՁ վարկավորման գործընկերը ՀՀ-ում', img: 'https://www.evoca.am/images-cache/awards/1/17574258664115/140x65.jpg' },
    { year: '2025 թ.', title: 'Լավագույն Բանկը Հայաստանում 2025', img: 'https://www.evoca.am/images-cache/awards/1/1751877049822/140x65.png' },
  ];

  // Page 2 awards (9 to 16)
  const page2Awards = [
    { year: '2025 թ.', title: 'Best Mobile Banking in Armenia', img: 'https://www.evoca.am/images-cache/awards/1/17383050368673/140x65.png' },
    { year: '2025 թ.', title: 'Լավագույն ՓՄՁ բանկը Հայաստանում', img: 'https://www.evoca.am/images-cache/awards/1/17435922177711/140x65.png' },
    { year: '2025 թ.', title: 'Most Innovative Digital Bank in Armenia', img: 'https://www.evoca.am/images-cache/awards/1/17383046771156/140x65.png' },
    { year: '2025 թ.', title: 'Award for the Development of International Banking Cooperation', img: 'https://www.evoca.am/images-cache/awards/1/17518766542368/140x65.jpg' },
    { year: '2025 թ.', title: 'Excellence in New Products Development', img: 'https://www.evoca.am/images-cache/awards/1/17375257427062/140x65.png' },
    { year: '2024 թ.', title: 'Highest Cashless Ratio Achievement', img: 'https://www.evoca.am/images-cache/awards/1/1737525618015/140x65.png' },
    { year: '2024 թ.', title: 'Լավագույն բջջային նորարարական բանկային հավելված՝ EvocaTOUCH', img: 'https://www.evoca.am/images-cache/awards/1/17313099132025/140x65.jpg' },
    { year: '2024 թ.', title: 'Լավագույն վեբ դիզայն` evoca.am', img: 'https://www.evoca.am/images-cache/awards/1/17313098079024/140x65.jpg' },
  ];

  // Page 3 awards (17 to 20 + older examples)
  const page3Awards = [
    { year: '2025 թ.', title: 'Լավագույն ՓՄՁ բանկը Հայաստանում', img: 'https://www.evoca.am/images-cache/awards/1/17313900934253/140x65.png' },
    { year: '2024 թ.', title: 'Ամենաինովացիոն թվային բանկը Հայաստանում', img: 'https://www.evoca.am/images-cache/awards/1/17072198344896/140x65.png' },
    { year: '2024 թ.', title: 'Լավագույն թվային բանկը Հայաստանում', img: 'https://www.evoca.am/images-cache/awards/1/17241397647186/140x65.png' },
    { year: '2024 թ.', title: 'Աջակցություն Project Management-ի զարգացմանը', img: 'https://www.evoca.am/images-cache/awards/1/17310464503321/140x65.png' },
  ];

  const getAwardsByPage = () => {
    if (currentPage === 1) return page1Awards;
    if (currentPage === 2) return page2Awards;
    return page3Awards;
  };

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Sub-header navigation menu for About Us */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Ընդհանուր</Link>
            <Link to="/mer-masin/karucvacq" className="text-purple-200 hover:text-white cursor-pointer">Կառուցվածք</Link>
            <Link to="/mer-masin/bajneterer" className="text-purple-200 hover:text-white cursor-pointer">Բաժնետերեր</Link>
            <Link to="/mer-masin/xekavarutyun" className="text-purple-200 hover:text-white cursor-pointer">Ղեկավարություն</Link>
            <Link to="/mer-masin/gortsynkerner" className="text-purple-200 hover:text-white cursor-pointer">Գործընկերներ</Link>
            <span className="border-b-2 border-white pb-1 cursor-pointer font-black">Մրցանակներ</span>
            <Link to="/mer-masin/csr" className="text-purple-200 hover:text-white cursor-pointer">CSR</Link>
            <Link to="/mer-masin/xumb" className="text-purple-200 hover:text-white cursor-pointer">Էվոկա ֆինանսական խումբ</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Evoca-ի մասին</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Մրցանակներ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
            Մրցանակներ
          </h1>

          {/* Awards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {getAwardsByPage().map((award, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div className="space-y-3">
                  <span className="text-[#6400dc] font-extrabold text-lg block">{award.year}</span>
                  <h3 className="text-neutral-900 font-bold text-base md:text-lg leading-snug">
                    {award.title}
                  </h3>
                </div>
                <div className="flex justify-end pt-6 mt-4 border-t border-gray-50">
                  <img 
                    src={award.img} 
                    alt={award.title} 
                    className="h-10 object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <div className="flex items-center gap-4 pt-6">
            <button 
              onClick={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : 3))}
              className="text-gray-400 hover:text-[#6400dc] cursor-pointer font-bold text-lg"
            >
              ←
            </button>
            <div className="flex items-center gap-3">
              {[1, 2, 3].map((num) => (
                <button 
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition cursor-pointer ${
                    currentPage === num ? 'bg-[#6400dc] text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
            <button 
              onClick={() => setCurrentPage(prev => (prev < 3 ? prev + 1 : 1))}
              className="text-gray-400 hover:text-[#6400dc] cursor-pointer font-bold text-lg"
            >
              →
            </button>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}