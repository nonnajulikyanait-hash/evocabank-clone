import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../layout/navbar';
import Footer from './footer';

export default function Nerdroxner() {
  const investorReports = [
    {
      year: '2026',
      items: [
        { title: 'Q1 2026', img: 'https://www.evoca.am/images-cache/presentations/1/178056974111/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17815227523432.pdf' },
        { title: 'Q2 2026', img: 'https://www.evoca.am/images-cache/presentations/1/17878389620338/310x249.png', url: 'https://www.evoca.am/files/presentations/1/1787838962036.pdf' },
      ]
    },
    {
      year: '2025',
      items: [
        { title: 'Q1 2025', img: 'https://www.evoca.am/images-cache/presentations/1/1770815788229/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17470583456152.pdf' },
        { title: 'Q2 2025', img: 'https://www.evoca.am/images-cache/presentations/1/17664748278434/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17663899054056.pdf' },
        { title: 'Q3 2025', img: 'https://www.evoca.am/images-cache/presentations/1/17664748747987/310x249.jpg', url: 'https://evoca2025q1.tilda.ws/evocabankir-q32025' },
        { title: 'Q4 2025', img: 'https://www.evoca.am/images-cache/presentations/1/17708157882398/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17713982923618.pdf' },
      ]
    },
    {
      year: '2024',
      items: [
        { title: 'Q1 2024', img: 'https://www.evoca.am/images-cache/presentations/1/17302985228644/310x249.png', url: 'https://www.evoca.am/files/presentations/1/17302985228655.pdf' },
        { title: 'Q2 2024', img: 'https://www.evoca.am/images-cache/presentations/1/1730298522869/310x249.png', url: 'https://www.evoca.am/files/presentations/1/17302987788269.pdf' },
        { title: 'Q3 2024', img: 'https://www.evoca.am/images-cache/presentations/1/17314145677663/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17314140720543.pdf' },
        { title: 'Q4 2024', img: 'https://www.evoca.am/images-cache/presentations/1/17387814643422/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17394717404736.pdf' },
      ]
    },
    {
      year: '2023',
      items: [
        { title: 'Q1 2023', img: 'https://www.evoca.am/images-cache/presentations/1/17302968217456/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/1730296821747.pdf' },
        { title: 'Q2 2023', img: 'https://www.evoca.am/images-cache/presentations/1/17302969174799/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17302969174812.pdf' },
        { title: 'Q3 2023', img: 'https://www.evoca.am/images-cache/presentations/1/17302969839597/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17302969839608.pdf' },
        { title: 'Q4 2023', img: 'https://www.evoca.am/images-cache/presentations/1/17302970478884/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/17302970478894.pdf' },
      ]
    },
    {
      year: '2022',
      items: [
        { title: 'Q1 2022', img: 'https://www.evoca.am/images-cache/presentations/1/16524487203697/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/16524487203708.pdf' },
        { title: 'Q2 2022', img: 'https://www.evoca.am/images-cache/presentations/1/16596266074476/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/16596266074488.pdf' },
        { title: 'Q3 2022', img: 'https://www.evoca.am/images-cache/presentations/1/16673786499924/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/16673786499937.pdf' },
      ]
    },
    {
      year: '2021',
      items: [
        { title: 'Q1 2021', img: 'https://www.evoca.am/images-cache/presentations/1/16214240534691/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/16214240534699.pdf' },
        { title: 'Q2 2021', img: 'https://www.evoca.am/images-cache/presentations/1/16306514387262/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/16306514387274.pdf' },
        { title: 'Q3 2021', img: 'https://www.evoca.am/images-cache/presentations/1/16386106744165/310x249.png', url: 'https://www.evoca.am/files/presentations/1/16386106744178.pdf' },
        { title: 'Q4 2021', img: 'https://www.evoca.am/images-cache/presentations/1/16458579670074/310x249.png', url: 'https://www.evoca.am/files/presentations/1/16458579670083.pdf' },
      ]
    },
    {
      year: '2020',
      items: [
        { title: 'Q1 2020', img: 'https://www.evoca.am/images-cache/presentations/1/16164091530204/310x249.jpg', url: 'https://www.evoca.am/files/presentations/1/16164091530214.pdf' },
        { title: 'Q2 2020', img: 'https://www.evoca.am/images-cache/presentations/1/16164091530255/310x249.png', url: 'https://www.evoca.am/files/presentations/1/16164091530299.pdf' },
        { title: 'Q3 2020', img: 'https://www.evoca.am/images-cache/presentations/1/16164091530333/310x249.png', url: 'https://www.evoca.am/files/presentations/1/1616409153034.pdf' },
        { title: 'Q4 2020', img: 'https://www.evoca.am/images-cache/presentations/1/16164091530349/310x249.png', url: 'https://www.evoca.am/files/presentations/1/16164091530356.pdf' },
      ]
    },
    {
      year: '2019',
      items: [
        { title: 'Q3 2019', img: 'https://www.evoca.am/images-cache/presentations/1/16164099260851/310x249.png', url: 'https://www.evoca.am/files/presentations/1/1616409926086.pdf' },
        { title: 'Q4 2019', img: 'https://www.evoca.am/images-cache/presentations/1/161640992609/310x249.png', url: 'https://www.evoca.am/files/presentations/1/16164099260962.pdf' },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-800 flex flex-col justify-between">
      <div>
        <Navbar />

        {/* Reports Sub-header Purple Menu */}
        <div className="bg-[#6400dc] text-white py-3 px-4 sm:px-8 shadow-inner">
          <div className="container mx-auto flex gap-6 sm:gap-8 text-xs sm:text-sm font-semibold overflow-x-auto whitespace-nowrap">
            <Link to="/hashvetvutyunner" className="text-purple-200 hover:text-white transition">Աուդիտորական եզրակացություն</Link>
            <Link to="/finansakan" className="text-purple-200 hover:text-white transition">Ֆինանսական հաշվետվություններ</Link>
            <Link to="/nerdroxner" className="border-b-2 border-white pb-1 cursor-pointer font-black">Ներդրողների համար</Link>
            <Link to="/kisamyakayin" className="text-purple-200 hover:text-white transition">Կիսամյակային հաշվետվություն</Link>
            <Link to="/mermasintarekan" className="text-purple-200 hover:text-white transition">Տարեկան հաշվետվություն</Link>
          </div>
        </div>

        <main className="max-w-6xl mx-auto px-4 py-8 md:py-12 space-y-8 md:space-y-12 text-left">
          {/* Breadcrumbs */}
          <div className="text-xs text-gray-400 flex items-center gap-2 flex-wrap">
            <Link to="/mer-masin" className="hover:text-[#6400dc]">Մեր մասին</Link>
            <span>/</span>
            <span>Հաշվետվություններ</span>
            <span>/</span>
            <span className="text-gray-700 font-medium">Ներդրողների համար</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 mb-6 md:mb-8">
            Ներդրողների համար
          </h1>

          {/* Investor Presentations Grid */}
          <div className="space-y-10 md:space-y-12">
            {investorReports.map((group, idx) => (
              <div key={idx} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900">
                  {group.year}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {group.items.map((item, itemIdx) => (
                    <a 
                      key={itemIdx}
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-[#f8f9fa] hover:bg-gray-100 border border-gray-100 rounded-2xl overflow-hidden shadow-xs transition group flex flex-col"
                    >
                      <div className="w-full h-44 sm:h-48 bg-gray-100 overflow-hidden flex items-center justify-center p-2">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-full object-contain group-hover:scale-105 transition duration-300" 
                        />
                      </div>
                      <div className="p-4 flex items-center justify-between bg-white border-t border-gray-100">
                        <span className="text-neutral-800 font-bold text-xs sm:text-sm group-hover:text-[#6400dc] transition">
                          {item.title}
                        </span>
                        <span className="text-gray-400 group-hover:text-[#6400dc] text-sm font-bold">↓</span>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>

      <Footer />
    </div>
  );
}