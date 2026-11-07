import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Hxumner() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Բովանդակության գլխավոր կոնտեյներ */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 md:py-12 text-left">
          
          {/* Հացի փշրանքներ (Breadcrumbs) */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2 flex-wrap">
            <span>🏠</span> &gt; <span className="text-gray-700 font-medium">Հղումներ Բանկի քարտապանների համար</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-neutral-900 mb-6 md:mb-8">
            Հղումներ Բանկի քարտապանների համար
          </h1>

          <div className="space-y-6 text-xs sm:text-sm text-gray-700 leading-relaxed">
            
            <h2 className="text-base sm:text-lg font-bold text-neutral-900 mb-4">Փաստաթղթեր</h2>

            {/* Փաստաթղթերի ցանկ */}
            <div className="space-y-4">
              
              {/* Փաստաթուղթ 1 */}
              <a 
                href="https://www.evoca.am/files/global_files/1/What-to-do-if-you-have-a-complaint.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#6400dc] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl shrink-0">📄</span>
                  <span className="font-semibold text-neutral-900 group-hover:text-[#6400dc] transition-colors">
                    Ինչ անել, եթե բողոք ունեք (01.09.2026թ.)
                  </span>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-[#6400dc] font-medium sm:shrink-0 ml-7 sm:ml-0">Ներբեռնել PDF</span>
              </a>

              {/* Փաստաթուղթ 2 */}
              <a 
                href="https://www.evoca.am/files/global_files/1/provision-terms-for-general-banking-services-arm.pdf" 
                target="_blank" 
                rel="noreferrer" 
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 bg-gray-50 border border-gray-200 rounded-xl hover:border-[#6400dc] transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-xl shrink-0">📄</span>
                  <span className="font-semibold text-neutral-900 group-hover:text-[#6400dc] transition-colors">
                    Համալիր բանկային ծառայությունների մատուցման պայմաններ 16.05.2025թ.
                  </span>
                </div>
                <span className="text-xs text-gray-400 group-hover:text-[#6400dc] font-medium sm:shrink-0 ml-7 sm:ml-0">Ներբեռնել PDF</span>
              </a>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}