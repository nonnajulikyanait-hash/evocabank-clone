import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function MermasinGortsynkerner() {
  const [currentPage, setCurrentPage] = useState(1);

  // Page 1 partners (images 1 to 9)
  const page1Partners = [
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/17104032198171/348x150_grayscale.png', alt: 'Chip Store' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/17077436606929/348x150_grayscale.png', alt: 'Ֆաբ Լաբ Հայաստան' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/17107493820339/348x150_grayscale.png', alt: 'IMR' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/17072192942611/348x150_grayscale.png', alt: 'Dignisi' },
    { type: 'hand', src: 'https://www.evoca.am/img/partners-hand.png', alt: 'Evoca Hand' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/17072192635138/348x150_grayscale.png', alt: 'Wizzy' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/17072192435541/348x150_grayscale.png', alt: 'Ka-mo' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/16104577054001/348x150_grayscale.png', alt: 'Dalma Garden Mall' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/16104583322099/348x150_grayscale.png', alt: 'Նոր Տուն' },
  ];

  // Page 2 partners (images 10 to 17)
  const page2Partners = [
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/17689930369925/348x150_grayscale.png', alt: 'Factory' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/16104594273635/348x150_grayscale.png', alt: 'Indigo' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/1610459808737/348x150_grayscale.png', alt: 'Futuris Home' },
    { type: 'hand', src: 'https://www.evoca.am/img/partners-hand.png', alt: 'Evoca Hand' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/16104599802947/348x150_grayscale.png', alt: 'Adelie & the Stone' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/16104603665095/348x150_grayscale.png', alt: 'Earlyone' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/16104604109064/348x150_grayscale.png', alt: 'Easypay' },
    { type: 'img', src: 'https://www.evoca.am/images-cache/partners/1/16104604382658/348x150_grayscale.png', alt: 'Telcell' },
  ];

  const currentPartners = currentPage === 1 ? page1Partners : page2Partners;

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
            <span className="border-b-2 border-white pb-1 cursor-pointer font-black">Գործընկերներ</span>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Մրցանակներ</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">CSR</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Էվոկա ֆինանսական խումբ</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Evoca-ի մասին</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Գործընկերներ</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
            Գործընկերներ
          </h1>

          {/* Partners Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 border border-gray-200 rounded-3xl overflow-hidden bg-white shadow-xs">
            {currentPartners.map((partner, idx) => (
              <div 
                key={idx} 
                className="h-48 p-6 flex items-center justify-center border-b border-r border-gray-200 bg-white hover:bg-gray-50 transition"
              >
                <img 
                  src={partner.src} 
                  alt={partner.alt} 
                  className={`max-h-20 max-w-[180px] object-contain ${partner.type === 'hand' ? 'animate-pulse' : ''}`}
                />
              </div>
            ))}
            {currentPage === 2 && (
              <div className="h-48 p-6 flex items-center justify-center border-b border-r border-gray-200 bg-white"></div>
            )}
          </div>

          {/* Pagination controls */}
          <div className="flex items-center gap-4 pt-4">
            <button 
              onClick={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : 2))}
              className="text-gray-400 hover:text-[#6400dc] cursor-pointer font-bold text-lg"
            >
              ←
            </button>
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCurrentPage(1)}
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition cursor-pointer ${
                  currentPage === 1 ? 'bg-[#6400dc] text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                1
              </button>
              <button 
                onClick={() => setCurrentPage(2)}
                className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs transition cursor-pointer ${
                  currentPage === 2 ? 'bg-[#6400dc] text-white shadow-sm' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                2
              </button>
            </div>
            <button 
              onClick={() => setCurrentPage(prev => (prev < 2 ? prev + 1 : 1))}
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