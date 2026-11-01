import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Kisamyakayin() {
  const semiAnnualReports = [
    { title: 'Կիսամյակային հաշվետվություն (2025 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/menu/1/17567925915914.pdf' },
    { title: 'Կիսամյակային հաշվետվություն (2024 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/menu/1/174764918525.pdf' },
    { title: 'Կիսամյակային հաշվետվություն (2023 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/menu/1/1747649098332.pdf' },
    { title: 'Կիսամյակային հաշվետվություն (2022 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/menu/1/16599609692824.pdf' },
    { title: 'Կիսամյակային հաշվետվություն (2021 առաջին կիսամյակ)', url: 'https://www.evoca.am/files/global_files/1/16488915037172.pdf' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Reports Sub-header Purple Menu */}
        <div className="bg-[#6400dc] text-white py-3 px-8 shadow-inner">
          <div className="container mx-auto flex gap-8 text-xs font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/hashvetvutyunner" className="text-purple-200 hover:text-white transition">Աուդիտորական եզրակացություն</Link>
            <Link to="/finansakan" className="text-purple-200 hover:text-white transition">Ֆինանսական հաշվետվություններ</Link>
            <Link to="/nerdroxner" className="text-purple-200 hover:text-white transition">Ներդրողների համար</Link>
            <Link to="/kisamyakayin" className="border-b-2 border-white pb-1 cursor-pointer font-black">Կիսամյակային հաշվետվություն</Link>
            <span className="text-purple-200 hover:text-white cursor-pointer transition">Տարեկան հաշվետվություն</span>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-12 space-y-12">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Հաշվետվություններ</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Կիսամյակային հաշվետվություն</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-neutral-900 mb-8">
            Կիսամյակային հաշվետվություն
          </h1>

          <div className="space-y-6">
            <h2 className="text-xl font-extrabold text-neutral-900">
              Փաստաթղթեր
            </h2>

            {/* Semi-Annual Reports List */}
            <div className="space-y-4">
              {semiAnnualReports.map((report, idx) => (
                <a 
                  key={idx}
                  href={report.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#f8f9fa] hover:bg-gray-100 border border-gray-100 rounded-2xl p-5 flex items-center justify-between transition group shadow-xs"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#6400dc] flex items-center justify-center font-bold text-lg group-hover:bg-[#6400dc] group-hover:text-white transition">
                      📄
                    </div>
                    <span className="text-neutral-800 font-bold text-sm md:text-base group-hover:text-[#6400dc] transition">
                      {report.title}
                    </span>
                  </div>
                  <span className="text-gray-400 group-hover:text-[#6400dc] text-sm font-bold">↓</span>
                </a>
              ))}
            </div>
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}