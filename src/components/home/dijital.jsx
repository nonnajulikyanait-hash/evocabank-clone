import React from 'react';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Dijital() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        <main className="max-w-6xl mx-auto px-4 py-8 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
            <span>🏠</span> &gt; <span>Բիզնես</span> &gt; <span className="text-gray-700 font-medium">Դեպոզիտարիա</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-black text-neutral-900 mb-8">
            Դեպոզիտարիա
          </h1>

          <div className="bg-white border border-gray-100 rounded-[28px] p-8 shadow-xs space-y-4">
            <h2 className="text-xl font-bold text-neutral-900">
              Դեպոզիտար ծառայություններ
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">
              Evocabank-ն առաջարկում է պրոֆեսիոնալ դեպոզիտար ծառայություններ արժեթղթերի հաշվառման և պահպանման համար:
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}