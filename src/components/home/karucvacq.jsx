import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Karucvacq() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Sub-header navigation menu for About Us */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Ընդհանուր</Link>
            <span className="border-b-2 border-white pb-1 cursor-pointer font-black">Կառուցվածք</span>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Բաժնետերեր</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Ղեկավարություն</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Գործընկերներ</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Մրցանակներ</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">CSR</Link>
            <Link to="/mer-masin" className="text-purple-200 hover:text-white cursor-pointer">Էվոկա ֆինանսական խումբ</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-8">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Evoca-ի մասին</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Կառուցվածք</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
            Բանկի կառուցվածքը
          </h1>

          {/* Structure Image */}
          <div className="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-xs flex justify-center overflow-x-auto">
            <img 
              src="https://www.evoca.am/file_manager/structure/final/structure-hy.png" 
              alt="Բանկի կառուցվածքը" 
              className="max-w-full h-auto object-contain"
            />
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}