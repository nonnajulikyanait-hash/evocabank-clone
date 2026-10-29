import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function CreditHistoryAndScore() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800">
      <Navbar />

      {/* Purple Sub-header Bar with Working Links */}
      <div className="bg-[#6400dc] text-white py-3 px-4 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center space-x-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
          <Link to="/loans" className="opacity-80 hover:opacity-100 cursor-pointer">
            Վարկեր
          </Link>
          <Link to="/credit-history-and-score" className="border-b-2 border-white pb-1 cursor-pointer">
            Վարկային պատմություն և uScore
          </Link>
          <Link to="/important-information" className="opacity-80 hover:opacity-100 cursor-pointer">
            Կարևոր տեղեկատվություն
          </Link>
        </div>
      </div>

      {/* Breadcrumb & Main Content */}
      <div className="max-w-5xl mx-auto px-4 py-8 text-left">
        <div className="text-xs text-gray-400 mb-6 flex items-center gap-2">
          <Link to="/" className="hover:text-gray-600">🏠</Link> &gt; 
          <span>Անհատ</span> &gt; 
          <Link to="/loans" className="hover:text-gray-600">Վարկեր</Link> &gt; 
          <span className="text-gray-700 font-medium">Վարկային պատմություն և սքոր</span>
        </div>

        <h1 className="text-3xl font-black text-neutral-900 mb-8">
          Վարկային պատմություն և սքոր
        </h1>

        <div className="flex gap-2 mb-8">
          <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold hover:bg-gray-200">f</button>
          <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold hover:bg-gray-200">in</button>
          <button className="w-8 h-8 rounded-full bg-gray-100 text-gray-600 flex items-center justify-center text-xs font-bold hover:bg-gray-200">O</button>
        </div>

        <h2 className="text-2xl font-black text-neutral-900 mb-4">
          Կարևոր տեղեկատվություն վարկային պատմության վերաբերյալ
        </h2>
        <p className="text-sm font-bold text-gray-800 mb-6">
          Վարկային պարտավորությունները չկատարելը կամ ոչ պատշաճ կատարելը կազդի Ձեր <span className="font-black text-neutral-900">ՎԱՐԿԱՅԻՆ ՊԱՏՄՈՒԹՅԱՆ</span> վրա:
        </p>

        <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Ինչ է վարկային պատմությունը</h3>
            </div>
            <p className="pl-4 text-gray-600 mb-3">
              «Վարկային տեղեկատվության շրջանառության և վարկային բյուրոների գործունեության մասին» ՀՀ օրենքի համաձայն վարկային տեղեկատվությունը վարկային տեղեկատվության սուբյեկտի կողմից ստանձնած պարտավորությունների վերաբերյալ տեղեկատվությունն է, որը ցույց է տալիս վարկային տեղեկատվության սուբյեկտի պարտքերը, վճարումները, վճարումների սովորությունները կամ պարտավորությունների կամ դրանց կատարման վերաբերյալ տեղեկատվություններ:
            </p>
          </div>
          <div>
            <div className="flex items-start gap-2.5 font-bold text-neutral-900 mb-2">
              <span className="w-2 h-2 rounded-full bg-[#6400dc] mt-1.5 shrink-0"></span>
              <h3>Որոնք են վարկային պատմության ձևավորման աղբյուրները</h3>
            </div>
            <p className="pl-4 text-gray-600">
              Վարկային պատմության ձևավորման աղբյուրներն են ԱՔՌԱ գործընկերները (բանկերը, վարկային կազմակերպությունները, ապահովագրական ընկերությունները...), որոնք տրամադրում են վարկային տեղեկատվության սուբյեկտի վերաբերյալ տեղեկություններ:
            </p>
          </div>
        </div>

        {/* PDF Link Section */}
        <div className="mt-12 pt-8 border-t border-gray-100">
          <h3 className="text-lg font-bold text-neutral-900 mb-4">Փաստաթղթեր</h3>
          <a
            href="https://www.evoca.am/files/global_files/1/information-summary-loan-07-04-2026.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 bg-purple-50 hover:bg-purple-100 text-[#6400dc] font-bold text-sm px-6 py-4 rounded-2xl transition"
          >
            <span>📄</span>
            <span>Տեղեկատվական ամփոփագիր (PDF)</span>
          </a>
        </div>
      </div>

      <Footer />
    </div>
  );
}