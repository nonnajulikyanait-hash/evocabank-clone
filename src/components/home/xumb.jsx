import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Xumb() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Sub-header navigation menu for About Us */}
        <div className="bg-[#6400dc] text-white py-3 px-4 md:px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 text-xs font-semibold overflow-x-auto whitespace-nowrap scrollbar-none">
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer shrink-0">Ընդհանուր</Link>
            <Link to="/mer-masin/karucvacq" className="text-purple-200 hover:text-white cursor-pointer shrink-0">Կառուցվածք</Link>
            <Link to="/mer-masin/bajneterer" className="text-purple-200 hover:text-white cursor-pointer shrink-0">Բաժնետերեր</Link>
            <Link to="/mer-masin/xekavarutyun" className="text-purple-200 hover:text-white cursor-pointer shrink-0">Ղեկավարություն</Link>
            <Link to="/mer-masin/gortsynkerner" className="text-purple-200 hover:text-white cursor-pointer shrink-0">Գործընկերներ</Link>
            <Link to="/mer-masin/mrcanakner" className="text-purple-200 hover:text-white cursor-pointer shrink-0">Մրցանակներ</Link>
            <Link to="/mer-masin/csr" className="text-purple-200 hover:text-white cursor-pointer shrink-0">CSR</Link>
            <span className="border-b-2 border-white pb-1 cursor-pointer font-black shrink-0">Էվոկա ֆինանսական խումբ</span>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-10 md:space-y-12">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2 overflow-x-auto whitespace-nowrap">
            <Link to="/mer-masin" className="hover:text-[#6400dc] shrink-0">Մեր մասին</Link>
            <span>/</span>
            <span className="shrink-0">Evoca-ի մասին</span>
            <span>/</span>
            <span className="text-gray-700 font-medium shrink-0">Էվոկա ֆինանսական խումբ</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 mb-6 md:mb-8">
            Էվոկա ֆինանսական խումբ
          </h1>

          {/* Content Section with Social Icons */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Social Icons Sidebar */}
            <div className="md:col-span-1 flex md:flex-col gap-3 text-gray-400 shrink-0">
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-purple-100 hover:text-[#6400dc] transition">f</span>
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-purple-100 hover:text-[#6400dc] transition">in</span>
              <span className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-purple-100 hover:text-[#6400dc] transition">✉</span>
            </div>

            {/* Main Text Details */}
            <div className="md:col-span-11 space-y-4 md:space-y-6 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                ՀՀ կենտրոնական բանկի խորհրդի 30․06․2025թ․ թիվ 05 ԲԳ Ա որոշմամբ Evocabank-ը («ԷՎՈԿԱԲԱՆԿ» ԲԲԸ) և Wilco-ն («Վիլկո» ՍՊԸ) միավորվում են՝ դառնալով մեկ ֆինանսական խումբ՝ Evoca անվամբ։
              </p>
              <p>
                Evocabank-ը նշանակվել է Evoca ֆինանսական խմբի պատասխանատու անձ։
              </p>
              <p>
                Wilco կապիտալի կառավարման ընկերության մասին ամբողջական տեղեկատվությունը՝ <a href="#" className="text-[#6400dc] underline font-medium hover:text-purple-800">այստեղ</a>:
              </p>
            </div>
          </div>

          {/* Organizational Chart Image Section */}
          <div className="pt-4 md:pt-8 flex justify-center overflow-x-auto">
            <img 
              src="https://www.evoca.am/file_manager/Evoca%20financial%20group/%C2%AB%D4%B7%D5%8E%D5%88%D4%BF%D4%B1%C2%BB%20%D6%86%D5%ab%D5%B6%D5%A1%D5%B6%D5%BD%D5%A1%D5%кновеան%20%D5%AD%D5%B8%D6%82%D5%B4%D5%A2%20Armenian.png" 
              alt="Evoca Financial Group Structure" 
              className="max-w-full rounded-2xl shadow-sm object-contain"
            />
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}